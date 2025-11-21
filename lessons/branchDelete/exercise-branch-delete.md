{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="scenario" class="d-none">

In the `delete-my-branches` repo, you were trying out two alternative optimisation approaches in two parallel branches `optimization-approach-1` and `optimization-approach-2`, to decide which one is better.

You decided that the approach in the branch `optimization-approach-1` is better and merged it. As the work has already been merged, you can now delete that branch to reduce clutter.

<mermaid>
gitGraph BT:
    commit id: "Implement loading"
    commit id: "Fix loading bug"
    branch opt...approach-1
    commit id: "Apply bubble sort"
    commit id: "[opti...-1] Fix sorting bug"
    checkout main
    branch opt...approach-2
    commit id: "[opti...-2] Apply merge sort"
    checkout main
    merge opt...approach-1 id: "[HEAD → main] Merge ...'...approach-1"
</mermaid>

Since you no longer need the work done in the branch `optimization-approach-2`, you can discard it by deleting the branch.
</div>
<div id="task" class="d-none">

1. Delete the `optimization-approach-1` branch.
2. Delete the `optimization-approach-2` branch as well.

Expected outcome:

<mermaid>
gitGraph BT:
    commit id: "Implement loading"
    commit id: "Fix loading bug"
    branch _
    commit id: "Apply bubble sort"
    commit id: "Fix sorting bug"
    checkout main
    merge _ id: "[HEAD → main] Merge ...'...approach-1"
</mermaid>
</div>

{{ show_exercise(exercises.branch_delete, has_scenario=1, is_panel=0) }}
