{% from "common/macros.njk" import trail, show_git_term, show_lesson_intro, show_sidebar with context %}

<span id="prereqs"></span>
<span id="outcomes">Can explain how Git worktrees allow multiple working folders for one local repository.</span>
{% set lesson_data = trail.branchingLocally.lessons.worktrees %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
**Git worktrees let one local repository have multiple working folders at the same time.**
{% endcall %}

Normally, **a local repository has one main {{ show_git_term("working tree") }} checked out at a time**. When you switch branches, Git updates the files in that working tree so that they match the branch you switched to. That is usually enough, but it can be inconvenient when your current files contain unfinished work.

**A worktree is an additional working folder connected to the same Git repository.** Instead of replacing the files in your current folder when you want to inspect or work on another branch, you can create another folder for that other branch. Each folder looks and feels like a separate checkout, but they are still connected to the same underlying repository.

**Each worktree has its own working directory, staging area, and current `HEAD`.** That means one worktree can be on `main` while another worktree is on a feature branch. Changes made in one worktree do not appear as uncommitted changes in the other worktree, because each worktree has its own set of checked-out files.

**The worktrees still share the same revision history and branch references.** A commit created in one worktree becomes part of the same local repository history and can be seen from the other worktrees too. A worktree is therefore not a separate clone of the project; it is another view of the same local repo.

**Worktrees are useful when switching branches would interrupt your current task.** For example, you might keep unfinished feature work in one folder while using another folder to review a teammate's branch, investigate a bug, or make a quick fix. This avoids mixing unrelated uncommitted changes in the same working folder.

**Git generally keeps one branch checked out in only one worktree at a time.** This prevents two folders from trying to move the same branch ref independently. In practice, you usually give each active worktree its own branch, or use a worktree temporarily to inspect a specific point in history.

{% call show_sidebar("Worktree vs clone") %}
**A worktree is linked to an existing local repository, while a clone is a separate local copy of a repository.** Cloning creates another repository with its own object database, configuration, and remote-tracking state. A worktree is lighter because it reuses the same repository data and adds only another working folder.
{% endcall %}
</div>
<div id="extras">
</div>
