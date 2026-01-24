{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You are keeping notes on the cast of a sitcom you've started watching. Initially, you kept main cast and supporting cast on two separate branches.

<mermaid>

gitGraph BT:
  commit id: "Add Joey"
  commit id: "Add Phoebe"
  branch supporting
  checkout supporting
  commit id: "Add Mike"
  commit id: "Add Janice"
  checkout main
  commit id: "Add Ross"
</mermaid>

Now you wish to keep everything in the `main` branch.
</div>

<div id="task" class="d-none">

Squash-merge the `supporting` branch onto the `main` branch. You may use any suitable commit message. The result should be as follows:

<mermaid>

gitGraph BT:
  commit id: "Add Joey"
  commit id: "Add Phoebe"
  commit id: "Add Ross"
  commit id: "Add Mike and Janice"
</mermaid>

</div>

{{ show_exercise(exercises.merge_squash, is_panel=0) }}

