{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}
<div id="cli"><!-- ---------------------------------------------------- -->

Use the command `git init` which should initialise the repo.

```bash {.no-line-numbers}
git init
```
{% call show_output() %}
```{.no-line-numbers highlight-lines="1['.git']"}
Initialized empty Git repository in <path-to-repo>/things/.git/
```
{% endcall %}

{{ icon_info }} Note how the output mentions the repo being created in `things/.git/` (not `things/`). More on that later.

</div>
<div id="sourcetree-windows"><!-- ---------------------------------------------------- -->

Click `File` → `Clone/New…` → Click on `+ Create` button on the top menu bar.<br>
  <pic eager src="{{baseUrl}}/lessons/init/images/sourcetree_1.png" height="220" /><br>
  Enter the location of the directory and click `Create`. {icon="fab-windows"}
</div>
<div id="sourcetree-mac"><!-- ---------------------------------------------------- -->

 1. `File` → `New...` to open the dialog for creating a new repo.
 1. In that dialog, click on the `New...` dropdown and choose `Create Local Repository` (or `Create New Repository`).<br>
    <pic src="images/sourcetreeRepoCreationDialog.png" />
 1. Click `...` button to select the folder location for the repository. After selecting the folder location, click the `Create` button.<br>
    <pic src="images/sourcetreeChooseFolder.png" />
</div>