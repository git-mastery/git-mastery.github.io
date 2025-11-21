{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="task" class="d-none">

1. Fork the repo https://github.com/git-mastery/gm-shapes to your GitHub account, if you haven't done so already. Retain the original repo name `gm-shapes`.
1. Clone the fork to your computer, placing it in the folder `clone-repo/shapes` (note how the target folder is `shapes`, not `gm-shapes`).<br>
   {{ icon_tip }} If you did this step correctly, you should now have local repo `shapes`.
1. Set up a remote named `upstream` in that `shapes` repo, to point to the upstream repo [git-mastery/gm-shapes](https://github.com/git-mastery/gm-shapes).
</div>

{{ show_exercise(exercises.clone_repo, is_panel=0) }}
