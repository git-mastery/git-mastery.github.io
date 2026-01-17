{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_steps_tabs, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="preview">

**How do you undo or delete the last few commits** if you realise they were incorrect, unnecessary, or done too soon?
</div>

Undoing or deleting recent `n` commits is easily accomplished with Git's `reset` feature.

{% set cli %}
* **To delete recent `n` commits and discard those changes entirely, do a `hard` reset** the commit `HEAD~n` e.g.,
  ```bash
  git reset --hard HEAD~3
  ```
* **To undo recent `n` commits, but keep changes staged, do a `soft` reset** the commit `HEAD~n` e.g.,
  ```bash
  git reset --soft HEAD~3
  ```
* **To undo recent `n` commits, and move changes to the working directory, do a `mixed` reset** the commit `HEAD~n` e.g.,
  ```bash
  git reset --mixed HEAD~3
  ```

To do the above for the most recent commit only, use `HEAD~1` (or just `HEAD~`).
{% endset %}
{% set sourcetree %}

**To undo the last commit**, right-click on the commit just before it, and choose `Reset current branch to this commit`.

In the next dialog, choose the mode `Mixed - keep working copy but reset index` option. This will make the offending commit disappear but will keep the changes that you included in that commit intact.

<pic eager src="{{baseUrl}}/lessons/reset/images/sourcetreeResetDialog.png" />

If you use the `Soft - ...` mode instead, the last commit will be undone as before, but the changes included in that commit will stay in the staging area.

**To delete the last commit entirely** (i.e., undo the commit and also discard the changes included in that commit), do as above but choose the `Hard - ...` mode instead.

**To undo/delete last n commits**, right-click on the commit just before the last n commits, and do as above.
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}