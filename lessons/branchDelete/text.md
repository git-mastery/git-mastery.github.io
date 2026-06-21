{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_fine_print, show_hands_on_practical, show_head, show_hop_prep, show_lesson_intro, show_output, show_ref, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can delete a branch in a local repository.</span>
{% set lesson_data = trail.branchingLocally.lessons.branchDelete %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
**Branches can be deleted** to get rid of them when they are no longer needed.
{% endcall %}

**Deleting a branch deletes the corresponding branch ref from the revision history** (it does not delete any commits). The impact of the loss of the branch ref depends on whether the branch has been merged.

****When you delete a branch that has been merged,**** **the commits of the branch will remain in the history and be safe. Only the branch ref is lost.**

{% set a %}<!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    branch bug-fix
    checkout bug-fix
    commit id: "[bug-fix] b1"
    checkout main
    merge bug-fix id: "[HEAD → main] mc1"
</mermaid>
{% endset %}
{% set b %}<small>%%[delete branch `bug-fix`]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    branch _
    checkout _
    commit id: "b1"
    checkout main
    merge _ id: "[HEAD → main] mc1"
</mermaid>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

In the above example, the deletion only removes the branch ref `bug-fix`. All commits remain reachable via the `main` branch, and the revision history is otherwise unchanged.

In fact, some prefer to delete the branch soon after merging it, to reduce clutter from branch references in the revision history.

****When you delete a branch that has not been merged,**** **the loss of the branch ref can render some commits unreachable** (you may still be able to inspect or recover them for a while if you know their SHA), putting them at risk of being lost eventually.

{% set a %}<!-- ------ start: transformation columns --------------->
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "[HEAD → main] m1"
    branch bug-fix
    checkout bug-fix
    commit id: "[bug-fix] b1"
    checkout main
</mermaid>
{% endset %}
{% set b %}<small>%%[delete branch `bug-fix`]%%</small> {% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "[HEAD → main] m1"
    branch _
    checkout _
    commit id: "b1"
    checkout main
</mermaid>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

In the above example, the commit `b1` is no longer reachable {{ show_fine_print("If you know its commit ID (i.e., SHA), you can still inspect or recover it for a while.") }}.<br>

{% call show_sidebar("What makes a commit 'unreachable'?") %} <!-- -------------------- -->

**Recall that a commit only has a pointer to its parent commit** (not its descendant commits).

**A commit is considered {{ show_git_term("reachable") }} if you can get to it by starting at a branch, tag, or other ref and walking backward through its parent commits.** 'Reachable' is the normal state for commits — they are part of the visible history of a branch or tag.

**If no branch, tag, or ref in the repo can be used as the starting point to reach a certain commit, that commit is {{ show_git_term("unreachable") }}.** This often happens when you delete a branch or rewrite history (e.g., with reset or rebase), leaving some commits {{ show_git_term('"orphaned"') }} (or {{ show_git_term('"dangling"') }}) without a ref pointing to them.

<div class="indented-level1">

In the example below, `C4` is unreachable (i.e., cannot be reached by starting at any of the three refs: {{ show_tag('v1.0') }} or {{ show_ref('main') }} or {{ show_head() }}), but the other three are all reachable.

{{ show_commit('C4', edge="↓", desc="<md>#r#unreachable!##", style="dark") }}
{{ show_commit('C3', edge="↓", desc= show_tag("v1.0")) }}
{{ show_commit('C2', edge="↓", desc=show_ref('main')  + show_head()) }}
{{ show_commit('C1', edge='') }}
<p/>
</div>

**Unreachable commits are not deleted immediately — Git keeps them for a while before cleaning them up.** By default, Git retains unreachable commits for at least **30 days**, during which they can still be recovered if you know their SHA. **After that, they will be garbage-collected and lost for good.**
{% endcall %} <!-- end: sidebar -------------------------------------->

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Delete branches")  %}

{{ hp_number(hop_scenario) }} You have the following repo, named `samplerepo-books-2`.

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    branch textbooks
    checkout textbooks
    commit id: "[textbooks] t1"
    checkout main
    branch fantasy
    checkout fantasy
    commit id: "[fantasy] f1"
    checkout main
    merge textbooks id: "[HEAD → main] mc1"
</mermaid>

The work in the `textbooks` branch has been completed, and the branch has been merged, so there is no need to keep that branch anymore.<br>
The work in the `fantasy` branch is no longer needed, so there is no need for that branch either.

{{ hp_number(hop_target) }} Delete the `textbooks` (merged) and `fantasy` branches (unmerged).

{{ hp_number(hop_preparation) }}

{% set manual %}
To create the repo `samplerepo-books-2` manually, run the following commands in your terminal.

```bash
mkdir samplerepo-books-2
cd samplerepo-books-2
git init -b main
echo "Horror Stories" >> horror.txt
git add .
git commit -m "Add horror.txt"
git switch -c textbooks
echo "Textbooks" >> textbooks.txt
git add .
git commit -m "Add textbooks.txt"
git switch main
git switch -c fantasy
echo "Fantasy Books" >> fantasy.txt
git add .
git commit -m "Add fantasy.txt"
git switch main
sleep 1
git merge --no-ff -m "Merge branch textbooks" textbooks
```
{% endset %}

{{ show_hop_prep('hp-branch-delete', manual_info=manual) }}

{{ hp_number("1") }} **Delete the (merged) `textbooks` branch.**
{% set cli %} <!-- ------ start: Git Tabs --------------->
Use the `git branch -d <branch>` command to delete a local branch safely. This command will fail if the branch has unmerged commits. In this case, it will succeed because the branch has no unmerged commits.

```bash{.no-line-numbers}
git branch -d textbooks
git log --oneline --decorate --graph --all  # check the current revision graph
```
{% call show_output() %}
```bash{.no-line-numbers}
*   443132a (HEAD -> main) Merge branch textbooks
|\
| * 4969163 Add textbooks.txt
|/
| * 0586ee1 (fantasy) Add fantasy.txt
|/
* 7f28f0e Add horror.txt
```
{% endcall %}
{% endset %}
{% set sourcetree %}
Right-click on the branch name and choose `Delete <branch>`:<br>
<pic src="images/sourcetreeRightClickToDelete.png" width="450" />

In the next dialog, click `OK`:<br>
<pic src="images/sourcetreeDeleteBranchDialog.png" width="400" />

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

Observe that all commits remain. The only thing missing is the `textbooks` ref.

{{ hp_number("2") }} **Make a copy of the `SHA` of the tip of the (unmerged) `fantasy` branch.**

{{ hp_number("3") }} **Delete the `fantasy` branch.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Attempt to delete the branch. It should fail, as shown below:
```bash{.no-line-numbers}
git branch -d fantasy
```
{% call show_output() %}
```bash{.no-line-numbers}
error: the branch 'fantasy' is not fully merged
hint: If you are sure you want to delete it, run 'git branch -D fantasy'
```
{% endcall %}

As the error message suggests, you can replace `-d` with `-D` to force the deletion.

```bash{.no-line-numbers}
git branch -D fantasy
```
Now, check the revision graph:
```bash{.no-line-numbers}
git log --oneline --decorate --graph --all
```
{% call show_output() %}
```bash{.no-line-numbers}
*   443132a (HEAD -> main) Merge branch textbooks
|\
| * 4969163 Add textbooks.txt
|/
* 7f28f0e Add horror.txt
```
{% endcall %}

{% endset %}
{% set sourcetree %}

Attempt to delete the branch as you did before. It will fail because the branch has unmerged commits.<br>
<pic src="images/sourcetreeBranchDeletionFailed.png" width="550" />

Try again, but this time select the `Force delete` option, which will force Git to delete the unmerged branch:<br>
<pic src="images/sourcetreeDeleteBranchDialog.png" width="400" />
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}

Observe how the branch ref `fantasy` is gone, and the branch's unmerged commits are no longer visible in the commit graph (e.g., if you run `git log --all`).

{{ hp_number("4") }}  **Attempt to view the 'unreachable' commit** whose `SHA` you noted in step 2.

For example, `git show 32b34fb` (use the `SHA` you copied earlier)

Observe how the commit still exists, and you are still able to inspect it using its commit ID (for now).
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


</div>
<div id="extras">
{{ show_exercise(exercises.branch_delete) }}
<p/>
<hr>

This is a good time to attempt exercises that combine knowledge from multiple branch-management lessons in this tour:

{{ show_exercise(exercises.mix_messy_docs) }}
{{ show_exercise(exercises.mix_messy_graph) }}
</div>
