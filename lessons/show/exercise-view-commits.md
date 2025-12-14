{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}


<div id="scenario" class="d-none">

The `duty-roster` repo contains five files, each one containing names of people assigned to a duty roster for a specific day of the week. For example, `Monday.txt` contains names of people assigned to duties on Mondays. These files are updated monthly, to record any changes to duty assignments.
</div>

<div id="task" class="d-none">

Answer the questions in the `answers.txt`, by examining the relevant commits in the `duty-roster` repo.
</div>

{{ show_exercise(exercises.view_commits, is_panel=0) }}
