{% import "common/macros.njk" as m with context %}


<div id="scenario" class="d-none">


**The background** is the same as the scenario in exercise {{ m.show_exercise_link(m.exercises.glossary_branch_push) }}, repeated below for ease of reference:

><include src="../remoteBranchPush/exercise-glossary-branch-push.md#scenario" />

**Now**, you realize there aren't many terms that you can add in the `VWX` branch. You decide it is not worth having that as a separate branch.


</div>

<div id="task" class="d-none">

Delete the `VWX` branch from the local repo and the remote.

</div>

{{ m.show_exercise(m.exercises.glossary_branch_delete, is_panel=0) }}
