{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You have a branch `improve-loadding` that you have pushed to a remote repository, before you realised the branch name has a typo.

</div>

<div id="task" class="d-none">

Rename the branch (both locally and in the remote repo) as `improve-loading`.

</div>

{{ show_exercise(exercises.remote_branch_rename, is_panel=0) }}
