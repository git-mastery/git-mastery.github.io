{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_detour, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<div id="preview">

 **Git allows you to amend the most recent commit.** This is useful when you realize you need to change something, such as fixing a typo in the commit message or excluding an unintended change from the commit.
</div>

**++Updating the commit message++**

{% set cli %} <!-- ------ start: Git Tabs --------------->

**To change the commit message subject only**, use the `git commit --amend -m "<new commit message>"` command.

```bash{.no-line-numbers}
git commit --amend -m "Fix bug that froze the GUI"
```

**To change the entire commit message** (not just the subject), run the `git commit --amend` command, which will open the text editor for you to edit the commit message. The commit will be updated when you close the text editor.
{% endset %}
{% set sourcetree %}

Click the `Commit` button in the top menu. In the commit-message area, use one of the two methods below to enter 'Amend last commit' mode.<br>
<pic src="images/sourcetreeAmendLastCommit.png" />
<p/>

Sourcetree will populate the text box with the previous commit message. Edit it as needed, and click the `Commit` button to update the commit.
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

**++Updating changes in the commit++**

One reliable method is to perform a 'soft reset' of the last commit, update the staging area as needed, and commit again.

<box type="warning" seamless>

**'Updating' a commit does not really update that commit; instead, it creates a new commit** with the new data. The original commit remains and is 'left behind' in the repo, and will be garbage-collected after a while if it is not referenced by anything else.
</box>