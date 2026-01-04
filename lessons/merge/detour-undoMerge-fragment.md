{% import "common/macros.njk" as m with context %}

1. Ensure you are in the <popover content="If you merged branch `foo` onto branch `bar`, branch `bar` is the _destination branch_">destination branch of the merge</popover>.
1. Do a hard reset of that branch to the commit that would be the tip of that branch had you not done the offending merge i.e., rewind that branch to the state it was in before the merge.

----{.dashed .border-warning}

{{ icon_example }} In the example below, you merged `main` to `feature1`.

<annotate src="{{baseUrl}}/lessons/merge/images/sourcetreeAfterMeringMaster.png" width="500" >
{{ m.annotation_label(21, 15, "#r# **merge commit**##") }}
<a-point x="7%" y="58%" color="yellow" size="20" opacity="0.4" content="Do a hard reset to this commit"/>
{{ m.annotation_label(13, 64, "#r#← **do a hard reset to this commit**##") }}
</annotate>

If you want to undo that merge,

1. Ensure you are in the `feature1` branch (because that's the destination branch).
1. Reset the `feature1` branch to the commit that was the tip of the `feature1` branch just before you merged the `main` branch to it.

{{ m.show_exercise(m.exercises.merge_undo) }}
{{ m.show_exercise(m.exercises.ff_undo) }}
