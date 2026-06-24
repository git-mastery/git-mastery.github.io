{% from "common/macros.njk" import trail, ask_chatgpt, bold_number, callout, exercises, hp_number, label, show_commit, show_fine_print, show_folder_columns, show_git_term, show_git_term_tip, show_hop_prep, show_detour, show_detour_link, show_exercise, show_hands_on_practical, show_hop_prep, show_head, show_multiple_columns, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_two_column_row, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can merge branches in a local repo.</span>
{% set lesson_data = trail.branchingLocally.lessons.merge %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
Most work done on **branches eventually gets _merged_** together.
{% endcall %}

@[youtube](PseJ2qfuCuI)

<p/>

**{{ show_git_term("Merging") }} combines the changes from one branch into another**, bringing their diverged timelines back together.

{% call show_two_column_row("images/normalBeforeMerge.png") %}
**The branch you are merging _into_ (the branch you are currently on) is called the {{ show_git_term("destination branch") }}** (other terms: _receiving_ branch, _target_ branch).<br>
**The branch you are merging is the {{ show_git_term("source branch") }}** (other terms: _incoming_ branch, _merge_ branch).<br>
In our example, `main` is the destination branch and `fix1` is the source branch.
{% endcall %}

{% call show_two_column_row("images/normalAfterMerge.png") %}
When you merge, Git compares how the two branches have diverged since their {{ show_git_term("merge base") }} (the most recent common ancestor commit). In the example on the left, commit `c` is their merge base.

Git then applies the source branch's changes to your current branch. Normally, this creates a new commit in the destination branch {{ show_fine_print("In certain situations, Git does something called a _fast-forward_ merge, which doesn't create a new commit. You'll learn about fast-forward merges later.") }}. **That {{ show_git_term("merge commit") }} records the combined changes.**
{% endcall %}

<p/>

**A typical two-branch merge commit has two parent commits.** {{ show_fine_print("Git also supports merge commits with more than two parents, resulting from a type of merge called 'octopus merge'") }} In the example above, merge commit `f` has both `d` and `e` as parents. **The parent commit on the <popover content="i.e., the branch you are merging _into_ (the branch you are currently on when you do the merge operation)">destination branch</popover> is the {{ show_git_term("first parent") }}, and the parent commit on the <popover content="i.e., the branch that you are merging">source branch</popover> is the {{ show_git_term("second parent") }}**. In our example, when `fix1` is merged into `main`, `d` is the first parent and `e` is the second parent.

**Merging is directional.** Merging `fix1` into `main` is not the same as merging `main` into `fix1`, as illustrated below.
{% set a %} <!-- ------ start: columns --------------->
->[merging `fix1` into `main`]<-

<pic src="images/directionIntoMain.png" width="300" />

Changes made in `d1` and `e1` are available on `main`, but changes made in `d` are not available on `fix1`.
{% endset %}
{% set b %}
->[merging `main` into `fix1`]<-

<pic src="images/directionIntoFix1.png" width="300" />

Changes made in `d` are available on `fix1`, but changes made in `d1` and `e1` are not available on `main`.
{% endset %}
{{ show_multiple_columns([a, '|', b], fill_width=true) }}


<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Merge a branch (with a merge commit)")  %}

{{ hp_number(hop_scenario) }} You have a repo with two unmerged branches `main` and `feature1`.

<include src="../branch/text.md#sports-repo-before-merging" />

{{ hp_number(hop_target) }} Merge each branch into the other.

{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-merge-commit', continue_info="You can continue with the earlier `sports` repo, which should match the revision graph in the _Scenario_ above. For simplicity, ignore the `feature1-alt` branch.") }}

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

{{ hp_number ('2') }} **Merge the `main` branch into the `feature1` branch**, producing this result {{ show_fine_print("If both branches changed the same part of a file differently, Git may pause the merge and ask you to resolve a _conflict_. The next lesson covers that case; this lesson uses branches Git can merge automatically.") }}. Git creates a _merge commit_, shown as `mc1` below.
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
The revision graph should now look like this (colors and line alignment might vary):<br>
<pic src="{{baseUrl}}/lessons/merge/images/sourcetreeAfterMeringMaster.png" width="500" />
<p/>
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}

<!-- ------ end: Git Tabs -------------------------------->

Observe that the changes from `main` (the imaginary bug fix in `m3`) are now available in `feature1`.<br>
Running `git diff HEAD^1 HEAD`{{ ask_chatgpt("Explanation of the command", "Explain the `git diff HEAD^1 HEAD` command, when the HEAD points to a merge commit that merges the `main` branch into the `feature1` branch. This is not a fast-forward merge.") }} should show the changes from `main` introduced into `feature1` (here, commit `m3`, the only new commit in `main`).

{{ hp_number ('3') }} **Add another commit to the `feature1` branch** by changing `boxing.txt`.
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

{{ hp_number ('4') }} **Merge `feature1` into the `main` branch**, producing this result:

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

The changes you made in `feature1` are now available in `main`.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

{% call show_two_column_row("images/ffBefore.png") %}
**When the destination branch hasn't diverged** -- meaning it has no new commits since the merge base commit -- Git can bring in the source branch's changes more directly.

In the example on the left, the `main` branch has not changed since the merge base commit (i.e., `c`).
{% endcall %}

{% call show_two_column_row("images/ffDuring.png") %}
**Git can merge by moving the destination branch pointer forward to include the new commits in the source branch**. This is **called a {{ show_git_term("fast-forward merge") }}** because Git "fast-forwards" the branch ref to the tip of the other branch.

The example on the left shows how the `main` branch ref is moved during a fast-forward merge of the `fix1` branch into the `main` branch.
{% endcall %}

{% call show_two_column_row("images/ffAfter.png") %}
After the fast-forward merge, the revision graph looks as if all changes were made directly on `main`. Git no longer records where `fix1` previously diverged from `main`.

**One downside of a fast-forward merge is that the revision graph does not show when the branch was merged** (as there is no merge commit). This can make the project history harder to understand.
{% endcall %}


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
To continue with the same `sports` repo, **create a branch called `add-swimming` and add some commits to it**:<br>
Switch to `main`, create and switch to the new branch, add `swimming.txt`, stage it, and commit it.<br>
Then change `swimming.txt` and commit those changes.

Equivalent commands:
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

{{ hp_number ('2') }} **Merge the `add-swimming` branch into the `main` branch.** Observe that there is no merge commit: the `main` branch ref (and `HEAD`) moved to the tip of `add-swimming` (`a2`), so both branches now point to `a2`.

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main (and add-swimming)'}} }%%" }}
    commit id: "more commits ..."
    commit id: "mc2"
    commit id: "a1"
    commit id: "[HEAD → main][add-swimming] a2"
</mermaid>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**You can force Git to create a merge commit even if fast-forwarding is possible.** This keeps branch-merge points visible in the revision graph.

<div class="d-print-none">

{% set cli %} <!-- ------ start: Git Tabs --------------->

To prevent Git from fast-forwarding, use the `--no-ff` switch when merging. Example:
```bash{.no-line-numbers}
git merge --no-ff add-swimming
```
Two other useful `git merge` options:

* `--ff-only`: Merge only if a fast-forward merge is possible.
* `--ff`: Prefer a fast-forward merge, but allow a merge commit if fast-forwarding is not possible. This is Git's default behavior, so the option is useful only if the default has been changed.
{% endset %}
{% set sourcetree_windows %}
Select the box shown below when you merge a branch:

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
1. Select the box `Do not fast-forward when merging, always create commit`.

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree_windows=sourcetree_windows, sourcetree_mac=sourcetree_mac) }}
<!-- ------ end: Git Tabs -------------------------------->
</div>

