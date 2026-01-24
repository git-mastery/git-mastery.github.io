{% import "common/macros.njk" as m with context %}


<div id="scenario" class="d-none">


The background is same as the scenario in exercise {{ m.show_exercise_link(exercises.push_glossary_branch) }}, repeated below for ease of reference:

><include src="../remoteBranchPush/exercise-glossary-branch-push.md#scenario" />


</div>

<div id="task" class="d-none">

1. You notice that there is a branch `STU` in `origin` that your local repo is aware of, but it doesn't have a local copy of it.
   Create a local copy of the `STU` branch.
1. You notice there is a new branch `VWX` in `origin` that you local repo is not aware of.<br>
   Create a local copy of the `VWX` branch.
1. You notice that the `ABC` branch on the remote `origin` has a new commit that you don't have locally.<br>
   Pull the new commit in the remote's `ABC` branch to your local copy of that branch.
1. the `DEF` branch on the remote has a new commit that you don't have locally. Meanwhile, the local `DEF` branch has a commit that doesn't exist in the remote `origin`.<br>
   Pull the new commits in the remote's `DEF` branch to your local copy of that branch.<br>
   Note: Because the local copy and the remote copy have diverged, this pull should result in an additional merge commit.
</div>

{{ m.show_exercise(m.exercises.glossary_branch_pull, is_panel=0) }}
