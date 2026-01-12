{% import "common/macros.njk" as m with context %}


<div id="scenario" class="d-none">


The background is same as the scenario in exercise {{ m.show_exercise_link(exercises.push_glossary_branch) }}, repeated below for ease of reference:

><include src="../remoteBranchPush/exercise-push-glossary-branch.md#scenario" />

Now, you notice that,
* the `ABC` branch on the remote `origin` has a new commit that you don't have locally.
* the `DEF` branch on the remote has a new commit that you don't have locally.<br>
  Meanwhile, the local `DEF` branch has a commit that doesn't exist in the remote `origin`.

</div>

<div id="task" class="d-none">

1. Pull the remote `ABC` branch to your local repo.
1. Pull the remote `DEF` branch so that the missing commit appears in the local `DEF` branch.<br>
   Then,push the updated `DEF` branch back to the remote so that both repos now have the same version of the `DEF` branch.

</div>

{{ m.show_exercise(m.exercises.pull_glossary_branches, is_panel=0) }}
