{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_hop_prep, show_detour, show_detour_link, show_exercise, show_hands_on_practical, show_hop_prep, show_head, show_multiple_columns, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can merge branches in a local repo.</span>
<span id="title">{{ trail.branchingLocally.lessons.merge.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Most work done in **branches eventually gets _merged_** together.
{% endcall %}

**{{ show_git_term("Merging") }} combines the changes from one branch into another**, bringing their diverged timelines back together.

When you merge, Git looks at the two branches and figures out how their histories have diverged since their {{ show_git_term("merge base") }} (i.e., the most recent common ancestor commit of two branches). It then applies the changes from the other branch onto your current branch, creating a new commit. **The new commit created when merging is called a {{ show_git_term("merge commit") }} — it records the result of combining both sets of changes.**

Given below is an illustration of how such a merge looks like in the revision graph:

<annotate src="{{ baseUrl }}/lessons/merge/images/mergeWithCommit.png" width="600">
<a-point x="2%" y="10%" label="[1]" opacity="0"/>
<a-point x="40%" y="10%" label="[2]" opacity="0"/>
<a-point x="95%" y="47%" label="[3]" opacity="0"/>
<a-point x="85%" y="70%" opacity="0"><md>#r#← merge base##</md></a-point>
<a-point x="56%" y="10%" opacity="0"><md>#r#merge commit →##</md></a-point>
</annotate>
<p/>

* We are on the `fix1` branch (as indicated by `HEAD`). {texts="['[1]', '[2]', '[3]']"}
* We have switched to the `main` branch (thus, `HEAD` is now pointing to `main` ref).
* The `fix1` branch has been merged into the `main` branch, creating a _merge commit_ `f`. The repo is still on the `main` branch.

**The branch you are merging _into_ (that is, the branch you are currently in when you do the merge operation) is called the {{ show_git_term("destination branch") }}** (other terms: _receiving_ branch, _target_ branch)<br>
**The branch you are merging is referred to as the {{ show_git_term("source branch") }}</tooltip>** (other terms: _incoming_ branch, _merge_ branch).<br>
In the above example, `main` is the destination branch and `fix1` is the source branch.

**A merge commit has two parent commits** e.g., in the above example, the merge commit `f` has both `d` and `e` as parent commits. **The parent commit that is on the <popover content="i.e., the branch you are merging _into_ (the branch you are currently in when you do the merge operation)">destination branch</popover> is considered the {{ show_git_term("first parent") }} and the parent commit on the <popover content="i.e., the branch that you are merging">source branch</popover> is considered the {{ show_git_term("second parent") }}** e.g., in the example above, `fix1` branch is the source branch that is being merged into the destination branch `main` -- accordingly, `d` is the first parent and `e` is the second parent.


<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Merge a branch (with a merge commit)")  %}

{{ hp_number(hop_scenario) }} You have a repo with two unmerged branches `main` and `feature1`.

<include src="../branch/text.md#sports-repo-before-merging" />

{{ hp_number(hop_target) }} To practice branch merging, let's merge each branch to the other.

{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-merge-commit', continue_info="You can continue with the `sports` repo from earlier, which should look like the revision graph in the _Scenario_ above. Note that we are ignoring the `feature1-alt` branch, for simplicity.") }}

{{ hp_number ('1') }} **Switch back to the `feature1` branch.**

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "[HEAD → feature1] f2"
    checkout main
    commit id: "[main] m3"
    checkout feature1
</mermaid>

{{ hp_number ('2') }} **Merge the `main` branch to the `feature1` branch**, giving an end-result like the following. Also note how Git has created a _merge commit_ (shown as `mc1` in the diagram below).
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "f2"
    checkout main
    commit id: "[main] m3"
    checkout feature1
    merge main id: "[HEAD → feature1] mc1"
</mermaid>

{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash{.no-line-numbers}
git merge main
```
{% endset %}
{% set sourcetree %}
Right-click on the `main` branch and choose `merge main into the current branch`. Click `OK` in the next dialog.<br>
<pic src="{{baseUrl}}/lessons/merge/images/sourcetreeChooseToMergeMaster.png" width="500" /><br>
_If_ a confirmation dialog pops up, choose as follows:<br>
<pic src="{{baseUrl}}/lessons/merge/images/sourcetreeMergeConfirmationDialog.png" width="500" /><br>
The revision graph should look like this now (colours and line alignment might vary but the graph structure should be the same):<br>
<pic src="{{baseUrl}}/lessons/merge/images/sourcetreeAfterMeringMaster.png" width="500" />
<p/>
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}

<!-- ------ end: Git Tabs -------------------------------->

Observe how the changes you made in the `main` branch (i.e., the imaginary bug fix in `m3`) is now available even when you are in the `feature1` branch.<br>
Furthermore, observe (e.g., `git show HEAD`) how the merge commit contains the sum of changes done in  commits `m3`, `f1`, and `f2`.

{{ hp_number ('3') }} **Add another commit to the `feature1` branch**, in which you do some further changes to the `boxing.txt`.
```bash
echo -e "Manny Pacquiao" >> boxing.txt
git commit -am "Add Manny to boxing.txt"
```
**Switch to the `main` branch and add one more commit.**
```bash
git switch main
echo -e "Lionel Messi" >> football.txt
git commit -am "Add Messi to football.txt"
```

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "f2"
    checkout main
    commit id: "m3"
    checkout feature1
    merge main id: "mc1"
    commit id: "[feature1] f3"
    checkout main
    commit id: "[HEAD → main] m4"
</mermaid>

{{ hp_number ('4') }} **Merge `feature1` to the main branch**, giving an end-result like this:

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "f2"
    checkout main
    commit id: "m3"
    checkout feature1
    merge main id: "mc1"
    commit id: "[feature1] f3"
    checkout main
    commit id: "m4"
    merge feature1 id: "[HEAD → main] mc2"
</mermaid>

{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash{.no-line-numbers}
git merge feature1
```
{% endset %}
{% set sourcetree %}
Right-click on the `feature1` branch and choose `Merge...`. The resulting revision graph should look like this:

<pic eager src="{{baseUrl}}/lessons/merge/images/sourcetreeAfterMeringFeature1.png" width="400" />
<p/>
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

Now, any changes you made in `feature1` branch are available in the main branch.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**When the destination branch hasn't diverged** — meaning it hasn't had any new commits since the merge base commit —  **Git simply moves the branch pointer forward to include all the new commits in the source branch**, keeping the history clean and linear. This is **called a {{ show_git_term("fast-forward merge") }}** because Git simply "fast-forwards" the branch pointer to the tip of the other branch. The result looks as if all the changes had been made directly on one branch, without any branching at all.

{% set a %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    commit id: "[HEAD → main] m2"
    branch bug-fix
    commit id: "b1"
    commit id: "[bug-fix] b2"
    checkout main
</mermaid>
{% endset %}
{% set b %}<small>%%[merge `bug-fix`]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    commit id: "b1"
    commit id: "[HEAD → main][bug-fix] b2"
    checkout main
</mermaid>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

In the example above, the `main` branch has not changed since the merge base (i.e., `m2`). Hence, merging the branch `bug-fix` onto `main` can be done by fast-forwarding the `main` branch ref to the tip of the `bug-fix` branch (i.e., `b2`).

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Do a fast-forward merge")  %}

{{ hp_number(hop_scenario) }} You have a repo with an unmerged branch `add-swimming`. The `main` branch has not diverged from the `add-swimming` branch yet.

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "more commits ..."
    commit id: "[main] mc2"
    branch add-swimming
    commit id: "a1"
    commit id: "[HEAD → add-swimming] a2"
</mermaid>

{{ hp_number(hop_target) }} Do a fast-forward merge of the `add-swimming` branch into the `main` branch.

{{ hp_number(hop_preparation) }}
{% set continue_info %}
To continue with the same `sports` repo we used above, **create a new branch called `add-swimming`, and some commits to it** as follows:<br>
Switch to the main branch, create a new branch, switch to the new branch, add a file named `swimming.txt`, stage it, and commit it.<br>
Do some changes to `swimming.txt`, and commit those changes.

Here are the equivalent commands:
```bash
git switch main
git switch -c add-swimming

echo "Michael Phelps" > swimming.txt
git stage swimming.txt
git commit -m "Add swimming.txt"

echo "Ian Thorpe" >> swimming.txt
git commit -am "Add Thorpe to swimming.txt"

git switch main
```
{% endset %}

{{ show_hop_prep('hp-merge-ff', continue_info=continue_info) }}

{{ hp_number(hop_target) }} Do a fast-forward merge of the `add-swimming` branch.

{{ hp_number ('1') }} **Ensure you are on the `main` branch.**

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "more commits ..."
    commit id: "[HEAD → main] mc2"
    branch add-swimming
    commit id: "a1"
    commit id: "add-swimming] a2"
</mermaid>

{{ hp_number ('2') }} **Merge the `add-swimming` branch onto the `main` branch.** Observe that there is no merge commit. The `main` branch ref (and the `HEAD` ref along with it) moved to the tip of the `add-swimming` branch (i.e., `a2`) and both branches now point to `a2`.

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main (and add-swimming)'}} }%%" }}
    commit id: "more commits ..."
    commit id: "mc2"
    commit id: "a1"
    commit id: "[HEAD → main][add-swimming] a2"
</mermaid>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**It is possible to force Git to create a merge commit even if fast forwarding is possible.** This is useful if you prefer the revision graph to visually show when each branch was merged to the main timeline.

<div class="d-print-none">

{% set cli %} <!-- ------ start: Git Tabs --------------->

To prevent Git from fast-forwarding, use the `--no-ff` switch when merging. Example:
```bash{.no-line-numbers}
git merge --no-ff add-swimming
```
Here are two other relevant options for the `git merge` command:

* `--ff-only`: Merge goes ahead only if a fast-forward merge is possible.
* `--ff`: Explicitly specify a fast-forward merge is preferred, but allows creating a merge commit if a fast-forward merge is not possible. In fact, this is Git's default behaviour even if you don't use this option. So, the option is not useful unless the relevant default merge behaviour has been changed previously.
{% endset %}
{% set sourcetree_windows %}
Tick the box shown below when you merge a branch:

<pic eager src="{{baseUrl}}/lessons/merge/images/sourcetreeMergeBranchDialog.png" height="150" />
<p/>

{% endset %}
{% set sourcetree_mac %}
Trigger the branch operation using the following menu button:

<annotate src="{{baseUrl}}/lessons/images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
<a-point x="74%" y="5%" content="Look within this box">
<div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
</a-point>
</annotate>
<p/>

In the next dialog, tick the following option:

<pic eager src="{{baseUrl}}/lessons/merge/images/sourcetreeMergeWithoutFf.png" width="600" />

To permanently prevent fast-forwarding:

1. Go to Sourcetree `Settings`.
1. Navigate to the `Git` section.
1. Tick the box `Do not fast-forward when merging, always create commit`.

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree_windows=sourcetree_windows, sourcetree_mac=sourcetree_mac) }}
<!-- ------ end: Git Tabs -------------------------------->
</div>

**A {{ show_git_term("squash merge") }} takes all the changes from the source branch and combines them into a single commit on the destination branch.** It is especially useful when the source branch has many small or experimental commits that would otherwise clutter history.

{% set a %} <!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "more commits ..."
    commit id: "[HEAD → main] m1"
    branch feature
    checkout feature
    commit id: "f1"
    commit id: "[feature] f2"
</mermaid>

{% endset %}
{% set b %}<small>%%[squash merge...]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "more commits ..."
    commit id: "m1"
    branch feature
    checkout feature
    commit id: "f1"
    commit id: "[feature] f2"
    checkout main
    commit id: "[HEAD → main] s1 (same as f1+f2)"
</mermaid>

{% endset %}
{{ show_transformation_columns(a, b, c) }}
<!-- ------ end: transformation columns -------------------------------->

In the example above, the branch `feature` has been squash merged onto the `main` branch, creating a single 'squashed' commit `s1` that combines all the commits in `feature` branch.


After a squash merge, you typically delete the source branch, so its individual commits are no longer kept. The destination branch's history stays linear, as the work done in the source branch is replaced by one commit on the destination branch. As a result, a squash merge commit is just a normal commit, and does not have a 'parent' reference to the source branch.

{% set a %} <!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "more commits ..."
    commit id: "[HEAD → main] m1"
    branch feature
    checkout feature
    commit id: "f1"
    commit id: "[feature] f2"
    checkout main
    merge feature
</mermaid>
<small>->[If using a regular merge,<br> with a merge commit]<-</small>
{% endset %}
{% set b %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "more commits ..."
    commit id: "m1"
    commit id: "f1"
    commit id: "[HEAD → main][feature] f2"
</mermaid>

<small>->[If using a fast-forward merge]<-</small>
{% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "more commits ..."
    commit id: "m1"
    commit id: "[HEAD → main] s1 (same as f1+f2)"
</mermaid>

<small>->[If using a squash merge, and after<br>deleting the source branch thereafter]<-</small>
{% endset %}
{{ show_multiple_columns([a, '|', b, '|', c]) }}
<!-- ------ end: transformation columns -------------------------------->

<p/>

<div class="d-print-none">

The mechanics of doing a squash merge is covered in a separate detour.
</div>

</div>
<div id="extras">

{{ show_exercise(exercises.branch_bender) }}
{{ show_exercise(exercises.branch_forward) }}
{{ show_detour('undoMerge') }}
{{ show_detour('compareBranches') }}
{{ show_detour('squashMerge') }}
</div>
