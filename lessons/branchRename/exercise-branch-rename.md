{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="scenario" class="d-none">

In the `rename-this` repo, you have been working on the login feature for your application on the branch `login`. On second thoughts, you now wish you had named it `feature/login`, to indicate the category of work done in the branch.
<mermaid>
gitGraph BT:
    commit id: "m1"
    commit id: "m2"
    branch login
    commit id: "b1"
    checkout main
    commit id: "[HEAD → main] m3"
    checkout login
    commit id: "[login] b2"
</mermaid>
</div>
<div id="task" class="d-none">

In the `rename-this` repo, rename the `login` branch to `feature/login`.

Expected result:
<mermaid>
gitGraph BT:
    commit id: "m1"
    commit id: "m2"
    branch feature/login
    commit id: "b1"
    checkout main
    commit id: "[HEAD → main] m3"
    checkout feature/login
    commit id: "[feature/login] b2"
</mermaid>
</div>

{{ show_exercise(exercises.branch_rename, is_panel=0) }}
