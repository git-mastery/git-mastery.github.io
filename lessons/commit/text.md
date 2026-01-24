{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_folder_contents, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} can commit using git</span>

<span id="title">{{ trail.recordingFolderHistory.lessons.commit.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
After staging, you can now proceed to **save the snapshot, aka creating a _commit_**.
{% endcall %}

**Saving a snapshot of a repository is called {{ show_git_term('committing') }}, and the saved snapshot itself is called a {{ show_git_term('commit') }}.**

**Git constructs a commit based on the staging area.** When you examine the staging area using a CLI command or a Git GUI, you are typically shown only a list of staged _changes_. This presentation can give the misleading impression that the staging area is merely a record of changes you have selected to include in the commit. In reality, the staging area which Git internally calls **the _index_, is a complete record of the exact version of every tracked file that would be written into the next commit**, not just a record of staged changes. This behaviour aligns more closely with the name "index" than the name "staging area".

**A Git commit is therefore a full snapshot of all tracked files.** More precisely, a record of the exact state of all files in the staging area at that moment -- even the files that have not changed since the previous commit. This contrasts with to the intuitive expectation that only the <tooltip content="i.e., the changes made since the last commit">delta</tooltip> is stored in a commit. Consequently, a Git commit has all the information it needs to recreate the snapshot of the tracked files in working directory at that point in time. In addition to the file contents, **a commit also stores metadata such as the author, date, and an optional {{ show_git_term('commit message') }} describing the change**.

{{ show_folder_contents('folder-commit-location-fragment.md', has_metadata=1, width=380) }}
<p/>

 Following from this, **the state of the staging area is not "empty" right after a commit. Rather, it is empty of _changes_**. It still contains a record of all tracked files, reflecting exactly the versions that were written into the previous commit.

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
