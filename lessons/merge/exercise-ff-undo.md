{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You are keeping notes on the characters of a play that you are writing. In the main story line (which is in the `main` branch), you introduced two characters, Rick and Morty. You added a few other characters in a separate branch `others`.

<mermaid>

gitGraph BT:
    commit id: "Add Rick"
    commit id: "[main] Add Morty"
    branch others
    commit id: "Add Birdperson"
    commit id: "Add Cyborg to birdperson.txt"
    commit id: "[HEAD → other] Add Tammy"
</mermaid>


Just now, you did a fast-forward merge of the `others` branch to the `main` branch.

<mermaid>

gitGraph BT:
    commit id: "Add Rick"
    commit id: "Add Morty"
    commit id: "Add Birdperson"
    commit id: "Add Cyborg to birdperson.txt"
    commit id: "[HEAD → main][others] Add Tammy"
</mermaid>

However, now you realise this is premature, and wish to undo that change.
</div>

<div id="task" class="d-none">

Undo the merging of branch `others`.

The result should be as follows:

<mermaid>

gitGraph BT:
    commit id: "Add Rick"
    commit id: "[HEAD → main] Add Morty"
    branch others
    commit id: "Add Birdperson"
    commit id: "Add Cyborg to birdperson.txt"
    commit id: "[other] Add Tammy"
</mermaid>

</div>

{{ show_exercise(exercises.ff_undo, is_panel=0) }}

