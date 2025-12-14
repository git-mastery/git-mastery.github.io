{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}


<div id="scenario" class="d-none">

The `duty-roster` repo contains text files that track which people are assigned for duties on which days of the week. Some of the tags added earlier have been found to be incorrect.
</div>

<div id="task" class="d-none">

1. To make tag names consistent, change `first-update` tag to `january-update`.
2. The`april-update` tag is currently pointing to the commit that updates the duty roster for May. Move it to the correct commit.
</div>

{{ show_exercise(exercises.tags_update, is_panel=0) }}
