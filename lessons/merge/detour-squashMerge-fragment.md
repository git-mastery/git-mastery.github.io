{% import "common/macros.njk" as m with context %}

To do a squash merge, use the `--squash` switch. It prepares a regular commit with the squashed changes, but stops before finalizing it.

```bash
git merge --squash feature-1
```
{% call m.show_output() %}
```bash
Squash commit -- not updating HEAD
Automatic merge went well; stopped before committing as requested
```
{% endcall %}

Then make the commit yourself with your chosen commit message.

{{ m.show_exercise(m.exercises.merge_squash) }}
