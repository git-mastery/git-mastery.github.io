{% import "common/macros.njk" as m with context %}

<div id="preview">

**Comparing branches in Git is useful when you want to understand how two lines of development differ — for example, before merging a branch**, you might want to review what changes it introduces to the main branch.
</div>

Here are two ways to compare two branches:

* **Double-dot notation** `git diff branchA..branchB` shows the difference between the latest snapshots of the two branches (i.e., the state of `branchA` vs the state of `branchB`). This is the notation used more commonly.
* **Triple-dot notation** `git diff branchA...branchB` shows the changes introduced in `branchB` since it diverged from `branchA`. Internally, Git finds the *merge base* of the two branches and compares that
  commit with the tip of `branchB`.

{% call m.show_resources() %}

* [**Notations used for referring commits/branches**, from git-scm.com](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection)
{% endcall %}

{{ m.show_exercise(m.exercises.branch_compare) }}
