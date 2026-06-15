# AGENTS.md

## Project Context

**Git-Mastery is an instructional self-learning website for university computer science students learning Git and GitHub.** The content should help students build practical habits, understand revision-control concepts, and self-test through exercises.

**The site is authored with MarkBind and enhanced with CustardUI.** MarkBind source files are the source of truth, while CustardUI dynamically annotates and customizes rendered pages based on `custardui.config.json` and `_markbind/plugins/custardui.js`.

## Source Boundaries

**Edit authored source, not generated output.** Prefer changes in files such as `index.md`, `lessons/**`, `about/**`, `faq/**`, `exercises-directory/**`, `common/**`, `_markbind/layouts/**`, `_markbind/boilerplates/**`, `_markbind/variables.md`, `site.json`, `custardui.config.json`, and `css/main.css`.

**Avoid editing generated or local-only artifacts unless explicitly asked.** In particular, avoid `_site/`, `_markbind/logs/`, `node_modules/`, `.idea/`, and OS metadata files.

**Fragments are intentionally excluded from direct page generation.** Files named `*-fragment.md` are included from other pages and should remain reusable, context-light, and compatible with the pages that include them.

## MarkBind Authoring

**Treat MarkBind pages as Nunjucks-processed source before Markdown rendering.** Preserve existing include patterns, macros, boilerplates, page layouts, frontmatter, and MarkBind component syntax.

**Escape literal template syntax when it is meant to appear as text.** Use MarkBind/Nunjucks-safe patterns, such as raw blocks, when examples need to show `{{ ... }}` or `{% ... %}` literally.

**Keep lesson structure consistent with nearby lessons.** Many lessons use `index.md` as the page entry point, `text.md` for lesson prose, `exercise-*.md` for self-tests, `steps-*-fragment.md` for reusable instructions, `detour-*-fragment.md` for optional material, and `images/` for visual aids.

**Use MarkBind components only when they support learning.** Components, popovers, panels, tabs, and annotations should make concepts clearer or workflows easier to follow, not add decoration.

## CustardUI

**Preserve CustardUI labels, toggles, placeholders, and tab groups when editing content they depend on.** If a lesson, detour, exercise, OS-specific segment, or UI-specific segment is renamed or moved, update `custardui.config.json` so annotations and filtering still work.

**Keep customized views understandable on their own.** Content hidden or shown by CustardUI should not leave the visible page with missing prerequisites, broken references, or confusing transitions.

**Be careful with OS-specific and UI-specific instructions.** Windows, macOS, Linux, CLI, and Sourcetree variants should remain accurate and clearly scoped.

## Writing Style

**Use American English for all new and revised prose.** This site is for an international student audience, so prefer direct, plain wording over region-specific idioms.

**Write for students who are learning Git concepts while doing hands-on work.** Explain the mental model, then connect it to concrete commands, UI actions, repository states, and observable outcomes.

**Follow the bold TLDR style in instructional prose.** Bold complete claims or self-contained sentence parts so a reader can skim only the bold text and still understand the main path, sequence, and takeaway.

**Do not bold isolated keywords just for emphasis.** The bold layer should read like a compact outline; the non-bold text should elaborate, qualify, or give examples.

**Keep exercise instructions precise and testable.** Exercises should make it clear what the student should do, what they should observe, and how they can tell whether they succeeded.

## Markdown Conventions

**Follow the local Markdown coding standard when editing Markdown or MarkBind source.** Use GitHub Flavored Markdown, leave a blank line before lists and fenced code blocks, use `*` for unordered bullets, use `_` for italics, and do not wrap prose at a fixed line length.

**Use generic numbering for ordered lists.** Write each ordered-list item as `1.` so Markdown controls the displayed numbering.

**Preserve existing code block, command, and inline-code conventions.** Git commands, branch names, filenames, refs, and UI labels should be easy to distinguish from prose.

## Validation

**Run the available MarkBind build or serve workflow after meaningful source changes.** This is especially important when changing includes, layouts, frontmatter, CustardUI configuration, links, or MarkBind component syntax.

**Check both authored source and rendered behavior when changing dynamic content.** For CustardUI-related changes, verify that relevant toggles, placeholders, tab groups, labels, and annotated sections still behave correctly.

**When inspecting rendered MarkBind pages, expect source components to be transformed.** Generated pages may no longer contain literal `<panel>` tags or source IDs exactly as written. For exercise panels, detours, and lesson sections, use stable rendered anchors such as headings (`#exercise-...`), visible card headers, `cv-toggle` wrappers, or text from the authored source to locate the generated element.

**Prefer targeted rendered-page checks over broad page extraction.** For local lesson reviews, inspect authored source first, then use focused DOM queries, screenshots, and clicks on specific rendered headings or controls. MarkBind/CustardUI pages can have large fixed navigation and transformed component trees, so full-page text dumps and generic accessibility snapshots can waste time.

**Use intrasite link validation results seriously.** `site.json` enables intrasite link validation, so broken local links should be fixed rather than ignored.

## Change Discipline

**Keep changes focused on the requested lesson, workflow, or support file.** Avoid broad rewrites unless the request is specifically about site-wide style, terminology, or structure.

**Do not rewrite student-facing explanations only for stylistic preference.** Preserve correct existing pedagogy and improve only where clarity, accuracy, consistency, or maintainability genuinely benefits.

**When adding new Git or GitHub guidance, prefer current, generally applicable behavior.** If a detail depends on a tool version, operating system, or UI client, state the scope clearly.

**When suggesting a commit message subject (while doing a grammar/phrasing/html/browser scan), avoid using ambiguous repeated filenames as the subject prefix.** In particular, `text.md:` is rarely useful because many lessons have a `text.md`; use the parent folder name instead, such as `log: Change spelling realise -> realize` for a change in `lessons/logs/text.md`.

## Permissions

When needed, update the following files without asking for permission first:
* /Users/damithch/Repos/damithc/ai-scripts/issues_found.py
