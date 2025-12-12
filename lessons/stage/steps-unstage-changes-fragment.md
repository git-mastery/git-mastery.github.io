{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}
<div id="cli"><!-- ------------------------------------------------------------------- -->

* **To unstage a file you added or modified**, run `git restore --staged <pathspec>`. This command removes the file from the staging area, leaving your working directory untouched.
  ```bash{highlight-lines="1['restore --staged']"}
  git restore --staged plan.txt budget.txt data/list.txt
  ```
  <box type="warning" seamless>

  **If your repo does not have any commits yet, `git restore --staged` will fail** with the error #r#fatal: could not resolve HEAD##.<br>
  The remedy is to use `git reset <pathspec>` instead.
  ```bash
  git reset plan.txt
  ```
  **In fact, `git reset` is an alternative way of unstaging files**, and it works regardless of whether you have any commits.

  **Wait. Then why does `git restore --staged` exists at all**, given it is more verbose and doesn't even work in some special cases?<br>
  Answer: It is still considered the "modern" way of unstaging files (it was introduced more recently), because it is more intuitive and purpose-specific -- whereas the `git reset` serves multiple purposes and, if used incorrectly, can cause unintended consequences.
  </box>
  <box type="tip" seamless>

  The `restore` command can accept multiple files/paths as input, which means you can use the <trigger trigger="click" for="modal:unstaging-protipMultipleFilesNotation">notation for specifying multiple files</trigger>. For example, to unstage all changes you've staged, you can use the `git restore --staged .`
  </box>
* **To unstage a file deletion** (staged using `git rm`), use the same command as above. It will unstage the deletion and restore the file in the staging area.<br>
  **If you also deleted the file from your working directory**, you may need to recover it separately with `git restore <file-name(s)>`
  ```bash{highlight-lines="1['restore']"}
  git restore data/list.txt data/plan.txt
  ```

* **To 'nuke' all changes** (i.e., get rid of all staged !!and!! unstaged changes to tracked files), you can add the `--worktree` flag to the `git restore --staged <pathspec>` command.
  ```bash{highlight-lines="1['--worktree']"}
  git restore --staged --worktree .  # nuke all changes in current folder and subfolders
  ```

<modal large header="" id="modal:unstaging-protipMultipleFilesNotation">
  <include src="../common/protip-multiple-files-notation-fragment.md" />
</modal>
</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

To unstage a file, locate the file among the `staged files` section, click the `...` in front the file, and choose `Unstage file`:<br>
<pic src="images/sourcetreeUnstageFile.png"/>
</div><!-- ------------------------------------------------------------------- -->
