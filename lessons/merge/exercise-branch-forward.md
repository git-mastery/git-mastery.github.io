{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You are writing the outline for a story. You now have two parallel storylines in two branches.

</div>

<div id="task" class="d-none">

Merge only the branch(es) that can be fast-forwarded. Use fast-forward merging.

Tip: Ensure you have switched to the destination branch before initiating the merge.

</div>

{{ show_exercise(exercises.branch_forward, is_panel=0) }}

