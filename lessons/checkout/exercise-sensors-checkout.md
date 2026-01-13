{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

Same as the scenario in exercise {{ show_exercise_link(exercises.sensors_diff) }}. Repeated below for ease of reference:

><include src="../diff/exercise-sensors-diff.md#scenario" />

</div>

<div id="task" class="d-none">

Traverse the revision history to answer the following questions.


**Q1:** What's sum of values in `south.csv` on Jan 11th?

<box type="tip" seamless>

You can use the bash command `awk '{s+=$1} END {print s}' south.csv` to find the sum of values in `south.csv` (and so on). Alternatively, you can open the csv file in a spreadsheet program and use a feature of that program to find the sum.
</box>

**Q2:** What's sum of values in `west.csv` on Jan 09th?

**Q3:** What's sum of values in `north.csv` on Jan 05th?

</div>

{{ show_exercise(exercises.sensors_checkout, is_panel=0) }}

