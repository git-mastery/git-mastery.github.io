{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="scenario" class="d-none">

The `conflict` repo has a branch named `josh` that has not been merged and a branch named `john` that has already been merged.
</div>

<div id="task" class="d-none">

**Merge `josh` into `main`.** This creates a merge conflict in `script.py`.<br>
**Resolve the merge conflict** and **complete the merge**.<br>
The intended outcome is `print('Hello Everyone and World!')`.
</div>

{{ show_exercise(exercises.conflict_mediator, is_panel=0) }}
