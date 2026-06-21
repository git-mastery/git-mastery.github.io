---
name: concepts-review
description: Review Git-Mastery website pages, lessons, detours, and exercises for conceptual correctness, Git/GitHub accuracy, target-audience suitability, missing in-scope concepts, explanation gaps, contradictions, confusing phrasing, and whether concepts are introduced in an order consistent with the site's lesson sequence. Use when Codex is asked to perform a Concepts Review, review the contents of this Git-Mastery site, or assess a page's explanations rather than only grammar/style.
---

# Concepts Review

## Purpose

Use this skill to review Git-Mastery content as instructional material. Focus on whether the page teaches Git and GitHub accurately, covers the Git/GitHub concepts that belong in its lesson scope, uses the right depth for university CS students, and follows a sequence that matches the rest of the site.

## Required Context

Read `references/git-mastery-lesson-sequence.md` before reviewing any lesson, detour, exercise, or page whose concepts depend on lesson order.

If the reference might be stale, run this helper from the repository root to rediscover the current order from `common/macros.njk`:

```bash
python3 .codex/skills/concepts-review/scripts/extract_lesson_sequence.py
```

Trust `common/macros.njk` as the canonical lesson order. Do not infer order from individual `index.md` frontmatter when it conflicts with the trail data.

## Review Workflow

1. Identify the target page, lesson, detour, or exercise from the user's URL or path.
1. Inspect authored source first. For lesson pages, read `index.md`, `text.md`, and any included `steps-*`, `detour-*`, common fragments, exercises, or macros that materially affect the reviewed content.
1. Inspect the rendered page when the user provides a URL, asks about rendered behavior, or the content depends on MarkBind/CustardUI expansion. Expand collapsed panels, peek panels, tabs, accordions, popovers, and highlighted sections that contain instructional prose; wait for lazy content before judging it.
1. Locate the page in the lesson sequence. Read the immediate previous and next lesson summaries or source when the page's prerequisites or future references are unclear.
1. Determine the expected conceptual scope from the lesson title, neighboring lessons, stated learning outcomes, exercises, detours, and commands or workflows used on the page. Report concepts that are within that scope but missing or too implicit, even when the existing text is technically correct.
1. Review with the lenses below, then print the result for the user.

## Rendered MarkBind Inspection Notes

For Git-Mastery lesson pages, source markup is often transformed by MarkBind and CustardUI before it reaches the browser. Use these shortcuts to avoid unnecessary rendered-page trial and error:

* Inspect source first, then use the rendered page only to confirm the learner-facing expansion, selected tabs, visible panels, and dynamic behavior.
* Treat `<tooltip content="EXPLANATION">KEYWORDS</tooltip>` as reader-facing instructional prose: `KEYWORDS` appears in the rendered text with a dotted underline, and `EXPLANATION` appears on hover as additional information for that text.
* Treat MarkBind `popover` elements similarly to `tooltip` elements. Review both the visible trigger text and the hidden explanatory content when judging conceptual accuracy, sequencing, and audience fit.
* Do not expect literal source tags such as `<panel>` to remain in the browser DOM. Panels and exercises are often rendered as `cv-toggle` wrappers and Bootstrap-like card structures.
* Exercise panels usually have stable rendered headings such as `#exercise-side-track` or `#exercise-branch-previous`. Click the heading or its nearby card header to expand the panel, then read the scoped generated container.
* Source IDs used by MarkBind modal or trigger syntax might not be attached as raw DOM IDs before interaction. If a modal is sourced from an included fragment, read the included source and verify that the trigger text appears in the rendered page.
* If the in-app browser runtime does not support a browser API such as `networkidle` waits or `document.createTreeWalker`, switch to simple load-state waits and bounded `querySelectorAll`-based projections.
* Avoid broad body text dumps as the first rendered-page strategy. Fixed side navigation, CustardUI settings, and transformed component trees can dominate the output. Prefer focused selectors, small DOM projections, or screenshots around the relevant section.

## Review Lenses

### Git and GitHub Accuracy

