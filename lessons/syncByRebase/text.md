{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_detour, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can rebase a branch.</span>
{% set lesson_data = trail.syncingBranches.lessons.syncByRebase %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
**_Rebasing_ is another way to sync** one branch with another.
{% endcall %}

**{{ show_git_term("Rebasing") }} is another way to synchronize one branch with another, while keeping the history cleaner and more linear.** Instead of creating a merge commit to combine the branches, rebasing moves the entire sequence of commits from your branch and "replays" them on top of another branch. This effectively **moves the base of your branch to the tip of the other branch** (i.e., it 're-bases' it — hence the name), as if you had started your work from there in the first place.

Rebasing is especially useful when you want to update your branch with the latest changes from a main branch, but you prefer an uncluttered history with fewer merge commits.

Suppose we have the following revision graph, and we want to sync the `feature` branch with `main`, so that changes in commit `m2` become visible to the `feature` branch.
<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    checkout main
    commit id: "[main] m2"
    checkout feature
    commit id: "[HEAD → feature] f2"
</mermaid>

If we merge the `main` branch to the `feature` branch as shown below, `m2` becomes visible to the `feature` branch. However, it creates a merge commit.
<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    checkout main
    commit id: "[main] m2"
    checkout feature
    commit id: "f2"
    merge main id: "[HEAD → feature] mc1"
</mermaid>
Instead of merging, if we _rebased_ the `feature` branch on the `main` branch, we would get the following.
<mermaid>
gitGraph
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    checkout main
    commit id: "[branch: main] m2"
    branch feature
    checkout feature
    commit id: "f1a"
    commit id: "[HEAD → feature] f2a"
</mermaid>

Note how the rebasing changed the base of the `feature` branch from `m1` to `m2`. As a result, changes from `m2` are now visible to the `feature` branch. But there is no merge commit, and the revision graph is simpler.

Also note how the first commit in the feature branch, previously shown as `f1`, is now shown as `f1a` after the rebase. Although both commits contain the same changes, other details -- such as the parent commit -- are different, making them two distinct Git objects with different SHA values. Similarly, `f2` and `f2a` are also different. Thus, the history of the entire `feature` branch has changed after the rebase.

**Because rebasing rewrites the commit history of your branch,** you should avoid rebasing branches that you’ve already published and that others might be using -- rewriting published history can cause confusion and conflicts for those using the previous version of the commits.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Rebase a branch to sync it")  %}

{{ hp_number(hop_preparation) }} **Run the following commands to create a sample repo** that we'll use for this hands-on practical:
```bash
mkdir samplerepo-sync-rebase
cd samplerepo-sync-rebase
git init -b main

echo "v1" > app.txt
git add .
git commit -m "m1: initial commit"

git switch -c feature
echo "feature work" >> feature.txt
git add .
git commit -m "f1: start feature"
echo "more feature work" >> feature.txt
git commit -am "f2: continue feature"

git switch main
echo "fix" >> app.txt
git commit -am "m2: fix a bug"
```
Run `git log --oneline --graph --all` to see that `feature` (with `f1` and `f2`) branched off before `m2` was added to `main`.

{{ hp_number(hop_target) }} **Rebase `feature` onto `main`**, so that `m2` becomes part of `feature`'s history.

{{ hp_number("1") }} **Switch to `feature`, then rebase it onto `main`.**
{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash{.no-line-numbers}
git switch feature
git rebase main
```
{% endset %}
{% set sourcetree %}
Switch to the `feature` branch, then right-click on the `main` branch and choose `Rebase current changes onto main`.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

{{ hp_number("2") }} **Run `git log --oneline --graph --all` again.** Observe that `main` and `feature` now form a single straight line, with `f1` and `f2` replayed on top of `m2`. Their commit SHAs have changed, even though the file changes are the same.

**If Git cannot automatically combine a replayed commit** -- for example, if `feature` and `main` had modified the same lines -- Git pauses the rebase partway and marks the conflict in the affected files, similar to a merge conflict. Resolve the conflict, stage the fixed files with `git add`, then run `git rebase --continue` to resume (or `git rebase --abort` to cancel and return `feature` to its pre-rebase state).
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>

<div id="extras">
</div>
