{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_exercise_link, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

You are writing user documentation for a product. You have already written documentation for a few new features, each in a separate branch. You wish to accumulate this work in a separate branch called `development` until the next product release.

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
</mermaid>
</div>

<div id="task" class="d-none">

1. Create a new branch `development`, starting from the commit tagged `v1.0`
2. Merge the `feature-search` branch onto the `development` branch, without using fast-forwarding (i.e., create a merge commit). Delete the `feature-search` branch.
3. Similarly, merge the `feature-delete` branch onto the `development` branch. Resolve any merge conflicts -- in the `features.md`, the delete feature should appear after the search feature (see below). Delete the `feature-delete` branch.
   ```markdown { heading="features.md" }
   # Features

   ## Create Book

   Allows creating one book at a time.

   ## Searching for Books

   Allows searching for books by keywords.
   Works only for book titles.

   ## Deleting Books

   Allows deleting books.
   ```
5. The `list` branch is not yet ready to be merged but rename it as `feature-list`, to be consistent with the naming convention you have been following in this repo.

**Expected final result:**

<mermaid>

gitGraph BT:
  commit id: "Add features.md"
  commit id: "Mention feature for creating books" tag: "v10"
  branch deleted-feature-search
  branch deleted-feature-delete
  branch feature-list
  branch development
  checkout deleted-feature-delete
  commit id: "Mention feature for deleting books"
  checkout deleted-feature-search
  commit id: "Mention feature for searching books"
  checkout deleted-feature-delete
  commit id: "Add missing period"
  checkout main
  commit id: "Fix phrasing of heading"
  checkout deleted-feature-search
  commit id: "Add more details on the search feature"
  checkout feature-list
  commit id: "Add partial docs for listing books"
  checkout development
  merge deleted-feature-search
  merge deleted-feature-delete
</mermaid>


</div>

{{ show_exercise(exercises.mix_messy_docs, is_panel=0) }}