Check whether explanations match how Git and GitHub actually work:

* Local repository state, working tree, staging area, commits, refs, branches, HEAD, remotes, remote-tracking branches, upstreams, tags, diffs, checkout/switch, reset, revert, merge, rebase, cherry-pick, pull/fetch/push, forks, pull requests, and GitHub repository behavior.
* Command examples, UI steps, expected outputs, diagrams, and stated consequences.
* Scope-sensitive claims such as Git versus GitHub behavior, CLI versus Sourcetree behavior, local branch versus remote branch, and remote branch versus remote-tracking branch.

If a detail depends on current GitHub UI or a current tool version and you are not sure, verify against official documentation before calling it wrong.

### Audience Fit

Evaluate suitability for university CS students learning Git by doing:

* Prefer simple mental models first, then exact mechanics and caveats.
* Expect students to know files, folders, command-line basics, and programming projects, but not Git's internal object model unless already introduced.
* Flag explanations that are too terse to act on, too advanced for the lesson point, or overly simplified in a way that will cause wrong habits.
* Check that exercises have observable success criteria and enough context to self-test.

### Learning Depth and Fine Print

Balance accuracy with novice cognitive load:

* Flag missing concepts when they fall within the lesson's natural scope and their absence would leave students unable to explain, predict, or safely perform the workflow being taught.
* Treat a concept as in scope when it is required by the page's title, stated goal, exercise success criteria, core command sequence, diagram, or immediate position in the lesson sequence.
* Do not require the main explanation to cover every edge case, exception, alternate term, or internal mechanism when a simpler version is accurate enough for the current lesson goal.
* Flag simplifications only when they are materially false, likely to create a bad habit, or likely to make a later lesson harder to reconcile.
* Prefer moving nonessential caveats into a skippable `fine print` popover when the detail is accurate and useful but not needed for the main learning path. In lesson source that imports the macro, suggest `{{ show_fine_print("...") }}`; otherwise suggest the local MarkBind popover pattern.
* Do not hide prerequisites, required warnings, success criteria, or steps needed to complete an exercise inside `fine print`.
* Treat `fine print` as a good fit for version/tool caveats, rare Git behaviors, alternate terminology, and short previews of future concepts.

### Sequence Awareness

Use the lesson sequence reference to determine what the learner has already met. Flag:

* A concept, command, or term used as assumed knowledge before its introductory lesson.
* A future concept used without a local, minimal explanation or an explicit "you will learn this later" framing.
* A contradiction with an earlier mental model that is not acknowledged as a refinement.
* A detour or optional panel that introduces advanced material without clear scoping.

Do not flag every future-word mention automatically. It is acceptable to name a future concept when the page gives enough immediate meaning for the current task or explicitly marks it as optional/future knowledge.

Minimize forward references in the main path. When future concepts must be mentioned, prefer a brief local meaning plus "you will learn this later" framing, or move the extra detail into `fine print`, a detour, or another clearly optional element.

## Report Format

Print a concise review in this shape:

```markdown
**Concepts Review: <page/path>**

Verdict: <one sentence>

Findings:
* [P1/P2/P3] <Location> - <issue>
  Why it matters: <conceptual/audience/sequence impact>
  Suggested fix: <specific content change>

Sequence notes:
* Current lesson position: <tour/lesson or unknown>
* Assumed prior concepts: <short list>
* Missing in-scope concepts: <short list, or "None that need action">
* Future concepts used: <short list, or "None that need action">
* Fine-print candidates: <short list, or "None">

Coverage:
* Source reviewed: <files/fragments>
* Rendered behavior reviewed: <yes/no, and panels/tabs expanded if applicable>
```

Use `P1` for materially inaccurate Git/GitHub explanations, serious learner-blocking contradictions, or missing core concepts that prevent students from completing the lesson's main workflow. Use `P2` for confusing gaps, missing in-scope concepts that risk shallow or wrong understanding, weak sequencing, or likely misconception risks. Use `P3` for smaller improvements. If there are no findings, say so clearly and still include sequence notes and coverage.
