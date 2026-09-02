/* =====================================================================
   Contrast auditor for a built MarkBind page.

   Load it into a page of the BUILT site and call __audit(). It reports
   two kinds of defect:

     text   - a text node whose colour is below WCAG AA against the
              background actually painted behind it (4.5:1, or 3:1 for
              large text). Alpha is composited through every ancestor,
              so translucent washes are measured correctly.

     blocks - an element that paints a background indistinguishable
              from its own ground. Nothing becomes unreadable, but the
              banner/badge/panel visually disappears. Bordered and
              shadowed elements are skipped, since those stay legible.

   It respects whatever theme the page is currently in. Do NOT force
   the theme with setAttribute while a colour-scheme emulation is
   active: you get a half-applied page (dark backgrounds under light
   text) and a page full of bogus 1.00 ratios.

   This file lives under .claude/, which MarkBind's deploy does not publish.
   Copy it into the built site by hand before using it:

     markbind build && cp .claude/skills/contrast-audit/scripts/contrast-audit.js _site/

   USAGE (in the browser console of a served page):
     await new Promise(r=>{const s=document.createElement('script');
       s.src='/contrast-audit.js'; s.onload=r; document.head.appendChild(s)});
     __audit()

   Known false positive: it compares luminance only, so a yellow <mark>
   on white, or a code block a shade off the page, is reported as an
   invisible block although hue makes it perfectly visible. Check any
   block finding by eye before acting on it.
   ===================================================================== */
window.__audit = function () {
  const root = document.documentElement;
  const PAGE = root.getAttribute('data-bs-theme') === 'dark' ? [33,37,41] : [255,255,255];

  const lum = c => { const k = c.map(x => { x/=255; return x<=.03928 ? x/12.92 : Math.pow((x+.055)/1.055,2.4); }); return .2126*k[0]+.7152*k[1]+.0722*k[2]; };
  const cr  = (a,b) => { const l=[lum(a),lum(b)].sort((x,y)=>y-x); return (l[0]+.05)/(l[1]+.05); };
  const P   = s => { if(!s||s==='transparent') return null; const m=s.match(/[\d.]+/g); if(!m) return null; const n=m.map(Number); return {rgb:n.slice(0,3), a:n.length>3?n[3]:1}; };
  const over= (f,b) => f.rgb.map((v,i)=>Math.round(f.a*v+(1-f.a)*b[i]));
  const hex = c => '#'+c.map(v=>Math.max(0,Math.min(255,v)).toString(16).padStart(2,'0')).join('');
  const sig = e => e.tagName.toLowerCase() + (typeof e.className==='string'&&e.className ? '.'+e.className.trim().split(/\s+/).slice(0,4).join('.') : '') + (e.getAttribute('style')?'[style]':'');

  function ground(el) {
    const stack = [];
    for (let n = el.parentElement; n && n !== root; n = n.parentElement) {
      const bg = P(getComputedStyle(n).backgroundColor);
      if (bg && bg.a > 0) { stack.push(bg); if (bg.a === 1) break; }
    }
    let base = PAGE.slice();
    for (let i = stack.length - 1; i >= 0; i--) base = over(stack[i], base);
    return base;
  }

  const text = new Map(), blocks = new Map();
  document.querySelectorAll('body *').forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return;
    const r = el.getBoundingClientRect(); if (!r.width || !r.height) return;

    const own = P(cs.backgroundColor);
    if (own && own.a > 0.15) {
      const g = ground(el), painted = over(own, g);
      const pad = parseFloat(cs.paddingTop) + parseFloat(cs.paddingLeft);
      const hasBorder = parseFloat(cs.borderTopWidth) > 0 || parseFloat(cs.borderLeftWidth) > 0;
      let bordered = false;
      if (hasBorder) { const bc = P(cs.borderTopColor) || P(cs.borderLeftColor); if (bc && bc.a > 0.2 && cr(over(bc,g), g) >= 1.25) bordered = true; }
      if (cs.boxShadow && cs.boxShadow !== 'none') bordered = true;
      if (cr(painted, g) < 1.15 && !bordered && (pad > 1 || el.classList.contains('badge'))) {
        const k = sig(el)+hex(painted);
        if (!blocks.has(k)) blocks.set(k, { sig: sig(el), bg: hex(painted), ground: hex(g), ratio: +cr(painted,g).toFixed(2), sample: (el.textContent||'').trim().slice(0,40) });
      }
    }

    if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1)) return;
    const fp = P(cs.color); if (!fp) return;
    let g = ground(el); if (own && own.a > 0) g = over(own, g);
    const fg = over(fp, g), ratio = cr(fg, g);
    const big = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && +cs.fontWeight >= 700);
    const need = big ? 3 : 4.5;
    if (ratio < need) {
      const k = sig(el)+hex(fg)+hex(g);
      if (!text.has(k)) text.set(k, { sig: sig(el), color: hex(fg), bg: hex(g), ratio: +ratio.toFixed(2), need, sample: (el.textContent||'').trim().slice(0,48) });
    }
  });

  return {
    url: location.pathname,
    theme: root.getAttribute('data-bs-theme'),
    width: innerWidth,
    text:   [...text.values()].sort((a,b)=>a.ratio-b.ratio),
    blocks: [...blocks.values()].sort((a,b)=>a.ratio-b.ratio)
  };
};
