{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}
<div id="cli"><!-- ------------------------------------------------------------------- -->

{{ hp_number('1') }} **First, let us do a sanity check** using the `git status` command, to confirm there are staged files.

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers}
On branch master

No commits yet

Changes to be committed:
(use "git rm --cached <file>..." to unstage)
  new file:   fruits.txt
```
{% endcall %}

{{ hp_number('2') }} **Now, create a commit** using the `commit` command. The `-m` switch is used to specify the commit message.

```bash{.no-line-numbers}
git commit -m "Add fruits.txt"
```
{% call show_output() %}
```bash{.no-line-numbers}
[master (root-commit) d5f91de] Add fruits.txt
 1 file changed, 5 insertions(+)
 create mode 100644 fruits.txt
 ```
{% endcall %}

{{ hp_number('3') }} **Verify the staging area is empty** using the `git status` command again.

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers}
On branch master
nothing to commit, working tree clean
```
{% endcall %}
{{ icon_info }} Note how the output says `nothing to commit` which means the staging area is now empty.
</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

{{ hp_number('1') }} Ensure the new file `fruits.txt` has been staged.

<annotate src="{{baseUrl}}/lessons/commit/images/sourcetree_4.png" width="600">
  <a-point x="24%" y="20%">
    <div style="width: 233px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
  </a-point>
</annotate>

{{ hp_number('2') }} Click the `Commit` button at the top of the window.

<annotate src="{{baseUrl}}/lessons/commit/images/sourcetree_4.png" width="600">
<a-point x="5%" y="2%">
<div style="width: 45px; height: 45px; border: 2px solid red; margin: 20px auto;"></div>
</a-point>
</annotate>

{{ hp_number('3') }} Enter a commit message (e.g. `add fruits.txt`) into the text box.

<annotate src="{{baseUrl}}/lessons/commit/images/sourcetree_4.png" width="600">
<a-point x="24%" y="70%">
<div style="width: 462px; height: 72px; border: 2px solid red; margin: 20px auto;"></div>
</a-point>
</annotate>

{{ hp_number('4') }} Click `Commit`.

<annotate src="{{baseUrl}}/lessons/commit/images/sourcetree_4.png" width="600">
<a-point x="89%" y="90%">
<div style="width: 72px; height: 25px; border: 2px solid red; margin: 20px auto;"></div>
</a-point>
</annotate>

<p/>
</div><!-- ------------------------------------------------------------------- -->
