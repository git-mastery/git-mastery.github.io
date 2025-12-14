{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

The background is same as the scenario in exercise {{ show_exercise_link(exercises.sensors_diff) }}, repeated below for ease of reference:

>A system is using Git to record data received daily from for sensors, each monitoring one of directions east, west, north, south. Each sensor provides 20 integer values, which are stored in a csv file (e.g., values from the sensor monitoring the east direction are recorded as `east.csv`). Data for each day is recorded as one commit.

Now, you have found that the **last few commits have some problems**, might need some manual fixes.
</div>

<div id="task" class="d-none">

To preparation for the manual fixes to problematic fixes, do the following steps.

1. Discard the last two commits entirely. They are totally incorrect.
2. Discard the next commit (i.e., data for Jan 13) but keep the changes in the working directory. They need some major changes, which you'll do later.
3. Discard the next commit (i.e., data for Jan 12) but keep the changes staged. You will do some minor changes to them and commit them again soon.

</div>

{{ show_exercise(exercises.sensors_reset, is_panel=0) }}
