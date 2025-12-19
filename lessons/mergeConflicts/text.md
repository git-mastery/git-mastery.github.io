{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_multiple_columns, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can resolve merge conflicts.</span>
<span id="title">{{ trail.branchingLocally.lessons.mergeConflicts.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
When merging branches, **you need to guide Git on how to resolve conflicting changes** in different branches.
{% endcall %}

**A {{ show_git_term("conflict") }} occurs when Git cannot automatically reconcile different changes made to the same part of a file.**

**A {{ show_git_term("merge conflict") }} is a type of conflict that happens when Git can't automatically combine changes from two branches** because the same parts of a file were modified differently in each branch. When this happens, **Git pauses the merge and marks the conflicting sections in the affected files so you can resolve them yourself.** Once you've reviewed and resolved the conflicts, you can tell Git to proceed with the merge.


<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Resolve a merge conflict")  %}


{{ hp_number(hop_preparation) }} We need a repo with two branches containing conflicting changes. Given below is how you can create such a scenario:
1. **Create a repo named `nouns`** with one commit.
1. **Start a branch named `fix1` in the repo. Create a commit** that adds a line with some text to one of the files.
1. **Switch back to `main` branch. Create a commit with a conflicting change** i.e., it adds a line with some different text in the exact location the previous line was added.

The above can be done with the following commands:

```bash
md nouns
cd nouns
git init

echo -e "blue" > colours.txt
git stage colours.txt
git commit -m "Add colours.txt"

git switch -c fix1
echo "green\nred\nwhite" >> colours.txt
git commit -am "Add green, red, white"

git switch main
echo "black\nred\nwhite" >> colours.txt
git commit -am "Add black, red, white"
```
The result will be something like this:
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "Add colours.txt"
    branch fix1
    checkout fix1
    commit id: "[fix1] Add green, red, white"
    checkout main
    commit id: "[HEAD → master] Add black, red, white"
</mermaid>

As you can see from the above, both `main` and `fix1` branches are modifying the same file at the same location. The master branch is inserting `black` in the same place the `fix1` is inserting `green`.

{% set a %} <!-- ------ start: columns --------------->
```txt {.line-numbers highlight-lines="2" heading="colours.txt"}
blue
black
red
white
```
<small>->[`main` branch]<-</small>
{% endset %}
{% set b %}
```txt {.line-numbers highlight-lines="2" heading="colours.txt"}
blue
green
red
white
```
<small>->[`fix1` branch]<-</small>

{% endset %}
{{ show_multiple_columns([a, '|', b]) }}

{{ hp_number(hop_target) }} Merge the two branches while reconciling the conflicting changes in the two branches.


{{ hp_number("1") }} **Try to merge the `fix1` branch onto the `main` branch.** Git will pause mid-way during the merge and report a merge conflict. If you open the conflicted file `colours.txt`, you will see something like this:

``` {.line-numbers highlight-lines="2,4,6" heading="colours.txt"}
blue
<<<<<< HEAD
black
=======
green
>>>>>> fix1
red
white
```

{{ hp_number("2") }} **Observe how the conflicted part is marked** between a line starting with `<<<<<< ` and a line starting with `>>>>>>`, separated by another line starting with `=======`.

Highlighted in ==yellow== in the box below is the conflicting part that is coming from the `main` branch (note the `HEAD` label in line 2, which indicates this conflicting change is in the currently active branch, which is the `main` branch):

```txt {.line-numbers highlight-lines="2,3@yellow,4"}
blue
<<<<<< HEAD
black
=======
green
>>>>>> fix1
red
```
Similarly, this is the conflicting part that is coming from the `fix1` branch:

```txt {.line-numbers highlight-lines="4,5@yellow,6"}
blue
<<<<<< HEAD
black
=======
green
>>>>>> fix1
red
```

{{ hp_number("3") }} **Resolve the conflict by editing the file**. Let us assume you want to keep both lines in the merged version. You can modify the file to be like this (i.e., remove the lines with conflict markers while keeping both lines `black` and `green`):

```txt {.line-numbers highlight-lines="2-3"}
blue
black
green
red
white
```
**Steps for resolving a conflict**, in general:

1. Remove conflict markers (e.g., `<<<<<< HEAD`)
1. Edit the remaining text any way you see fit (e.g., keep/edit/delete one or both; you can even insert new text).

**If there are multiple conflicts** (in multiple files, or in different locations within the same file), resolve them in a similar fashion.

{{ hp_number("4") }} **Stage the changes.**

{{ hp_number("5") }} Complete the merge by doing one of the following:
* **Option 1: Commit** the staged changes (as you would do normally).
* **Option 2: Ask Git to resume the merge** using the command `git merge --continue`.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->
</div>

<div id="extras">
{{ show_exercise(exercises.conflict_mediator) }}
</div>
