{% import "common/macros.njk" as m with context %}

1. Ensure you are in the <popover content="If you merged branch `foo` onto branch `bar`, branch `bar` is the _destination branch_">destination branch of the merge</popover>.
1. Hard-reset that branch to its <tooltip content="i.e., the commit that would have been its tip without the unwanted merge">pre-merge tip</tooltip>, rewinding the branch to its pre-merge state.

----{.dashed .border-warning}

{{ icon_example }} In the example below, you merged `main` into `feature1`.

<annotate src="{{baseUrl}}/lessons/merge/images/sourcetreeAfterMeringMaster.png" width="500" >
{{ m.annotation_label(21, 15, "#r# **merge commit**##") }}
<a-point x="7%" y="58%" color="yellow" size="20" opacity="0.4" content="Do a hard reset to this commit"/>
{{ m.annotation_label(13, 64, "#r#← **do a hard reset to this commit**##") }}
</annotate>

If you want to undo that merge,

1. Ensure you are in the `feature1` branch (because that's the destination branch).
1. Reset `feature1` to the commit that was its tip just before you merged `main` into it.

<box type="warning" seamless>

Use this reset-based undo only for local/unshared merges; **if the merge has been pushed/shared, prefer [reverting](../revert)** to avoid rewriting shared history.
</box>

{{ m.show_exercise(m.exercises.merge_undo) }}
{{ m.show_exercise(m.exercises.ff_undo) }}
