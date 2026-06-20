{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_hands_on_practical, show_head, show_hop_prep, show_lesson_intro, show_multiple_columns, show_output, show_ref, show_steps_tabs, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can resolve merge conflicts.</span>
{% set lesson_data = trail.branchingLocally.lessons.mergeConflicts %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
When merging branches, **you need to tell Git how to resolve conflicting changes** in different branches.
{% endcall %}

**A {{ show_git_term("conflict") }} occurs when Git cannot automatically reconcile different changes made to the same part of a file.**

**A {{ show_git_term("merge conflict") }} happens when Git can't automatically combine branches** because both branches changed the same part of a file in different ways. When this happens, **Git pauses the merge and marks the conflicting sections in the affected files so you can resolve them yourself.** Once you've resolved the conflicts, you can tell Git to continue the merge.


<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Resolve a merge conflict")  %}

{{ hp_number(hop_scenario) }} In the `nouns` repo (revision graph shown below), both `main` and `fix1` modify the same location in the same file. `main` inserts `black` where `fix1` inserts `green`.
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "Add colours.txt"
    branch fix1
    checkout fix1
    commit id: "[fix1] Add green, red, white"
    checkout main
    commit id: "[HEAD → main] Add black, red, white"
</mermaid>

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

{{ hp_number(hop_target) }} Merge the two branches and reconcile their conflicting changes.

{{ hp_number(hop_preparation) }}
{% set manual %}
Create a repo with two branches containing conflicting changes, as follows:
1. **Create a repo named `nouns`** with one commit.
1. **Start a branch named `fix1` in the repo. Create a commit** that adds a line of text to one of the files.
1. **Switch back to `main`. Create a commit with a conflicting change** that adds different text in that exact location.

You can do this with the following commands:

```bash
mkdir nouns
cd nouns
git init -b main

echo -e "blue" > colours.txt
git stage colours.txt
git commit -m "Add colours.txt"

git switch -c fix1
echo -e "green\nred\nwhite" >> colours.txt
git commit -am "Add green, red, white"

git switch main
echo -e "black\nred\nwhite" >> colours.txt
git commit -am "Add black, red, white"
```
{% endset %}

{{ show_hop_prep('hp-merge-conflicts', manual_info=manual) }}

{{ hp_number("1") }} **Try to merge the `fix1` branch into the `main` branch.** Git will pause the merge and report a merge conflict. If you open the conflicted file `colours.txt`, you will see something like this:

``` {.line-numbers highlight-lines="2,4,6" heading="colours.txt"}
blue
<<<<<<< HEAD
black
=======
green
>>>>>>> fix1
red
white
```

{{ hp_number("2") }} **Observe how the conflicted part is marked** between a line starting with `<<<<<<< ` and a line starting with `>>>>>>>`, separated by another line starting with `=======`.

The ==yellow== highlight below shows the conflicting part from `main`. The `HEAD` label on line 2 means this conflicting change comes from the currently active branch, `main`:

```txt {.line-numbers highlight-lines="2,3@yellow,4"}
blue
<<<<<<< HEAD
black
=======
green
>>>>>>> fix1
red
```
Similarly, this is the conflicting part that comes from the `fix1` branch:

```txt {.line-numbers highlight-lines="4,5@yellow,6"}
blue
<<<<<<< HEAD
black
=======
green
>>>>>>> fix1
red
```

{{ hp_number("3") }} **Resolve the conflict by editing the file**. Assume you want the merged version to keep both lines. Remove the conflict-marker lines and keep `black` and `green`:

```txt {.line-numbers highlight-lines="2-3"}
blue
black
green
red
white
```
**General steps for resolving a conflict:**

1. Remove conflict markers (e.g., `<<<<<<< HEAD`)
1. Edit the remaining text as needed (e.g., keep, edit, or delete one or both lines; you can also insert new text).

**If there are multiple conflicts** (in multiple files or different locations within the same file), resolve them the same way.

{{ hp_number("4") }} **Stage the changes.**

{{ hp_number("5") }} Complete the merge by doing one of the following:
* **Option 1: Commit** the staged changes (as you normally would).
* **Option 2: Ask Git to resume the merge** using the command `git merge --continue`.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->
</div>

<div id="extras">
{{ show_exercise(exercises.conflict_mediator) }}
</div>
