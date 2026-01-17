{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}
<div id="cli"><!-- ------------------------------------------------------------------- -->

Navigate into the repo folder and run the `git log` command to see the commit history.

```bash{.no-line-numbers}
cd hp-list-commits/things
git log
```
{% call show_output() %}
```bash{.no-line-numbers}
commit ... (HEAD -> main)
Author: ... <...@...>
Date:   ...

Add fruits.txt
```
{% endcall %}

<box type="tip" seamless>

Use the <kbd>Q</kbd> key to exit the output screen of the `git log` command.
</box>

{{ icon_info }} Note how the output has some details about the commit you just created. You can ignore most of it for now, but notice it also shows the commit message you provided.

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

Expand the `BRANCHES` menu and click on the `main` to view the history graph, which contains only one node at the moment, representing the commit you just added. For now, ignore the label `main` attached to the commit.

<pic eager src="{{baseUrl}}/lessons/log/images/sourcetree_5.png" height="180" />
<p/>
</div><!-- ------------------------------------------------------------------- -->
