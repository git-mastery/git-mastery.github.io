{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_folder_columns, show_git_term, show_detour, show_detour_preview, show_exercise, show_folder_contents, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_multiple_columns, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_two_column_row, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} Can commit using Git</span>

{% set lesson_data = trail.recordingFolderHistory.lessons.commit %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
After staging, **you can save the snapshot by creating a _commit_**.
{% endcall %}

**Saving a snapshot of a repository is called {{ show_git_term('committing') }}, and the saved snapshot itself is called a {{ show_git_term('commit') }}.**

**Git constructs a commit based on the staging area.** When you examine the staging area using a CLI command or a Git GUI, you are typically shown only a list of staged _changes_. This can mislead you into thinking that the staging area merely records changes you have selected for the commit. In reality, the staging area, which Git internally calls **the _index_, is a complete record of the exact version of every tracked file that would be written into the next commit**, not just a record of staged changes. This behavior aligns more closely with the name "index" than the name "staging area".

**A Git commit is therefore a full snapshot of all tracked files.** More precisely, it is a record of the exact state of all files in the staging area at that moment -- even the files that have not changed since the previous commit. This contrasts with the intuitive expectation that a commit stores only the <tooltip content="i.e., the changes made since the last commit">delta</tooltip> since the previous commit. Consequently, a Git commit has all the information it needs to recreate the snapshot of the tracked files in the working directory at that point in time. In addition to the file contents, **a commit also stores metadata such as the author, date, and an optional {{ show_git_term('commit message') }} describing the change**.

Here is an example of how the three internal zones of Git look as a commit is followed by further changes to tracked files.

{% set a %} <!-- ------ start: columns --------------->
(a) Right after creating commit `C1`:

{{ show_folder_contents('folder-right-after-commit-fragment.md', has_commits=1, width=380) }}

The staging area is empty of _changes_ (i.e., nothing to commit), but it still contains a record of all tracked files. Tracked files in the last commit, staging area, and the working directory are identical.
{% endset %}
{% set b %}
(b) `fruits.txt` updated and staged:

{{ show_folder_contents('folder-changes-after-commit-fragment.md', has_commits=1, width=380) }}

The updated version of `fruits.txt` is also in the staging area. There are no changes to `colours.txt` in the working directory or the staging area. We can create a new commit at this point.
{% endset %}
{{ show_multiple_columns([a, '|', b], fill_width=true) }}
<p/>

Given this, **the staging area is not truly "empty" right after a commit; it is only empty of _changes_. It still contains a record of all tracked files**, reflecting exactly the versions that were written into the previous commit.

<box type="important" light>

A Git commit is a snapshot of _all_ tracked files, not simply a delta of _what changed since the last commit_.
</box>

This is a good time to recap the **three internal zones of a Git repo:**
1. <span class="badge bg-info text-light">Working directory</span> The folder on your computer that contains the repo files. This is your workspace for editing files.<br>
   Another name for this zone is {{ show_git_term('working tree') }}.
1. <span class="badge bg-warning text-dark">Staging area</span> (aka the <span class="badge bg-warning text-dark">index</span>) The space that contains a copy of the exact versions of all tracked files (modified and unmodified) that will be written into the next commit. This resides inside the `.git` folder.
1. <span class="badge bg-success text-light">Committed history</span> Stores the commits and other metadata related to the revision history of the project. This also resides inside the `.git` folder.

<box type="info" seamless>

**Which area is the 'repository', exactly?**{.text-info}
{% call show_two_column_row("images/repoArea.png", border=0) %}
The term 'repository' generally refers to the disk area of the `.git` folder. However, it can sometimes also mean the 'committed history' area (which resides inside the `.git` folder` or even the entire project folder depending on the context.

{% endcall %}
</box>

**Most Git operations are for transferring some information from one Git internal zone to another.** For example, staging a file copies its current version from the working directory to the staging area, and committing saves the staged versions of all tracked files from the staging area to the commit history.

<mermaid>
%%{init: {'sequence': {'mirrorActors': false}}}%%
sequenceDiagram
    participant WD as 📁 Working Directory
    participant SA as 📋 Staging Area
    participant CH@{ "type": "database" } as Committed History

    rect rgb(235, 245, 255)
    Note over WD,SA: Staging a file
    WD->>SA: copy current version of the file
    end

    rect rgb(235, 255, 235)
    Note over SA,CH: Committing
    SA->>CH: save staged versions of all tracked files
    end
</mermaid>

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
{{ show_detour('unstagingChanges') }}
{{ show_detour_preview('updateLastCommit') }}
{{ show_detour_preview('resetUncommitedChanges') }}
{{ show_detour_preview('undoRecentCommits') }}
</div>
