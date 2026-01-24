{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You are writing the outline for a story, in `story.txt`. You have written the first few steps of the storyline.

**Current revision graph:**
<mermaid>

gitGraph BT:
  commit id: "Describe night"
  commit id: "Describe location"
  commit id: "Mention noise"
</mermaid>


You are not very happy with the way the story is progressing, and wish to explore a few alternative storylines starting from a previous step.
</div>

<div id="task" class="d-none">

1. Start a new branch named `visitor-line`, starting from the second commit (i.e., commit `Describe location`).
1. Add the line `I heard someone knocking at the door.` to the `story.txt`.
1. Commit the change. You may use any suitable commit message.
1. Start a new branch named `sleep-line`, starting from the same starting point as before.
1. Add the line `I fell asleep on the couch.` to the `story.txt`.
1. Commit the change. You may use any suitable commit message.

**Expected revision graph:**
<mermaid>

gitGraph BT:
  commit id: "Describe night"
  commit id: "Describe location"
  branch visitor-line
  checkout main
  branch sleep-line
  checkout main
  commit id: "Mention noise"
  checkout visitor-line
  commit id: "Mention knocking"
  checkout sleep-line
  commit id: "Mention sleeping"
</mermaid>

</div>

{{ show_exercise(exercises.branch_previous, is_panel=0) }}

