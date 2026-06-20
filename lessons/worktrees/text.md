{% from "common/macros.njk" import trail, show_lesson_intro, show_sidebar with context %}

<span id="prereqs"></span>
<span id="outcomes">Can explain how Git worktrees allow multiple working directories for one local repository.</span>
{% set lesson_data = trail.branchingLocally.lessons.worktrees %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
**Git worktrees let one local repository have multiple working directories at the same time.**
{% endcall %}

Suppose you are halfway through a feature, and you want to ask an agentic coding tool to try a risky refactoring on another branch. Or perhaps you need to review a teammate's branch while your own branch still has unfinished changes. **A worktree gives the other branch its own working directory, so the extra task does not disturb the files you are already editing.**

In earlier lessons, we have often used the term _working directory_ to mean the project directory containing the files you edit. Git also uses the related term _working tree_ for the checked-out files associated with a repository. **In this lesson, we will use _working directory_ for the directory on your computer, and _worktree_ for Git's checkout context for that directory.**

Normally, **a local repository starts with one main worktree checked out in one working directory.** When you switch branches, Git updates the files in that working directory so that they match the branch you switched to. That is usually enough, but it can be inconvenient when your current files contain unfinished work.

**A linked worktree is an additional checkout connected to the same local repository.** Instead of replacing the files in your current working directory when you want to inspect or work on another branch, you can use another working directory for that other branch. Each worktree looks and feels like a separate checkout, but the worktrees are still connected to the same underlying repository.

**Each worktree has its own working directory, staging area, and current `HEAD`.** That means one worktree can be on `main` while another worktree is on a feature branch. Changes made in one worktree do not appear as uncommitted changes in the other worktree, because each worktree has its own checked-out files.

**The worktrees still share the same revision history and branch references.** A commit created in one worktree becomes part of the same local repository history and can be seen from the other worktrees too. A worktree is therefore not a separate clone of the project; it is another view of the same local repo.

**Worktrees are useful when switching branches would interrupt your current task.** For example, you might keep unfinished feature work in one worktree while using another worktree to review an agent-generated change, investigate a bug, or make a quick fix. This avoids mixing unrelated uncommitted changes in the same working directory.

**Git generally keeps one branch checked out in only one worktree at a time.** This prevents two worktrees from trying to move the same branch ref independently. In practice, you usually give each active worktree its own branch, or use a worktree temporarily to inspect a specific point in history.

**A typical worktree workflow is: keep your current task in place, do the side task in another worktree, then clean up the extra worktree when the side task is done.** For example, you might leave your feature branch open in the main working directory, create another worktree for a quick bug-fix branch, finish or discard that side task, and then remove the extra worktree so it no longer appears as an active checkout.

**Cleaning up matters because Git keeps track of linked worktrees.** If you simply forget about old worktrees, they can clutter your project directories and keep branches tied to checkouts you no longer use. When a linked worktree has served its purpose, remove that worktree and then handle its branch the same way you would handle any other branch: keep it, merge it, or delete it depending on whether the work is still needed.

{% call show_sidebar("Worktree vs clone") %}
**A worktree is linked to an existing local repository, while a clone is a separate local copy of a repository.** Cloning creates another repository with its own object database, configuration, and remote-tracking state. A worktree is lighter because it reuses the same repository data and adds only another working directory.
{% endcall %}
</div>
<div id="extras">
</div>
