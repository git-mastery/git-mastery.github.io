{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="task" class="d-none">

You have been given a clone of the [git-mastery/gm-shapes](https://github.com/git-mastery/gm-shapes) repo.

1. Another developer Alice has created a remote copy of this repo at https://github.com/git-mastery/gm-shapes-alice which seems to have an additional commit in the `main` branch.
   * Add that repo as a remote named `alice-upstream`.
   * Bring over Alice's additional commit to your repo.
2. Alice's friend Bob has copied Alice's repo to https://github.com/git-mastery/gm-shapes-bob, and added one more commit.
   * Add that repo as another remote named `bob-upstream`.
   * Download the metadata about this new commit (i.e., fetch, not pull or merge) to your repo.
</div>

{{ show_exercise(exercises.fetch_and_pull, is_panel=0) }}
