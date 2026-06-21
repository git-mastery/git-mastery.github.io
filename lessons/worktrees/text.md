{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_fine_print, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}


<span id="prereqs"></span>
<span id="outcomes">Can use Git worktrees to work with multiple branches simultaneously.</span>
{% set lesson_data = trail.branchingLocally.lessons.worktrees %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
**Git worktrees let one local repository have multiple working directories at the same time.**
{% endcall %}

**At times, you need to have more than one branch checked out simultaneously.** For example, while tests are running on your feature branch, you might need to quickly fix an urgent bug in another branch. Switching branches alters files in the project directory that the running tests might depend on. Another modern use case is coordinating multiple AI agents to work on different tasks in parallel, with each agent working on its own branch.

**Git's {{ show_git_term("worktree") }} feature lets you create additional working directories attached to the same local repository.** This lets you keep different branches active in separate directories. Unlike copying the repo or cloning it again, worktrees are lightweight and share the same underlying repository data, which makes it easier to bring changes from one worktree to another.

{% call show_sidebar("Working Directory vs Working Tree vs Worktree") %}

* **A {{ show_git_term("working directory") }} is the folder on your computer that contains your repo files.** This is a filesystem idea: it is the directory you see in your editor, terminal, or file explorer. In a regular Git repository, the hidden `.git` directory is stored inside the top-level working directory and contains Git’s repository metadata {{ show_fine_print("in some setups, `.git` may be a file that points elsewhere")}}.
* **A {{ show_git_term("working tree") }} is Git’s view of the checked-out project files in the working directory, excluding Git’s own metadata.** When Git reports modified, deleted, or untracked files, it is inspecting the working tree and comparing it with the staging area and `HEAD`.
* **A {{ show_git_term("worktree") }} is a working directory managed by Git's worktree feature.**

**The terms overlap, but they emphasize different perspectives**: filesystem location, Git’s model of checked-out files, and Git’s feature for managing linked working directories.

**The three terms are often used interchangeably**, though, and the context usually makes it clear which one is meant.
{% endcall %}

**Normally, a local repository starts with one worktree checked out in one working directory.** When you switch branches, Git updates the files in that working directory so that they match the branch you switched to.

**A linked worktree is an additional checkout that is connected to the same local repository and has its own working directory, staging area, and current `HEAD`**, while sharing the same underlying repository data. Implications:

1. **Each worktree can be on a different branch**, because each has its own `HEAD`.
1. **Changes made in one worktree do not appear as uncommitted changes in other worktrees**, because each worktree has its own checked-out files.
1. **Commits and branch refs updated in one worktree are immediately visible in commands such as `git log --all` from other worktrees**, but each worktree’s checked-out files remain separate.

**Git generally allows a branch to be checked out in only one worktree at a time.** This prevents two worktrees from trying to move the same branch ref independently. In practice, you usually give each active worktree its own branch, or use a worktree temporarily to inspect a specific point in history.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Work with multiple worktrees")  %}

{{ hp_number(hop_preparation) }}

**Create a `study-notes` repo** as follows:

```bash{.no-line-numbers}
mkdir study-notes
cd study-notes
git init -b main
echo -e "# Study Notes" > README.md
git add README.md
git commit -m "Add README"
```

{{ hp_number("1") }} **Add a linked worktree for a `science` branch.** The `git worktree add -b <branch> <path>` command creates a new branch and checks it out in a new directory.

```bash{.no-line-numbers}
git worktree add -b science ../study-notes-science
```
In this case, Git creates the `science` branch in the `../study-notes-science` directory.

<box type="tip" seamless>

 A worktree can be located anywhere in the filesystem. One common convention is to create it in the same parent directory as the original working directory and name it `<project name>-<branch name>`, as shown above.
</box>

{{ hp_number("2") }} **List the worktrees attached to the repo.**

```bash{.no-line-numbers}
git worktree list
```

{% call show_output() %}
```bash{.no-line-numbers}
/.../study-notes            7947b49 [main]
/.../study-notes-science    7947b49 [science]
```
{% endcall %}

The output should show two worktrees: the original worktree and the linked science worktree.

{{ hp_number("3.1") }} **Switch to the new worktree.** To switch to a worktree, navigate to the directory where it is located.

```bash{.no-line-numbers}
cd ../study-notes-science
```
{{ hp_number("3.2") }} **Do some work in the new worktree.**

```bash{.no-line-numbers}
echo "# Science Notes" > science.md
git add science.md
git commit -m "Add science.md"
echo "Revise for science test" >> science.md
git status --short
```

These commands should create a new commit and leave some uncommitted changes in this worktree.

{{ hp_number("4.1") }} **Switch back to the original worktree. Check the state.**

```bash{.no-line-numbers}
cd ../study-notes
git log --oneline --decorate --graph --all
git status --short
```
{% call show_output() %}
```bash{.no-line-numbers}
 * 54a709f (science) Add science.md
 * 1587164 (HEAD -> main) Add README
```
{% endcall %}

The empty `git status --short` output shows that the uncommitted changes in the science worktree do not appear in the original worktree. The new commit you added in the science worktree appears in the `git log` output because the commit history is shared between worktrees.

{{ hp_number("4.2") }} **Do some work in the original worktree.**

```bash{.no-line-numbers}
echo -e "This is for keeping study notes" >> README.md
git commit -am "Add more info to README"
```

{{ hp_number("5") }} **Switch back to the science worktree. Check the state.**

```bash{.no-line-numbers}
cd ../study-notes-science
git status --short
git log --oneline --decorate --graph --all
```

Observe that the uncommitted changes you made earlier are still there. You can also see the new commit you made in the original worktree. This shows that the revision history is visible across linked worktrees.

{{ hp_number("6") }} **Switch back to the original worktree. Attempt to remove the science worktree.**

```bash{.no-line-numbers}
cd ../study-notes
git worktree remove ../study-notes-science
```
{% call show_output() %}
```bash{.no-line-numbers}
fatal: '../study-notes-science' contains modified or untracked files, use --force to delete it
```
{% endcall %}

Git refuses to remove the science worktree because it has uncommitted changes. This protects unsaved work from accidental deletion.

{{ hp_number("7") }} **Go back to the science worktree. Commit the changes. Try to switch to `main`.**

```bash{.no-line-numbers}
cd ../study-notes-science
git commit -am "Add more info to science.md"
```

While you are in the science worktree, first try to switch to `main` so that you can merge the `science` branch into it.

```bash{.no-line-numbers}
git switch main
```

{% call show_output() %}
```bash{.no-line-numbers}
fatal: 'main' is already used by worktree at '..../study-notes'
```
{% endcall %}

**Git refuses to switch to `main` because it is already checked out in the original worktree.**


{{ hp_number("8") }} **Go back to the original worktree. Merge the `science` branch from there.**

```bash{.no-line-numbers}
cd ../study-notes
git merge science
```

The merge should now succeed. Although the `science` branch was created in the science worktree, it can still be merged from another worktree.

{{ hp_number("9") }} **Now you can remove the science worktree.**

```bash{.no-line-numbers}
git worktree remove ../study-notes-science
```

Run `git worktree list` one last time. You should see only the original `study-notes` worktree.

```bash{.no-line-numbers}
git worktree list
```
Observe that the `science` branch is still there (e.g., run `git branch --list`) even though the worktree we created for it has been removed. You can delete the branch separately (e.g., run `git branch -d science`) if you wish.

<box type="info" seamless>

If you delete a linked worktree folder manually instead of using `git worktree remove`, Git may keep a stale entry until you run `git worktree prune`.
</box>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>
<div id="extras">
</div>
