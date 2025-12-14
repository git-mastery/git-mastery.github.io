{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}


<div id="scenario" class="d-none">

The `duty-roster` repo contains text files that track which people are assigned for duties on which days of the week. This repo is backed up in a remote named `production`. Apparently, tags in the local repo are not in sync with the tags in your remote.
</div>

<div id="task" class="d-none">

Rectify the out-of-sync tags as follows:

1. Push both tags in the local repo to the remote.
1. If any tags are present in the remote `production` but not in the local repo (i.e., likely result of you previously deleting them in the local repo but forgetting to delete them in the remote repo), delete them in the remote.
</div>

{{ show_exercise(exercises.tags_push, is_panel=0) }}
