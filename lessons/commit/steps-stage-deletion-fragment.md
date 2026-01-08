{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_link, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}
<div id="cli"><!-- ------------------------------------------------------------------- -->

**To delete a file and stage the deletion in one go**, you can use the `git rm <pathspec>` command. It removes the file from the working directory and stages the deletion at the same time.

```bash{.no-line-numbers highlight-lines="1['rm']"}
git rm data/list.txt plan.txt
```

**If you’ve already deleted the file manually** (for example, using `rm` or deleting it in your file explorer), you can still stage the deletion using the `stage` command (or its synonym `add`) command. Even though the file no longer exists, staging the deletion records its deletion into the staging area.

```bash{.no-line-numbers highlight-lines="1['add'],1['stage']"}
git stage data/list.txt  # same as: git add data/list.txt
```

**Unstaging file deletions** is covered in {{ show_detour_link('unstagingChanges') }}.

<div id="sourcetree"><!-- ---------------------------------------------------- -->

Staging a file deletion is done similar to staging other changes.
</div><!-- ------------------------------------------------------------------- -->
