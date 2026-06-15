{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_hands_on_practical, show_head, show_hop_prep, show_lesson_intro, show_output, show_protip, show_ref, show_steps_tabs, show_tag, show_transformation_columns, show_two_column_row, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Able to work in parallel Git branches, in the local repo.</span>
{% set lesson_data = trail.branchingLocally.lessons.branch %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div class="row align-items-start g-3">
  <div class="col-md-8">
    <div id="body">
{% call show_lesson_intro() %}
**To work in parallel timelines, you can use Git _branches_.**
{% endcall %}

@[youtube](9Kg-meMYAtg)

<p/>

**Often, we need to make multiple parallel changes to files in a repository** without one change affecting the others.

{% call show_two_column_row("images/commitsHasABug.png") %}
**One such situation is when you want to experiment with multiple alternative fixes to a bug in parallel.**

For example, suppose you notice a bug after a few commits, as shown on the left, and want to try alternative fixes.
{% endcall %}

{% call show_two_column_row("images/fixesMixed.png") %}
If you simply create more commits, the two fixes can mix together, interfere with each other, and get tangled with your main code.

You could copy the repository into two folders and try one fix in each. But then you would have three repositories to manage and would need to copy changes manually when choosing a fix.

Instead, **we need a way to maintain multiple parallel timelines in the same repository**.
{% endcall %}

{% call show_two_column_row("images/divergedTimelines.png") %}

**Because Git revision graphs are implemented as <tooltip content="i.e., Directed Acyclic Graphs">DAGs</tooltip>, they can already maintain multiple parallel timelines.** For example, Git can maintain two timelines that {{ show_git_term("diverge") }} from the main timeline at commit `c`, one for each bug fix. You can then switch between them, compare the fixes, and choose which one to keep.
{% endcall %}

{% call show_two_column_row("images/namedTimelines.png") %}

**_Branches_ let us manage diverged timelines in a practical way.** A branch name points to the latest commit in a timeline, making that timeline easy to refer to.

Therefore, **a {{ show_git_term("branch") }} is conceptually a _named timeline_ of commits, implemented as a label/reference ({{ show_git_term("ref") }} for short) that points to the latest commit in that timeline.** In the example on the left, there are three branches: `main`, `fix1`, and `fix2`.

**The latest commit that a branch ref points to is called the {{ show_git_term("tip") }} of the branch.** For example, `c` is the tip of the `main` branch while `f1` is the tip of the `fix1` branch.

{% endcall %}

**_All_ commits reachable from the branch ref are considered part of the branch.** Reachability follows each commit's 'parent' link. In the example below, commits `c`, `b`, and `a` are on `main` because Git can start from the ref `main` and traverse to those commits through parent links. Similarly, commits `f1`, `e1`, `d1`, `c`, `b`, and `a` are on `fix1`.

<img style="{{ img_style_no_border }}" src="images/reachableCommitsInABranch.png" width="600"/>
<p/>

<box type="info" seamless>

**Clarification on the 'start' of a branch**{.text-info}

**We often call the point where a branch diverges from another branch the 'start' of the branch. However, technically, a branch doesn't have a start point.** Since all commits reachable from a branch ref are part of the branch, the branch could be said to start at any of those commits.

In the examples above, commit `c` could be called the start of branches `fix1` and `fix2`, although commits `a` and `b` are also in those branches.
</box>

{% call show_two_column_row("images/headRef.png") %}

**The {{ show_git_term("HEAD") }} is a special ref that points to the branch ref of the branch you are currently on**, also called the {{ show_git_term("current branch") }} or the {{ show_git_term("active branch") }}. In the example on the left, `fix1` is the active branch.

**Git automatically updates the working directory to match the branch tip.** As a result, changes made only in other diverged branches do not pollute it. This lets you work on one timeline in isolation.

Caveat: When switching branches, uncommitted changes may be carried across, conflict, or block the switch. More on this later.

{% endcall %}
<p/>

In the example below, observe how the file in the working directory changes as we change the active branch.

<img style="{{ img_style_no_border }}" src="images/workingDirectlyReflectsActiveBranch.png" width="750"/>
<p/>


Next, let us look at how branches behave as you add commits.

{% call show_two_column_row("images/atInitNoCommit.png") %}
After you initialize a repo, Git already has a `HEAD` ref pointing to a branch ref. **`master` is Git's default name for that initial branch**, although you can configure another default. **`main` is more common these days** <span class="d-print-none">(and is the default used by Git-Mastery</span>), so we will use it here.

**At the start, you already have a branch but without any commits** on it.
{% endcall %}

{% call show_two_column_row("images/atInitOneCommit.png") %}
When you create the first commit, the `main` branch ref points to it, making that commit the tip of `main`.

<box type="info" seamless>

The first commit of a repo doesn't have a parent commit.
</box>
{% endcall %}

{% call show_two_column_row("images/atInitDecideParent.png") %}
**When you add a new commit, two things happen:**

1. **First, the new commit uses the commit `HEAD` points to as its parent.** Here, the new commit uses commit `a` as its parent.
{% endcall %}

{% call show_two_column_row("images/atInitRefMovesForward.png") %}

2. **Second, the branch ref that `HEAD` points to moves to the new commit.** In this example, the `main` branch ref will move to the new commit `b`.<br>
  The `HEAD` continues to point to the same branch ref, which means the `main` branch is still the _active_ branch.
{% endcall %}

**New commits go into the branch you are currently on, and the branch ref moves to the new commit**, so `HEAD` too points to the new commit through that branch ref.

Next, let's add branches beyond Git's initial branch.

{% call show_two_column_row("images/createBranchOnlyRef.png") %}
**When you add a new branch, Git adds a branch ref pointing to a commit.** Unless you specify another commit, it points to the tip of the current branch.

In the example on the left, the new `fix1` branch ref points to the same commit as `main`.
{% endcall %}

{% call show_two_column_row("images/createBranchMadeActive.png") %}
**If you want subsequent commits to go into the new branch, make it active** by {{ show_git_term("switching") }} to it. Then, `HEAD` points to the new branch ref.

In the example on the left, `HEAD` now points to `fix1`, making `fix1` active.
{% endcall %}

{% call show_two_column_row("images/createBranchCommitAdded.png") %}
Now, a new commit `d1` has been added to `fix1`. The `fix1` ref has moved to the new commit, and `HEAD` points to it via the `fix1` branch ref. The `main` branch ref remains where it is.
{% endcall %}

<box type="warning" seamless>

Revision graphs vary by Git client, so your graph's colors, positions, and orientation might not match these diagrams exactly.
</box>
<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Work on parallel branches")  %}

{{ hp_number(hop_preparation) }}

{% set manual %}
Create a repo named `sports`:
```
mkdir sports
cd sports
git init -b main

echo -e "Arnold Palmer\nTiger Woods" > golf.txt
git stage golf.txt
git commit -m "Add golf.txt"

echo -e "Pete Sampras\nRoger Federer\nSerena Williams" > tennis.txt
git stage tennis.txt
git commit -m "Add tennis.txt"

echo -e "Pele\nMaradona" > football.txt
git stage football.txt
git commit -m "Add football.txt"
```
{% endset %}

{{ show_hop_prep('hp-create-branch', manual_info=manual) }}

{{ hp_number ('1') }} **Observe that you are on the branch called `main`.**
{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash
git status
```
{% call show_output() %}
```bash
On branch main
```
{% endcall %}

{% endset %}
{% set sourcetree %}
<pic eager src="{{baseUrl}}/lessons/branch/images/onMasterBranch.png" height="120" />
<p/>
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('2') }} **Start a branch named `feature1` and switch to the new branch.**

{% set cli %} <!-- ------ start: Git Tabs --------------->
Use `git branch` to create a branch and `git checkout` to switch to it.

```bash{highlight-lines="1['branch'],2['checkout']"}
git branch feature1
git checkout feature1
```

Shortcut to create and switch in one step:

```bash{highlight-lines="1['checkout -b']"}
git checkout -b feature1
```
{% call show_output() %}
```bash
Switched to a new branch 'feature1'
```
{% endcall %}

<box type="info" header="The new `switch` command" seamless>

You can use the more modern alternative [`git switch`](https://git-scm.com/docs/git-switch) instead of `git checkout`.

To create a new branch and switch to it:
```bash{highlight-lines="2['switch']"}
git branch feature1
git switch feature1
```
One-step shortcut (by using `-c` or `--create` flag):

```bash{highlight-lines="1['switch -c']"}
git switch -c feature1
```
</box>
{% endset %}
{% set sourcetree %}
Click on the `Branch` button on the main menu. In the next dialog, enter the branch name and click `Create Branch`.

<pic eager src="{{baseUrl}}/lessons/branch/images/sourcetreeCreateBranch.png" height="150" />
<p/>

Note that `feature1` is now the current branch. Sourcetree switches automatically when `Checkout New Branch` was selected in the dialog.

<pic eager src="{{baseUrl}}/lessons/branch/images/sourcetreeFeature1BranchActive.png" height="150" />
<p/>
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('3') }} **Create some commits in the new branch, as follows.**

* Add a file named `boxing.txt`, stage it, and commit it.{texts="['3.1', '3.2', '3.3', '3.4']"}
  ```bash
  echo -e "Muhammad Ali" > boxing.txt
  git stage boxing.txt
  git commit -m "Add boxing.txt"
  ```
* Observe how commits you add while on `feature1` become part of that branch.<br>
  Observe how the `feature1` ref and `HEAD` ref move to the new commit.


{% set cli %} <!-- ------ start: Git Tabs --------------->
As before, you can use the `git log --oneline --decorate` command for this.
{% endset %}
{% set sourcetree %}
* :fab-windows: Sourcetree sometimes represents the local repo's `HEAD` ref as :fas-dot-circle:, as shown below:
  <pic eager src="images/sourcetree_HEAD_dot.png" />
* :fab-apple: The `HEAD` ref is not shown in the UI if it is already pointing at the active branch.
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

* Add more text to `boxing.txt`, stage the changes, and commit it. This commit is also added to `feature1`.{texts="['3.3']"}
  ```bash
  echo -e "Mike Tyson" >> boxing.txt
  git commit -am "Add Tyson to boxing.txt"
  ```

{{ hp_number ('4') }} **Switch to the `main` branch.** Note how the changes you made in the `feature1` branch are no longer in the working directory.

{% set cli %} <!-- ------ start: Git Tabs --------------->
```bash
git switch main
```
{% endset %}
{% set sourcetree %}
Double-click the `main` branch.

<pic eager src="{{baseUrl}}/lessons/branch/images/sourcetreeMasterBranchSelected.png" height="150" />
<p/>

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('5') }} **Add a commit to the `main` branch.** Let’s imagine it’s a bug fix.<br>
To keep things simple for the time being, this commit should ==not involve the `boxing.txt` file that you changed in the `feature1` branch==. Of course, this is easily done, as the `boxing.txt` file you added in the `feature1` branch is not even visible when you are in the `main` branch.
```bash
echo -e "Martina Navratilova" >> tennis.txt
git commit -am "Add Martina to tennis.txt"
```
<div id="sports-repo-before-merging">
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    commit id: "f1"
    commit id: "[feature1] f2"
    checkout main
    commit id: "[HEAD → main] m3"
    checkout feature1
</mermaid>
</div>

{{ hp_number ('6') }} **Switch between the two branches and see how the working directory changes.** You now have two parallel timelines that you can freely switch between.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**You can also start a branch from an earlier commit**, not only from the latest commit in the current branch. Check out the commit you want the new branch to start from.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Start a branch from an earlier commit")  %}

{{ hp_number(hop_preparation) }}
{{ show_hop_prep('hp-early-branch', is_continue=1, sandbox_info="the `sports` repo") }}

{{ hp_number(hop_scenario) }} Suppose we want a branch with an alternative version of the `feature1` content.

{{ hp_number(hop_target)}} Create a new branch from the commit where `feature1` started, as shown below:

<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "m1"
    commit id: "m2"
    branch feature1
    branch feature1-alt
    checkout feature1
    commit id: "f1"
    commit id: "[feature1] f2"
    checkout main
    commit id: "[HEAD → main] m3"
    checkout feature1-alt
    commit id: "[HEAD → feature1-alt] a1"
</mermaid>

<box type="wrong" seamless>

**Avoid this rookie mistake!**{.text-danger}

Before creating a branch, make sure you are at the commit where the new branch should start, as that is where Git will create the new branch by default.
</box>


{{ hp_number('1') }} Switch to the `main` branch.

{{ hp_number('2') }} Check out the commit where `feature1` diverged from `main` (e.g., `git checkout HEAD~1`). This creates
<trigger trigger="click" for="modal:branch-detachedHead">a 'detached' `HEAD`</trigger>. You are now at the commit where the new branch should diverge.

<modal large header="What is a 'detached' `HEAD`? (from [_T4L4. Traversing to a Specific Commit_](../checkout/index.html))" id="modal:branch-detachedHead">
  <include src="../checkout/text.md#detached-head-explanation"/>
</modal>

{{ hp_number('3') }} Create a new branch `feature1-alt` and switch to it (e.g., `git switch -c feature1-alt`). `HEAD` now points to this new branch and is no longer 'detached'.

{% call show_protip("Moving and creating a branch in one shot") %}

Suppose you are on `feature1` and want to create `feature2` from `main`, then switch to it. Normally, that takes two steps:

```bash
git switch main     # switch to the intended base branch first
git switch -c feature2  # create the new branch and switch to it
```
Use `git switch -c <new-branch> <start-point>` to do both in one step:
```bash
git switch -c feature2 main
```
Similarly, the following will create the new branch to start from one commit behind the tip of the `main` branch:
```bash
git switch -c feature2 main~1
```
{% endcall %}

{{ hp_number('4') }} Add a commit on the new branch. Example:
```bash
echo -e "Venus Williams" >> tennis.txt
git commit -am "Add Venus to tennis.txt"
```

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>

<div id="extras">
{{ show_exercise(exercises.side_track) }}
{{ show_exercise(exercises.branch_previous) }}
</div>
