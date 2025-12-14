{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}


<div id="scenario" class="d-none">

The `duty-roster` repo contains text files that track which people are assigned for duties on which days of the week.
</div>

<div id="task" class="d-none">

1. Add a lightweight tag `first-pilot` to the first commit of the repo.
2. Add the annotated tag `v1.0` to the commit that updates March duty roster. The tag should have the message `first full duty roster`.
</div>

{{ show_exercise(exercises.tags_add, is_panel=0) }}
