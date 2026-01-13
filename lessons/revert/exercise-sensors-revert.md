{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

**The background** is same as the scenario in exercise {{ show_exercise_link(exercises.sensors_diff) }}, repeated below for ease of reference:

><include src="../diff/exercise-sensors-diff.md#scenario" />

**Now**, you have found that the last few commits have some problems. You wish to **reverse those commits, without changing any of the current commits** so that problematic commits are preserved in history for future reference.

</div>

<div id="task" class="d-none">

Use Git's _revert_ feature to reverse the problematic commits, as follows:

1. Revert the commit containing data for Jan 14th. Keep the default commit message.
1. Do the same for Jan 13th.

</div>

{{ show_exercise(exercises.sensors_revert, is_panel=0) }}

