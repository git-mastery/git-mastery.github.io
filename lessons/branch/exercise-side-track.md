{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="task" class="d-none">

While you are working on a small Python project in the `branch-me` repo, you discovered two bugs. You wish to fix them in a separate branch named `bug-fix`, as two separate commits.

The steps to follow are given below:

<box type="info" seamless>

This repo uses `main` (not `master`) as the default branch.
</box>

1. **Create a branch** named `bug-fix`.<br>
   **Switch to that branch**.
1. **Update the `greet.py`** file so that the `greet` function uses the `name` variable in the output, as follows:
   ```diff
   -    print("Hi Alice")
   +    print(f"Hi {name}")
   ```
   **Commit the changes.**
1. **Update the `calculator.py` file** such that the `add` function returns the sum of two numbers, as follows:
   ```diff
    def add(a, b):
   -    return a - b
   +    return a + b
   ```
   **Commit the changes.**
1. **Switch back to the `main` branch.**

The final result should be something like this:
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "[HEAD → main] ..."
    branch bug-fix
    commit id: "Fix greet.py"
    commit id: "[feature] Fix calculator.py"
    checkout main
</mermaid>

</div>

{{ show_exercise(exercises.side_track, is_panel=0) }}
