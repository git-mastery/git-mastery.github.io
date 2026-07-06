{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_detour, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can use merging to sync branches.</span>
{% set lesson_data = trail.syncingBranches.lessons.syncByMerge %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
**Merging is one way to keep one branch synchronized** with another.
{% endcall %}

**When working in parallel branches, you’ll often need to {{ show_git_term("sync") }} (short for synchronize) one branch with another.** For example, while developing a feature in one branch, you might want to bring in a recent bug fix from another branch that your branch doesn’t yet have.

**The simplest way to sync branches is to merge** — that is, to sync a branch `b1` with changes from another branch `b2`, you merge `b2` into `b1`. In fact, you can merge them periodically to keep one branch up to date with the other.

<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    branch bug-fix
    branch feature
    commit id: "f1"
    checkout main
    checkout bug-fix
    commit id: "b1"
    checkout main
    merge bug-fix
    checkout feature
    merge main id: "mc1"
    commit id: "f2"
    checkout main
    commit id: "m2"
    checkout feature
    merge main id: "mc2"
    checkout main
    commit id: "m3"
    checkout feature
    commit id: "[feature] f3"
    checkout main
    commit id: "[HEAD → main] m4"
</mermaid>

In the example above, you can see how the `feature` branch is merging the `main` branch periodically to keep itself in sync with the changes being introduced to the `main` branch.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Merge periodically to sync a branch")  %}

{{ hp_number(hop_preparation) }} **Run the following commands to create a sample repo** that we'll use for this hands-on practical:
```bash
mkdir samplerepo-sync
cd samplerepo-sync
git init -b main

echo "v1" > app.txt
git add .
git commit -m "m1: initial commit"

git branch bug-fix
git switch -c feature
echo "new feature" >> feature.txt
git add .
git commit -m "f1: start feature"

git switch bug-fix
echo "fix" >> app.txt
git commit -am "b1: fix a bug"
```

{{ hp_number(hop_target) }} **Bring the fix from `bug-fix` into `main`, then sync `feature` with `main`**, so that `feature` also gets the fix.

{{ hp_number("1") }} **Merge `bug-fix` into `main`.**
{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash{.no-line-numbers}
git switch main
git merge bug-fix
```
{% endset %}
{% set sourcetree %}
Switch to the `main` branch, then right-click on the `bug-fix` branch and choose `merge bug-fix into the current branch`.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

Because `main` had not diverged from `bug-fix`, Git fast-forwards `main` -- no merge commit is created.

{{ hp_number("2") }} **Sync `feature` with `main` by merging `main` into `feature`.**
{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash{.no-line-numbers}
git switch feature
git merge main
```
{% endset %}
{% set sourcetree %}
Switch to the `feature` branch, then right-click on the `main` branch and choose `merge main into the current branch`.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

This time, `feature` and `main` have diverged (each has a commit the other lacks), so Git creates a merge commit. **Run `git log --oneline --graph --all` to see that `feature` now contains the fix from `b1`**, alongside its own commit `f1`.

You could repeat this merge periodically -- for example, each time `main` gets a new commit -- to keep `feature` up to date, as illustrated in the revision graph earlier in this lesson.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->
</div>

<div id="extras">
</div>
