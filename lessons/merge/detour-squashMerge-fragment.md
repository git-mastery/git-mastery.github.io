{% import "common/macros.njk" as m with context %}

To do a squash merge, you can use the `--squash` switch. It will prepare the squashed commit (i.e., a regular commit containing the squashed changes) but will stop short of actually finalizing the commit.

```bash
git merge --squash feature-1
```
{% call m.show_output() %}
```bash
Squash commit -- not updating HEAD
Automatic merge went well; stopped before committing as requested
```
{% endcall %}

 At that point, make the commit yourself with the commit message you want.

{{ m.show_exercise(m.exercises.merge_squash) }}
