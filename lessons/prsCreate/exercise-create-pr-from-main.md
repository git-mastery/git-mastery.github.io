{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You have forked [gm-languages](https://github.com/git-mastery/gm-languages) repo -- which is a collection of information about programming languages -- to your account as `[[ username ]]-gitmastery-languages` and cloned it to your computer as `languages`. It has two commits.

<mermaid>

gitGraph BT:
    commit id: "Add C.txt"
    commit id: "[HEAD → main] Add Python.txt"
</mermaid>

Now you wish to contribute repo [gm-languages](https://github.com/git-mastery/gm-languages) through a PR.
</div>

<div id="task" class="d-none">

1. Add a file `Java.txt` and commit it to the `main` branch, and push it to your fork, as follows:
   ```bash
   echo -e "1905, by James Gosling" >> Java.txt
   git add Java.txt
   git commit -m "Add Java.txt"
   git push origin main
   ```
1. Create a PR from your fork to the upstream repo [gm-languages](https://github.com/git-mastery/gm-languages). You may use any suitable PR title and a description.
1. Change the year in `Java.txt` from `1905` (which is incorrect) to `1995` (the correct year Java was created). Update the PR to reflect this correction.

</div>

{{ show_exercise(exercises.create_pr_from_main, is_panel=0) }}

