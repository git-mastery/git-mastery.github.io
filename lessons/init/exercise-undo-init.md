{% import "common/macros.njk" as m with context %}


<div id="scenario" class="d-none">

You initialised a git repository in the `my-notes` folder by mistake.
</div>

<div id="task" class="d-none">

Undo the repo initialisation, without deleting any of the original files that were in that folder.
</div>

{{ m.show_exercise(m.exercises.undo_init, is_panel=0) }}
