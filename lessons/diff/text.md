{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_steps_tabs, show_hands_on_practical, show_head, show_hop_prep, show_lesson_intro, show_output, show_ref, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can compare different points of history</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.diff.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Git can tell you **the net effect of changes between two points of history**.
{% endcall %}

**Git's {{ show_git_term("diff") }} feature can show you what changed between two points** in the revision history. Given below are some use cases.

**++Usage 1: Comparing two commits at different points of the revision graph++**<br>
Example use case: Suppose you’re trying to improve the performance of a piece of software by experimenting with different code tweaks. You commit after each change (as you should). After several commits, you now want to review the overall effect of all those changes on the code.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Comparing two commits")  %}

{{ hp_number(hop_target) }} **Compare two commits** in a repo.

{{ hp_number(hop_preparation) }}

{% set manual %}
**Clone a copy of the `things` repo** given [here](https://github.com/git-mastery/samplerepo-things).
{% endset %}
{{ show_hop_prep('hp-diff-changes', manual_info=manual) }}



{% set cli %} <!-- ------ start: Git Tabs --------------->

You can use the `git diff <commit1> <commit2>` command for this.

* You may use any valid way to refer to commits %%(e.g., SHA, tag, HEAD~n etc.)%%.
* You may also use the `..` notation to specify the commit range too %%e.g., `0023cdd..fcd6199`, `HEAD~2..HEAD`%%

```bash{.no-line-numbers}
git diff v0.9 HEAD
```
{% call show_output() %}
```diff{.no-line-numbers}
diff --git a/colours.txt b/colours.txt
index 55c8449..435e81d 100644
--- a/colours.txt
+++ b/colours.txt
@@ -1 +1,4 @@
a file for colours
+blue
# rest of the diff ...
```
{% endcall %}

**Swap the commit order** in the command and see what happens.
```bash{.no-line-numbers}
git diff HEAD v0.9
```
{% call show_output() %}
```diff{.no-line-numbers}
diff --git a/colours.txt b/colours.txt
index 435e81d..55c8449 100644
--- a/colours.txt
+++ b/colours.txt
@@ -1,4 +1 @@
a file for colours
-blue
# rest of the diff ...
```
As you can see, the `diff` is _directional_ i.e., `diff <commit1> <commit2>` shows what changes you need to do to go from the `<commit1>` to `<commit2>`. If you swap `<commit1>` and `<commit2>`, the output will change accordingly e.g., lines previously shown as 'added' will now be shown as 'deleted'.
{% endcall %}

{% endset %}
{% set sourcetree %}

Select the two commits: Click on one commit, and <kbd>Ctrl</kbd>-Click (or <kbd>Cmd</kbd>-Click) on the second commit. The changes between the two selected commits will appear in the other panels, as shown below:

<pic src="images/sourcetreeCompareCommits.png" width="500" />

The same method can be used to compare the current state of the working directory (which might have uncommitted changes) to a point in the history.

<pic eager src="images/sourcetreeDiffCommitAndWorkingDir.png" width="500" />
<p/>

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**++Usage 2: Examining changes in the working directory++**<br>
Example use case: To verify the next commit will include exactly what you intend it to include.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Examining staged and unstaged changes")  %}

{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-diff-changes', sandbox_info="the `things` repo", is_continue=1) }}

{{ hp_number("1") }} **Do some changes to the working directory. Stage some (but not all) changes.** For example, you can run the following commands.

```bash
echo -e "blue\nred\ngreen" >> colours.txt
git add .  # a shortcut to stage all changes
echo "no shapes added yet" >> shapes.txt
```
{{ hp_number("2") }} **Examine the staged and unstaged changes.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

**The `git diff` command shows unstaged changes** in the working directory (tracked files only). The output of the `diff` command, is a diff view (introduced in [this lesson](../show/index.html)).

```bash{.no-line-numbers}
git diff
```
{% call show_output() %}
```diff{.no-line-numbers}
diff --git a/shapes.txt b/shapes.txt
index 4bc044e..1971ab8 100644
--- a/shapes.txt
+++ b/shapes.txt
@@ -3,3 +3,4 @@ circle
oval
rectangle
square
+no shapes added yet
```
{% endcall %}

**The `git diff --staged` command shows the staged changes** (same as `git diff --cached`).

```bash{.no-line-numbers}
git diff --staged
```

{% endset %}
{% set sourcetree %}

Select the two commits: Click on one commit, and <kbd>Ctrl</kbd>-Click (or <kbd>Cmd</kbd>-Click) on the second commit. The changes between the two selected commits will appear in the other panels, as shown below:

<pic src="images/sourcetreeStagedAndUnstaged.png" width="600" />
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->




**++Usage 3: Examining changes to a specific file++**<br>
Example use case: Similar to other use cases but when you are interested in a specific file only.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Examining changes to a specific file")  %}

{{ hp_number(hop_target) }} **Examine the changes done to a file between two different points in the version history** (including the working directory).

{{ hp_number(hop_preparation) }}

{% set manual %}
Use the following bash commands for set up the sandbox repo:
```bash
mkdir employees
cd employees
git init

echo "Andy Bernard" > list.txt
mkdir andy
echo "Previously in Stamford branch" > andy/history.txt
git add .
git commit -m "Add Andy"

echo "Pam Beesly" >> list.txt
git commit -am "Add Pam"

echo "Kelly Kapoor" >> list.txt
git commit -am "Add Kelly"

# Change list.txt, stage it, but don't commit it
echo "Kevin Malone" >> list.txt
git add .

# Change list.txt and andy/history.txt but don't stage
echo "Jim Halpert" >> list.txt
echo "Education: Cornell" >> andy/history.txt
```
{% endset %}

{{ show_hop_prep('hp-diff-files', manual_info=manual) }}

{{ hp_number('1') }} Examine changes to a specific file, between specific points in history.
{% set cli %} <!-- ------ start: Git Tabs --------------->

Add the `-- path/to/file` to a previous diff command to narrow the output to a specific file. Some examples:

```bash
git diff -- andy/history.txt          # unstaged changes to andy/history.txt
git diff --staged -- list.txt         # staged changes to list.txt
git diff HEAD~2..HEAD -- list.txt     # changes to list.txt between commits
```
{% endset %}
{% set sourcetree %}

Sourcetree UI shows changes to one file at a time by default; just click on the file to view changes to that file. To view changes to multiple files, <kbd>Ctrl</kbd>-Click (or <kbd>Cmd</kbd>-Click) on multiple files to select them.

<pic src="images/sourcetreeStagedAndUnstaged.png" width="600" />
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


</div>

<div id="extras">
{{ show_exercise(exercises.sensors_diff) }}
</div>
