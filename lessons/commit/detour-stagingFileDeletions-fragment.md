{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_detour_link, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="preview">

When you delete a tracked file from your working directory, Git doesn’t automatically assume you want that change to be part of your next commit. **To tell Git you intend to record a file deletion in the repository’s history, you need to stage the deletion explicitly.**
</div>

When you stage a deleted file, **you’re adding the _removal_ of the file to the staging area**, just like you’d stage a modified or newly-created file. After staging, the next commit will reflect that the file was removed from the project.

Note that staging a file deletion matters only if there is at least one commit in the repository. Before any commits are made, there is no file history, so deletions have no effect on the repository.

{{ show_steps_tabs('stage-deletion') }}
<!-- ------ end: Git Tabs -------------------------------->
