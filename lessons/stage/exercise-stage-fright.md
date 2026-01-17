{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="scenario" class="d-none">

The `attendance` repo has five files, two of which have been staged, and three are yet to be staged.
</div>

<div id="task" class="d-none">

Stage the three unstaged files.
</div>

{{ show_exercise(exercises.stage_fright, is_panel=0) }}
