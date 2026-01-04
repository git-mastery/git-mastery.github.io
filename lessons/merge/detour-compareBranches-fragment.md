{% import "common/macros.njk" as m with context %}

<div id="preview">

**Comparing branches in Git is useful when you want to understand how two lines of development differ — for example, before merging a branch**, you might want to review what changes it introduces to the main branch.
</div>

Here are two ways to compare two branches:

* **Double-dot notation** `git diff branchA..branchB`: Changes based on commits in `branchB` but not in `branchA`. This is the one used more commonly.
* **Triple-dot notation** `git diff branchA...branchB`: This shows changes in all the commits that are reachable by either of two references but not by both of them.<br>
  i.e., commits unique to `branchA` or `branchB`.

{% call m.show_resources() %}

* [**Notations used for referring commits/branches**, from git-scm.com](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection)
{% endcall %}

{{ m.show_exercise(m.exercises.branch_compare) }}
