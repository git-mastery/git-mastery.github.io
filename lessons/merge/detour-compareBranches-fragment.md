{% import "common/macros.njk" as m with context %}

<div id="preview">

**Comparing branches in Git shows how two lines of development differ. For example, before merging a branch**, review the changes it would introduce to the main branch.
</div>

Two common ways to compare branches:

* **Double-dot notation** `git diff branchA..branchB` compares the latest snapshots of the two branches (`branchA` vs `branchB`). This is the more common notation.
* **Triple-dot notation** `git diff branchA...branchB` shows the changes introduced in `branchB` since it diverged from `branchA`. Git compares the two branches' *merge base* with the tip of `branchB`.

{% call m.show_resources() %}

* [**Notation used to refer to commits/branches**, from git-scm.com](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection)
{% endcall %}

{{ m.show_exercise(m.exercises.branch_compare) }}