**A {{ show_git_term("squash merge") }} combines all changes from the source branch into a single commit on the destination branch.** Use it when the source branch's commits would clutter history (e.g., many experimental commits).

{% set a %} <!-- ------ start: columns --------------->
->[_before_ squash-merging `fix1` into `main`]<-

<pic src="images/squashBefore.png" width="300" />
{% endset %}
{% set b %}
->[_after_ squash-merging `fix1` into `main`]<-

<pic src="images/squashAfter.png" width="300" />
{% endset %}
{{ show_multiple_columns([a, '|', b]) }}

In the example above, `fix1` has been squash-merged into `main`, creating a single 'squashed' commit `e` from the commits in `fix1`. **The 'squashed' commit is a regular commit with one parent, not a merge commit with two parents**.

<!-- ------ end: transformation columns -------------------------------->

**After a squash merge, you typically delete the source branch**, so its individual commits no longer appear in the destination branch's main history %%(you'll learn how to delete branches in an upcoming lesson)%%. The history stays linear because one regular commit replaces the source branch's work, with no second-parent link to that branch.

Here is a comparison of the three merge types covered here: regular merging with a merge commit, fast-forward merging, and squash merging.

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

<small>->[If using a squash merge, after<br>deleting the source branch]<-</small>
{% endset %}
{{ show_multiple_columns([a, '|', b, '|', c]) }}
<!-- ------ end: transformation columns -------------------------------->

<p/>

<div class="d-print-none">

The detour below covers the mechanics of a squash merge.
</div>

</div>
<div id="extras">

{{ show_exercise(exercises.branch_bender) }}
{{ show_exercise(exercises.branch_forward) }}
{{ show_detour('undoMerge') }}
{{ show_detour('compareBranches') }}
{{ show_detour('squashMerge') }}
</div>
