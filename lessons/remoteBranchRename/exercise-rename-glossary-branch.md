{% import "common/macros.njk" as m with context %}


<div id="scenario" class="d-none">


**The background** is same as the scenario in exercise {{ m.show_exercise_link(exercises.push_glossary_branch) }}, repeated below for ease of reference:

><include src="../remoteBranchPush/exercise-push-glossary-branch.md#scenario" />

**Now**, you realise there aren't many terms that you can add in the `VWX`. You decide it is not worth to have that as a separate branch.


</div>

<div id="task" class="d-none">

Delete the `VWX` branch from the local repo and the remote.

</div>

{{ m.show_exercise(m.exercises.delete_glossary_branch, is_panel=0) }}
