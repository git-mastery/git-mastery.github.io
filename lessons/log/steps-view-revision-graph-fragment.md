..{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}
<div id="cli"><!-- ------------------------------------------------------------------- -->

{{ hp_number('1') }} **First, use a simple `git log`** to view the list of commits.

```bash{.no-line-numbers}
git log
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="1[:22],1['HEAD']@pink,1['main']@#e6fff2,7,13"}
commit f761ea63738a... (HEAD -> main)
Author: ... <...@...>
Date:   Sat ...

    Add colours.txt, shapes.txt

commit 2bedace69990...
Author: ... <...@...>
Date:   Sat ...

    Insert figs into fruits.txt

commit d5f91de5f0b5...
Author: ... <...@...>
Date:   Fri ...

    Add fruits.txt
```
Given below the visual representation of the same revision graph. As you can see, the `log` output shows the refs slightly differently, but it is not hard to see what they mean.

{{ show_commit('C3', desc=show_ref('main') + show_head(), msg='Add colours.txt, shapes.txt') }}
{{ show_commit('C2', msg='Insert figs into fruits.txt') }}
{{ show_commit('C1', edge='', msg='Add fruits.txt') }}
<p/>

{% endcall %}

{{ hp_number('2') }} **Use the `--oneline` flag to get a more concise view.** Note how the commit SHA has been truncated to first seven characters (first seven characters of a commit SHA is enough for Git to identify a commit).

```bash{.no-line-numbers}
git log --oneline
```
{% call show_output() %}
```bash{.no-line-numbers}
f761ea6 (HEAD -> main, origin/master) Add colours.txt, shapes.txt
2bedace Insert figs into fruits.txt
d5f91de Add fruits.txt
 ```
{% endcall %}

{{ hp_number('3') }} **The `--graph` flag makes the result closer to a graphical revision graph**. Note the `*` that indicates a node in a revision graph.

```bash{.no-line-numbers}
git log --oneline --graph
```
{% call show_output() %}
```bash{.no-line-numbers}
* f761ea6 (HEAD -> main, origin/master) Add colours.txt, shapes.txt
* 2bedace Insert figs into fruits.txt
* d5f91de Add fruits.txt
```
{% endcall %}
{{ icon_info }} The `--graph` option is more useful when examining a more complicated revision graph consisting of multiple parallel branches.

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

Click the `History` to see the revision graph.

* In some versions of Sourcetree, the `HEAD` ref may not be shown -- it is implied that the `HEAD` ref is pointing to the same commit the currently active branch ref is pointing.

<pic eager src="images/sourcetreeShowSimpleGraph.png" width="600" />
<p/>

</div><!-- ------------------------------------------------------------------- -->
