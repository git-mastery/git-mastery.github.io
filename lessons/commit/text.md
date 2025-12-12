{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} can commit using git</span>

<span id="title">{{ trail.recordingFolderHistory.lessons.commit.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
After staging, you can now proceed to **save the snapshot, aka creating a _commit_**.
{% endcall %}

**Saving a snapshot is called {{ show_git_term('committing') }} and a saved snapshot is called a {{ show_git_term('commit') }}.**

**A Git commit is a full snapshot of your working directory based on the files you have staged**, more precisely, a record of the exact state of all files in the staging area (aka _index_) at that moment -- even the files that have not changed since the last commit. This is in contrast to the intuitive expectation that only the <tooltip content="i.e., the changes made since the last commit">delta</tooltip> is stored in a commit. Consequently, a Git commit has all the information it needs to recreate the snapshot of the working directory at the time the commit was created.<br>
**A commit also includes metadata** such as the author, date, and an optional {{ show_git_term('commit message') }} describing the change.

<box type="important" light>

A Git commit is a snapshot of _all_ tracked files, not simply a delta of _what changed since the last commit_.
</box>

{% call show_hands_on_practical("Creating your first commit") %}

{{ hp_number(hop_target) }} To create a commit based on staged changes.

{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-first-commit', is_continue=1) }}

{{ show_steps_tabs('commit') }}

{% endcall %}

</div>

<div id="extras">
{{ show_exercise(exercises.grocery_shopping) }}
{{ show_detour('stagingFileDeletions') }}
{{ show_detour_preview('updateLastCommit') }}
{{ show_detour_preview('resetUncommitedChanges') }}
{{ show_detour_preview('undoRecentCommits') }}
</div>
