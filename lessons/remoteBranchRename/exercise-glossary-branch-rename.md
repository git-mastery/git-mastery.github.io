{% import "common/macros.njk" as m with context %}


<div id="scenario" class="d-none">


**The background** is the same as the scenario in exercise {{ m.show_exercise_link(m.exercises.glossary_branch_push) }}, repeated below for ease of reference:

><include src="../remoteBranchPush/exercise-glossary-branch-push.md#scenario" />

**Now**, you would like the `STU` branch to cover terms starting with letters S through Z (not just S, T, U).

</div>

<div id="task" class="d-none">

Rename the `STU` branch as `S-to-Z`, in the local repo and in the the remote repo.

</div>

{{ m.show_exercise(m.exercises.glossary_branch_rename, is_panel=0) }}
