{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_detour, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can cherry-pick commits.</span>
{% set lesson_data = trail.syncingBranches.lessons.cherryPick %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
**_Cherry-picking_ is a Git operation that copies a specific commit** from one branch to another.

{% endcall %}

**{{ show_git_term("Cherry-picking") }} is another way to synchronize branches, by applying specific commits from one branch onto another.**

Unlike merging or rebasing — which bring over all changes since the branches diverged — cherry-picking lets you choose individual commits and apply just those, one at a time, to your current branch. This is useful when you want to bring over a bug fix or a small feature from another branch without merging the entire branch history.

Because cherry-picking copies only the chosen commits, **it creates new commits on your branch with the same changes but different SHA values**.

Suppose we have the following revision graph, and we want to bring over the changes introduced in `m3` (in the `main` branch) onto the `feature` branch.
<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    checkout main
    commit id: "m2"
    commit id: "m3" type: HIGHLIGHT
    commit id: "[main] m4"
    checkout feature
    commit id: "[HEAD → feature] f2"
</mermaid>

After cherry-picking `m3` onto the `feature` branch, the revision graph should look like the following:

<mermaid>
gitGraph
{{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    checkout main
    commit id: "m2"
    commit id: "m3" type: HIGHLIGHT
    commit id: "[main] m4"
    checkout feature
    commit id: "f2"
    commit id: "[HEAD → feature] m3a" type: HIGHLIGHT
</mermaid>

Note how it makes the changes from `m3` available from that point on in the `feature` branch, with minimal changes to the revision graph. Also note that the new commit `m3a` contains the same changes as `m3`, but it will be a different Git object with a different SHA value.

**Cherry-picking is another Git operation that can result in conflicts**, i.e., if the changes in the cherry-picked commit conflict with the changes in the receiving branch.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Cherry-pick a commit")  %}

{{ hp_number(hop_preparation) }} **Run the following commands to create a sample repo** that we'll use for this hands-on practical:
```bash
mkdir samplerepo-sync-cherry
cd samplerepo-sync-cherry
git init -b main

echo "v1" > app.txt
git add .
git commit -m "m1: initial commit"

git switch -c feature
echo "feature work" >> feature.txt
git add .
git commit -m "f1: start feature"

git switch main
echo "update" > update.txt
git add .
git commit -m "m2: update app"

echo "urgent fix" > bugfix.txt
git add .
git commit -m "m3: urgent bug fix"

echo "more" > more.txt
git add .
git commit -m "m4: more work"

git switch feature
echo "more feature work" >> feature.txt
git commit -am "f2: continue feature"
```

{{ hp_number(hop_target) }} **Bring only the `m3: urgent bug fix` commit from `main` into `feature`**, without bringing `m2` or `m4`.

{{ hp_number("1") }} **Find the SHA of the `m3: urgent bug fix` commit.**
```bash{.no-line-numbers}
git log --oneline main
```
{% call show_output() %}
```bash{.no-line-numbers}
a1b2c3d (main) m4: more work
9f8e7d6 m3: urgent bug fix
5c4b3a2 m2: update app
1a2b3c4 m1: initial commit
```
{% endcall %}
Note down the SHA next to `m3: urgent bug fix` (here, `9f8e7d6` -- yours will differ).

{{ hp_number("2") }} **While on `feature`, cherry-pick that commit.**
{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash{.no-line-numbers}
git switch feature
git cherry-pick 9f8e7d6
```
{% endset %}
{% set sourcetree %}
Switch to the `feature` branch. In the `main` branch's history, right-click on the `m3: urgent bug fix` commit and choose `Cherry Pick`.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

**Run `git log --oneline` on `feature`.** It now has a new commit with the same change and message as `m3`, but a different SHA -- and it does not have `m2` or `m4`.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->
</div>
<div id="extras">
</div>
