{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_fine_print, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}


<span id="prereqs"></span>
<span id="outcomes">Can use Git worktrees to work with multiple branches simultaneously.</span>
{% set lesson_data = trail.branchingLocally.lessons.worktrees %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
**Git worktrees let one local repository have multiple working directories at the same time.**
{% endcall %}

**At times, you need to have more than one branch checked out simultaneously.** For example, while tests are running on your feature branch, you might need to quickly fix an urgent bug in another branch. Switching branches alters files in the project directory on which the running tests might depend on. Another modern use case is coordinating multiple AI agents to work on different tasks in parallel, each contained within its own branch.

**Git's {{ show_git_term("worktree") }} feature supports creating additional working directories attached to the same local repository.** This lets you keep one branch open in one directory and another branch open in another directory. Unlike the alternatives of copy-pasting the repo or cloning it, worktrees are lightweight and share the same underlying repository data, which means keeping them in sync is much easier.

{% call show_sidebar("Working Directory vs Working Tree vs Worktree") %}

* **A {{ show_git_term("working directory") }} is the folder on your computer where your repo files reside.** This is a filesystem idea: it is the directory you see in your editor, terminal, or file explorer. In a regular Git repository, the hidden `.git` directory is stored inside the top-level working directory and contains Git’s repository metadata {{ show_fine_print("in some setups .git may be a file that points elsewhere")}} .
* **A {{ show_git_term("working tree") }} is Git’s view of the checked-out project files in the working directory, excluding Git’s own metadata.** When Git reports modified, deleted, or untracked files, it is inspecting the working tree and comparing it with the staging area and `HEAD`.
* **A {{ show_git_term("worktree") }} is an additional working directory linked to the same Git repository.** You can think of it as a working directory managed by Git's worktree feature.

**The terms overlap, but they emphasize different perspectives**: filesystem location, Git’s model of checked-out files, and Git’s feature for managing the other two.

**The three terms are often used interchangeably** though, and the context usually makes it clear which one is meant.
{% endcall %}

**Normally, a local repository starts with one worktree checked out in one working directory.** When you switch branches, Git updates the files in that working directory so that they match the branch you switched to.

**A linked worktree is an additional checkout connected to the same local repository with its own working directory, staging area, and current `HEAD`** while sharing the same underlying repository data. Implications:

1. **Each worktree can be on a different branch**, because each has its own `HEAD`.
1. **Changes made in one worktree do not appear as uncommitted changes in other worktrees**, because each worktree has its own checked-out files.
1. **Commits and branch merges in one worktree are immediately visible in the other worktrees** without the need to fetch/pull, because they share the same repository data.

**Git generally keeps one branch checked out in only one worktree at a time.** This prevents two worktrees from trying to move the same branch ref independently. In practice, you usually give each active worktree its own branch, or use a worktree temporarily to inspect a specific point in history.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Work with multiple worktrees")  %}

{{ hp_number(hop_preparation) }}

**Create a small disposable repo so you can try worktrees without affecting one of your real projects.** Run the following commands in a terminal:

```bash{.no-line-numbers}
mkdir worktree-demo
cd worktree-demo
git init -b main
echo "Project notes" > README.md
git add README.md
git commit -m "Add README"
```

{{ hp_number("1") }} **Add a linked worktree for a hotfix branch.**

```bash{.no-line-numbers}
git worktree add ../worktree-demo-hotfix -b hotfix/readme
```

The `git worktree add <path> -b <branch>` command creates a new branch and checks it out in a new directory. In this case, Git creates the `hotfix/readme` branch in the `../worktree-demo-hotfix` directory.

{{ hp_number("2") }} **List the worktrees attached to the repo.**

```bash{.no-line-numbers}
git worktree list
```

{% call show_output() %}
```bash{.no-line-numbers}
/.../worktree-demo         7947b49 [main]
/.../worktree-demo-hotfix  7947b49 [hotfix/readme]
```
{% endcall %}

The exact paths and commit hashes will differ on your computer, but the output should show two worktrees: the original worktree and the linked hotfix worktree.

{{ hp_number("3") }} **Do work in the hotfix worktree.**

```bash{.no-line-numbers}
cd ../worktree-demo-hotfix
echo "Hotfix note" >> README.md
git add README.md
git commit -m "Clarify README"
git status --short
```

`git status --short` should print nothing, because the hotfix worktree is clean after the commit.

{{ hp_number("4") }} **Switch to the original worktree by changing directories, then do separate work there.**

```bash{.no-line-numbers}
cd ../worktree-demo
git switch -c feature/notes
echo "Feature note" > notes.txt
git add notes.txt
git commit -m "Add feature notes"
echo "Draft from the original worktree" >> notes.txt
git status --short
```

{% call show_output() %}
```bash{.no-line-numbers}
 M notes.txt
```
{% endcall %}

**Switching between worktrees is just switching between folders.** The original worktree now has an uncommitted change in `notes.txt`.

{{ hp_number("5") }} **Switch back to the hotfix worktree and check that its working tree is still clean.**

```bash{.no-line-numbers}
cd ../worktree-demo-hotfix
git status --short
git log --oneline --decorate --graph --all
```

`git status --short` should still print nothing in the hotfix worktree. The commit history, however, is shared, so `git log --all` can show commits from both branches.

{{ hp_number("6") }} **Remove a clean linked worktree.**

```bash{.no-line-numbers}
cd ../worktree-demo
git worktree remove ../worktree-demo-hotfix
git worktree list
```

**Removing a clean worktree deletes that working directory, but it does not delete the branch that was checked out there.** The `hotfix/readme` branch and its commit are still part of the repository. If you no longer need the branch either, you can delete it separately:

```bash{.no-line-numbers}
git branch -d hotfix/readme
```

If Git says the branch is not fully merged, decide whether the commits are still useful. To discard the branch anyway, use `git branch -D hotfix/readme`.

In this practical, `git branch -d hotfix/readme` will likely be refused because the hotfix commit has not been merged into your current branch. That is Git protecting an unmerged branch from accidental deletion.

{{ hp_number("7") }} **Try to remove a worktree that has uncommitted changes.**

```bash{.no-line-numbers}
git worktree add ../worktree-demo-scratch -b scratch/experiment main
cd ../worktree-demo-scratch
echo "Scratch idea" > scratch.txt
cd ../worktree-demo
git worktree remove ../worktree-demo-scratch
```

{% call show_output() %}
```bash{.no-line-numbers}
fatal: '../worktree-demo-scratch' contains modified or untracked files, use --force to delete it
```
{% endcall %}

**Git refuses to remove a worktree when doing so would discard uncommitted work.** If you really want to throw away that worktree's uncommitted changes, force the removal:

```bash{.no-line-numbers}
git worktree remove --force ../worktree-demo-scratch
```

{{ hp_number("8") }} **Try the same idea with a worktree that has an unresolved merge conflict.**

First, create a linked worktree and deliberately produce a conflict inside it:

```bash{.no-line-numbers}
git worktree add ../worktree-demo-conflict -b conflict/demo main
cd ../worktree-demo-conflict
echo "Conflict side A" > conflict.txt
git add conflict.txt
git commit -m "Add conflict side A"
git switch -c conflict/other main
echo "Conflict side B" > conflict.txt
git add conflict.txt
git commit -m "Add conflict side B"
git switch conflict/demo
git merge conflict/other
```

The merge should stop with a conflict in `conflict.txt`. Now try to remove that conflicted worktree from the original worktree:

```bash{.no-line-numbers}
cd ../worktree-demo
git worktree remove ../worktree-demo-conflict
```

{% call show_output() %}
```bash{.no-line-numbers}
fatal: '../worktree-demo-conflict' contains modified or untracked files, use --force to delete it
```
{% endcall %}

**An unresolved merge conflict also makes the worktree unsafe to remove normally.** Resolve or abort the merge if you want to keep the work. If this is only a throwaway practice worktree, force the removal:

```bash{.no-line-numbers}
git worktree remove --force ../worktree-demo-conflict
```

{{ hp_number(":far-square-check: check") }} **Run `git worktree list` one last time.** You should see only the original `worktree-demo` worktree.

```bash{.no-line-numbers}
git worktree list
```

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>
<div id="extras">
</div>
