{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}
<div id="cli"><!-- ------------------------------------------------------------------- -->

Here is an example list of bash commands to add two commits while observing the list of commits after each commit.

```bash
echo "figs" >> fruits.txt  # add another line to fruits.txt
git add fruits.txt  # stage the updated file
git commit -m "Insert figs into fruits.txt"  # commit the changes
git log  # check commits list

echo "a file for colours" >> colours.txt  # add a colours.txt file
echo "a file for shapes" >> shapes.txt  # add a shapes.txt file
git add colours.txt shapes.txt  # stage both files in one go
git commit -m "Add colours.txt, shapes.txt"  # commit the changes
git log  # check commits list
```
<box type="tip" seamless>

**You can copy-paste a list of commands** (such as commands given above), including any comments, to the terminal. After that, hit <kbd>enter</kbd> to run them in sequence.
</box>


The output of the final `git log` should be something like this:
```bash{highlight-lines="5,11,17"}
commit ... (HEAD -> master)
Author: ... <...@...>
Date:   ...

    Add colours.txt, shapes.txt

commit ...
Author: ... <...@...>
Date:   ...

    Insert figs into fruits.txt

commit ...
Author: ... <...@...>
Date:   ...

    Add fruits.txt
```

<include src="less-pager-fragment.md" />

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

To see the list of commits, click on the `History` item (listed under the `WORKSPACE` section) on the menu on the right edge of Sourcetree.

<pic eager src="{{baseUrl}}/lessons/log/images/sourcetree_8.png" />

After adding two more commits, the list of commits should look something like this:

<pic eager src="{{baseUrl}}/lessons/log/images/sourcetree_7.png" height="150" />
<p/>
</div><!-- ------------------------------------------------------------------- -->
