---
name: contrast-audit
description: Measure the light-mode and dark-mode contrast of built Git-Mastery pages and interpret the results. Use when Claude changes colors, adds a class or inline style that paints text or a background, adds images or mermaid diagrams, edits the "Dark mode" section of css/main.css, or is asked to check, audit, or verify contrast, accessibility, WCAG AA, or whether a page still reads correctly in both themes.
---

# Contrast Audit

## Purpose

Use this skill to verify that a Git-Mastery page meets WCAG AA in **both** themes: 4.5:1 for
normal text, 3:1 for large text. A block that carries no text of its own only has to stay
visibly distinct from the ground behind it.

The site renders in light and dark mode. `site.json` sets `style.darkMode: true`, MarkBind picks
the reader's OS `prefers-color-scheme` on first visit, and the navbar toggle overrides that and
remembers the choice in `localStorage`. All theme handling lives in the "Dark mode" section at
the end of `css/main.css`, with the measured ratio in a comment beside each value.

The authoring rules that keep both themes working — never write a color into a page, which
Bootstrap tokens are fixed in both themes, when an image needs `tbg` — are in `AGENTS.md` under
"Light and Dark Mode". This skill covers measuring, not authoring.

## Build and Serve

**Always run a full `markbind build` first.** `markbind serve` replaces `_site` with a lazy,
partial build; check that the page count is what you expect. Then copy the auditor into the
built site — `.claude/` is not published, so it is not there by default:

```bash
markbind build && cp .claude/skills/contrast-audit/scripts/contrast-audit.js _site/
```

Serve `_site` with a plain static server rather than `markbind serve`. The `site-static`
configuration in `.claude/launch.json` does this on port 8098.

## Running the Auditor

Load it from a served page and call `__audit()`:

```js
await new Promise(r => { const s = document.createElement('script');
  s.src = '/contrast-audit.js'; s.onload = r; document.head.appendChild(s) });
__audit()
```

It returns `{url, theme, width, text, blocks}`. `text` lists text nodes below AA against the
background actually painted behind them, with alpha composited through every ancestor. `blocks`
lists elements whose background is indistinguishable from their own ground; bordered and
shadowed elements are skipped, since those stay legible.

**Audit in both themes, at a viewport of at least 1400px.** Below that width the left sidebar is
hidden and its defects are missed.

**Set the theme through the browser's color-scheme emulation, then load the page fresh.** Do not
force `data-bs-theme` with `setAttribute` while an emulation is active: the page ends up
half-applied, with dark backgrounds under light text, and the report fills with bogus `1.00`
ratios.

**Expand collapsed panels before auditing**, since the auditor skips zero-size elements. Much of
this site's content — exercises, detours, preparation panels — starts collapsed:

```js
document.querySelectorAll('.card-collapse, .collapse').forEach(e => {
  e.classList.add('show'); e.style.height = 'auto'; e.style.overflow = 'visible'; });
```

## Choosing Pages

Audit the pages your change actually affects, and remember that a regression can hide on a page
you did not re-check. When a change touches shared macros or `css/main.css`, sample across the
component families rather than auditing one page well:

* `lessons/branch` — mermaid diagrams, `tbg` line diagrams, hands-on practicals
* `lessons/commit` — the "Project Folder" diagram, its nested tinted regions and badges
* `lessons/reset` — the deliberately blank "ghost" commit circles
* `lessons/gitPrep` — preparation panels, OS tab groups, the colored "Run from ..." legend
* `lessons/push` — `highlight-lines` bands inside code blocks
* `lessons/trail` — tour intro/outro panels
* `exercises-directory`, `faq`, `companion-app`, `index` — non-lesson layouts

## Interpreting Findings

**Check what a low-contrast finding is _for_ before acting on it.** Some low contrast is
deliberate. The blank "ghost" commit circles in the reset lesson are drawn in their own fill
color on purpose, to show a commit that has dropped out of a branch; they measure 1.00:1 and
should stay that way.

**Two families of finding are known false positives:**

* The auditor compares luminance only, so a yellow `<mark>` or annotation label on white is
  reported as an invisible block although hue makes it obvious.
* It reads an element's CSS `color` rather than an SVG's `fill`, so mermaid labels are reported
  as unreadable. Check the real `fill` before believing it.

**These blocks are expected and fine:** the navbar (it has a bottom border marking it off), code
blocks (`#2b2b2b` against the dark page, distinguished by hue), and the footer.

## Fixing Findings

Put the fix in the "Dark mode" section at the end of `css/main.css`, and **record the measured
ratio in a comment beside the value.** Measure rather than estimate — compute the composited
color and the resulting ratio instead of choosing by eye.

**When two of your own rules overlap, give the targeted one higher specificity rather than
relying on source order.** A later rule of equal specificity silently wins; that is how a general
`[data-bs-theme="dark"] .dimmed` once beat a targeted `.bg-warning .dimmed` written earlier.

**Some colors cannot be overridden on the element itself.** MarkBind's Vue layer re-applies the
color on collapsed-panel buttons, and MarkBind's own `[data-bs-theme="dark"] mark` out-ranks a
plain `mark` selector. If an `!important` override appears to do nothing, colour a child element
instead, or follow MarkBind's value rather than fighting it.

**Re-audit the specific page that exhibited the problem**, not just a convenient sample. A
regression has shipped before because four other pages were re-checked and the affected one was
not among them.
