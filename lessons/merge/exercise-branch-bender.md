{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="task" class="d-none">

Do the following operations in the given `webapp` repo, in the given order:

1. Merge `feature/login` onto the `main` branch, ==while ensuring a merge commit is created== (i.e., no fast-forwarding).
1. Merge `feature/dashboard` onto the `main` branch.
1. Merge `feature/payments` onto the `main` branch.

The final result should look like this:

<mermaid>
gitGraph
commit
branch feature/login
checkout main
branch feature/dashboard
checkout main
branch feature/payments
checkout feature/login
commit
commit
checkout main
merge feature/login
checkout feature/dashboard
commit
commit
commit
checkout main
merge feature/dashboard
checkout feature/payments
commit
commit
checkout main
merge feature/payments
</mermaid>

</div>

{{ show_exercise(exercises.branch_bender, is_panel=0) }}
