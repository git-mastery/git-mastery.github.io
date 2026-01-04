{% import "common/macros.njk" as m with context %}

To do a squash merge, you can use the `--squash` switch. It will prepare the squashed merge commit but will stop short of actually finalising the commit.

```bash
git merge --squash feature-1
```
{% call m.show_output() %}
```bash
Squash commit -- not updating HEAD
Automatic merge went well; stopped before committing as requested
```
{% endcall %}

 At that point, you can go ahead and make the commit yourself, with the commit message you want.

{{ m.show_exercise(m.exercises.merge_squash) }}
