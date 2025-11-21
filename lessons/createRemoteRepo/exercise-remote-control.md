{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="task" class="d-none">

1. As per the usual practice, `cd` into the `remote-control` folder.
1. Run `gitmastery verify` command.<br>
1. Take note of the repo name provided by Git-Mastery app (in its response).
1. Create a new public GitHub repository using the repo name given.
1. Provide the URL of that remote (without the `.git` at the end) when prompted<br>
 e.g., `https://github.com/johndoe/gitmastery-johndoe-remote-control`

</div>

{{ show_exercise(exercises.remote_control, is_panel=0) }}
