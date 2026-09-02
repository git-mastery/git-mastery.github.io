Git-Mastery

## Keeping both themes working

The site renders in **light and dark mode**. `site.json` sets `style.darkMode: true`, MarkBind
picks the reader's OS `prefers-color-scheme` on first visit, and the navbar toggle overrides
that and remembers the choice in `localStorage`. Both themes are held to WCAG AA: **4.5:1 for
normal text, 3:1 for large text**. A block that carries no text of its own only has to stay
visibly distinct from what is behind it.

All of the theme handling lives in the "Dark mode" section at the end of `css/main.css`, with
the measured contrast ratio in a comment beside each value. When you add content, these are the
things that break a theme.

### Colors

**Never write a color into a page.** `style="color: red"` and `style="background-color: #e6fff2"`
cannot change with the theme. Use a Bootstrap utility, or add a class to `css/main.css` with a
`[data-bs-theme="dark"]` counterpart beside it.

**Prefer a translucent wash to a second opaque color.** `rgba(...)` tints whichever page
background is behind it, so it needs no dark-mode counterpart at all. The exception is a tint
that will sit inside another tint: stacked washes compound, and the "Project Folder" diagram
needs an explicit value per theme for exactly that reason.

**Do not reach for Bootstrap's `bg-*-subtle` utilities.** They are theme-aware, but their dark
values are darker than the dark page (`bg-info-subtle` is `#032830` against `#212529`, 1.01:1),
so the tint disappears instead of adapting.

**Some Bootstrap tokens are fixed in both themes**, so anything pairing them with an adaptive
color drifts out of contrast in one theme. `--bs-dark-rgb` is byte-identical to the dark page
background. `.text-secondary`, `text-dark`, `text-light`, `bg-light` and the `--bs-*-rgb`
behind `.text-danger` and friends do not move either. Reach for `text-body-emphasis`,
`text-body-secondary`, `bg-body-tertiary` and the `*-text-emphasis` tokens instead.

**Pair a text color with the fill it sits on.** `bg-*` paints only the ground, and a badge's own
default text is white, which is 3.0:1 on this site's teal. Use `text-bg-*`, or pin the pair in
CSS when the class is composed in Nunjucks (`bg-{{ style }}`) and no source-level rename can
reach it.

### Images and diagrams

**Images with dark ink on a transparent background need `class="tbg"`** (or `add-class="tbg"`
where the tag already has attributes), which puts a pale ground behind them. Screenshots with an
opaque background do not need it, and neither does a merely transparent rounded corner.
`show_two_column_row` applies it by default because it is used almost exclusively for line
diagrams; pass `tbg=0` for an opaque image.

**Mermaid diagrams are handled by the `.mermaid` rule** — mermaid draws its own near-black ink
and does not follow the page theme. Do not wrap a diagram in a `<div class="tbg">` instead; that
collapses its width.

### Checking your work

Run a full `markbind build` and look at the pages you changed **in both themes** — the navbar
toggle switches between them. `markbind serve` writes a lazy, partial `_site`, so build fully
before judging anything.

What to look for: text that has gone faint against its background, and panels, badges or banners
that have dissolved into the page. Both failures show up in one theme only, which is why looking
at just the theme you work in is not enough.

**Check what a low-contrast element is _for_ before "fixing" it.** Some of them are deliberate:
the blank "ghost" commit circles in the reset lesson are drawn in their own fill color on purpose,
to show a commit that has dropped out of a branch.

If you want measurements rather than an eyeball check, there is a contrast auditor at
`.claude/skills/contrast-audit/scripts/contrast-audit.js`. It reports every element on a page
that falls below AA. Copy it into the built site, serve `_site`, and call `__audit()` from the
browser console:

```bash
markbind build && cp .claude/skills/contrast-audit/scripts/contrast-audit.js _site/
```

```js
await new Promise(r => { const s = document.createElement('script');
  s.src = '/contrast-audit.js'; s.onload = r; document.head.appendChild(s) });
__audit()
```

Read its output with some skepticism — it compares brightness only, so a yellow highlight on
white is reported as invisible even though the color makes it obvious. The full procedure, and
the list of findings that are known false alarms, is in the `contrast-audit` skill that ships
alongside the script.
