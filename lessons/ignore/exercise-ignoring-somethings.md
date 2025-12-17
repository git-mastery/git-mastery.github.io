{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="task" class="d-none">

**1. Update the `.gitignore` file** (inside the `files/` folder) to reflect the following requirements:

* Git should ignore every file in the `many/` folder except the file `many/file22.txt`.
* `why_am_i_hidden.txt` should not be ignored by Git.
* `ignore_me.txt` should be ignored by Git.
* Git should ignore any `runaway.txt` file in `this/` and any of its current and future subfolders (hint: use a pattern).

**2. Commit the updated `.gitignore` file.**
</div>

{{ show_exercise(exercises.ignoring_somethings, is_panel=0) }}
