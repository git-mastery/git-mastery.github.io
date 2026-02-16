{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="task" class="d-none">

<box type="info" seamless>

When you download a Git-Mastery exercise, the output will tell you which directory you need to `cd` into, for you to start the exercise:

<pic src="images/gitmasteryDownloadOutput.png" />
<p/>
</box>

**Initialise the `control-me` folder as a repository**. Be careful not to initialise the parent folder `under-control` as a repo by mistake.

</div>

{{ show_exercise(exercises.under_control, is_panel=0) }}

