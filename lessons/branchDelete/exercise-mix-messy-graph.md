{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You are writing user documentation for a product. You have already written documentation for a few new features, each in a separate branch. You have merged the `feature-search` branch.

<mermaid>

gitGraph BT:
  commit id: "Add features.md"
  commit id: "Mention feature for creating books" tag: "v10"
  branch feature-search
  branch feature-delete
  branch list
  checkout feature-delete
  commit id: "Mention feature for deleting books"
  checkout feature-search
  commit id: "Mention feature for searching books"
  checkout feature-delete
  commit id: "Add missing period"
  checkout main
  commit id: "Fix phrasing of heading"
  checkout feature-search
  commit id: "Add more details on the search feature"
  checkout list
  commit id: "Add partial docs for listing books"
  checkout main
  merge feature-search id: "Merge search feature"
</mermaid>

At this point, you realise this way of merging can result in a complicated revision graph. Instead, you wish to merge these changes in a way that results in a simple linear revision graph.
</div>

<div id="task" class="d-none">

1. Undo the merging of `feature-search`.
2. Squash-merge the `feature-search` branch onto the `main` branch with the commit message `Add the search feature`. Delete the `feature-search` branch.
3. Similarly, squash-merge and delete the `feature-delete` branch with the commit message `Add the delete feature`, while resolving any merge conflicts -- in the `features.md`, the delete feature should appear after the search feature (expected content given below):

   ```markdown { heading="features.md" }
   # Features

   ## Creating Books

   Allows creating one book at a time.

   ## Searching for Books

   Allows searching for books by keywords.
   Works only for book titles.

   ## Deleting Books

   Allows deleting books.
   ```
4. The `list` branch is not needed, as you have decided not to have that feature. Delete that branch.
The resulting revision graph should be as follows:

<mermaid>

gitGraph BT:
  commit id: "Add features.md"
  commit id: "Mention feature for creating books" tag: "v10"
  commit id: "Fix phrasing of heading"
  commit id: "Add the search feature"
  commit id: "Add the delete feature"
</mermaid>

</div>

{{ show_exercise(exercises.mix_messy_graph, is_panel=0) }}

