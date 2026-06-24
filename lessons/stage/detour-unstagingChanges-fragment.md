{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_under_the_hood with context %}

<!-- Note: This detour should come after the lesson on committing, because the commands for unstaging doesn't work if there are no commits  -->

 **Unstaging a staged file removes it from the staging area but keeps the changes in your working directory.** This is useful if you later realize that you don't actually want to include a staged file in the next commit, perhaps because you staged it by mistake or want to include that change in a later commit.

{{ show_steps_tabs('unstage-changes') }}
<!-- ------ end: Git Tabs -------------------------------->

{{ show_exercise(exercises.staging_intervention) }}
