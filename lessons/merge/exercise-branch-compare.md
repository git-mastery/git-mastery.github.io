{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You are recording a numerical data stream from two sources. The data are stored in `data.txt`, using a different branch for each stream. The two data streams are supposed to be identical but can vary on rare occasions.

</div>

<div id="task" class="d-none">

Compare the two branches to determine the answers to the following questions:

**Q:** Which numbers are present in stream-1 but not in stream-2?

**Q:** Which numbers are present in stream-2 but not in stream-1?

</div>


{{ show_exercise(exercises.branch_compare, is_panel=0) }}

