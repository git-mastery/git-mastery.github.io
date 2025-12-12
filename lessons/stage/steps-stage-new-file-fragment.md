{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}
<div id="cli"><!-- ------------------------------------------------------------------- -->

{{ hp_number(2.1) }} **Check the status of the folder** using the `git status` command.

<div class="indented-level1">

```bash{.no-line-numbers}
git status
```
{% call show_output() %}

```{.no-line-numbers}
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  fruits.txt
nothing added to commit but untracked files present (use "git add" to track)
```
{% endcall %}
</div>

{{ hp_number(2.2) }} **Use the `git add <file>` command** to stage the file.
<div class="indented-level1">

```bash{.no-line-numbers}
git add fruits.txt
```

<box type="tip" seamless>

You can replace the `add` with `stage` (e.g., `git stage fruits.txt`) and the result is the same (they are synonyms).
</box>
<box type="info" seamless icon=":fab-windows:">

Windows users: When using the `echo` command to write to text files from Git Bash, you might see a warning `LF will be replaced by CRLF the next time Git touches it` when Git interacts with such a file. This warning is caused by the way line endings are handled differently by Git and Windows. You can simply ignore it, or suppress it in future by running the following command:
```bash
git config --global core.safecrlf false
```

</box>
</div>

{{ hp_number(2.3) }} **Check the status again.** You can see the file is no longer 'untracked'.
<div class="indented-level1">

```bash{.no-line-numbers}
git status
```
{% call show_output()  %}

```{.no-line-numbers}
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

      new file:   fruits.txt

```
{% endcall %}

{{ icon_info }} As before, don't worry if you don't understand the content of the output (we'll unpack it in a later lesson). The point to note is that the file is no longer listed as 'untracked'.
</div>
</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

{{ hp_number('2.1') }} **Note how the file is shown as ‘unstaged’.** The question mark icon indicates the file is untracked.

<pic eager src="{{baseUrl}}/lessons/stage/images/sourcetreeWinAddedFile.png" height="220" />
<p/>

<box type="tip" seamless>

If the newly-added file does not show up in Sourcetree UI, refresh the UI (:fab-windows:: <kbd>F5</kbd><br> | :fab-apple: <kbd>⌥</kbd>+<kbd>R</kbd>)
</box>

<box type="warning" seamless>

**Sourcetree screenshots/instructions: :fab-windows: vs :fab-apple:**

Note that Sourcetree UI can vary slightly between Windows and Mac versions. Some of the screenshots given in our lessons are from the Windows version while some are from the Mac version.

In some cases, we have specified how they differ.<br>
In other cases, you may need to adapt if the given screenshots/instructions are slightly different from what you are seeing in your Sourcetree.
</box>

{{ hp_number('2.2') }} **Stage the file**:

{{ show_steps_tabs('stage-file', has_cli=0) }}


{{ hp_number('2.3') }} **Note how the file is staged now** i.e., `fruits.txt` appears in the `Staged files` panel now.

<pic eager src="{{baseUrl}}/lessons/stage/images/sourcetreeWinNewFileStaged.png" height="180" />
<p/>

<box type="info" seamless>

**If Sourcetree shows a `\ No newline at the end of the file` message** below the staged lines (i.e., below the `cherries` line in the above screenshot), that is because you did not hit <kbd>enter</kbd> after entering the last line of the file (hence, Git is not sure if that line is complete). To rectify, move the cursor to the end of the last line in that file and hit <kbd>enter</kbd> (like you are adding a blank line below it). This new change will now appear as an 'unstaged' change. Stage it as well.
</box>
</div><!-- ------------------------------------------------------------------- -->


