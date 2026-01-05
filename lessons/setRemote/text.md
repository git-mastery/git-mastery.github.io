{% from "common/macros.njk" import trail, bold_number, button_green, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can link a local repo with a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.setRemote.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
The second step of backing up a local repo on GitHub: **link the _local_ repo with the _remote_ repo** on GitHub.
{% endcall %}

**A Git {{ show_git_term('remote') }} is a reference to a repository hosted elsewhere**, usually on a server like GitHub, GitLab, or Bitbucket. It allows your local Git repo to communicate with another remote copy — for example, to upload locally-created commits that are missing in the remote copy.

**By _adding a remote_, you are informing the local repo details of a remote repo it can communicate with**, for example, where the repo exists and what name to use to refer to the remote.

**The URL you use to connect to a remote repo depends on the protocol — HTTPS or SSH**:

* **HTTPS URLs use the standard web protocol** and start with `https://github.com/` (for GitHub users). e.g.,
  ```{highlight-lines="1['.git']@yellow"}
  https://github.com/username/repo-name.git
  ```
* **SSH URLs use the secure shell protocol** and start with `git@github.com:`. e.g.,
  ```{highlight-lines="1['.git']@yellow"}
  git@github.com:username/repo-name.git
  ```

**A Git repo can have multiple remotes.** You simply need to specify different names for each remote (e.g., `upstream`, `central`, `production`, `other-backup` ...).

{% call show_hands_on_practical('Add a remote to a repo')  %}

{{ hp_number(hop_target) }} Add the empty remote repo you created on GitHub as a remote of a local repo you have.

{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-add-remote', is_continue=1, sandbox_info='the `things` local repo') }}

{{ show_steps_tabs('set-remote') }}

{{ hp_number('5') }} **Add another _remote_**, to verify that a repo can have multiple remotes. You can use any name (e.g., `backup` and any made-up `<owner>/<remote-repo>` for this).
{% endcall %}

<box type="tip" seamless class="d-print-none">

**To find the URL of a repo on GitHub**, you can click on the {{ button_green(':fas-angle-left::fas-angle-right: Code :fas-caret-down:') }} button:

<pic src="images/githubFindUrl.png" />
</box>

</div>

<div id="extras">
{{ show_exercise(exercises.link_me) }}
{{ show_detour('managingRemotes') }}
</div>
