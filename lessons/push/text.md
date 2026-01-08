{% from "common/macros.njk" import trail, ask_chatgpt, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can push to a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.push.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
The third step of backing up a local repo on GitHub: **push a copy of the local repo to the remote repo**.

{% endcall %}

**You can {{ show_git_term('push') }} content of one repository to another**, usually from your local repo to a remote repo. Pushing transfers recorded Git history (such as past commits), but it does not transfer unstaged changes or untracked files.

* **To push, you need to have <tooltip content="permission to update contents on the remote">write-access</tooltip> to the remote repo**.
* **Pushing is performed one branch at a time**; you must specify which branch you want to push.

**You can configure Git to {{ show_git_term("track") }} a pairing between a local branch and a remote branch**, so in future you can push from the same local branch to the corresponding remote branch without needing to specify them again. For example, you can set your local `main` branch to _track_ the `main` branch on the remote repo `origin` i.e., local `main` branch will track the <tooltip content="'upstream' is commonly used to refer to the remote repo connected to a local repo">upstream</tooltip> branch `origin/main`.

{{ show_commit('C3', desc=show_ref('main') + show_head() + show_ref('origin/main')) }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

In the revision graph above, you see a new type of ref ({{ show_ref('origin/main') }}). This is a {{ show_git_term("remote-tracking branch") }} **ref that represents the state of a corresponding branch in a remote repository** (if you previously set up the branch to 'track' a remote branch). In this example, the `main` branch in the remote `origin` is also at the commit `C3` (which means you have not created new commits after you pushed to the remote).

If you now create a new commit `C4`, the state of the revision graph will be as follows:

{{ show_commit('#y#C4##', desc=show_ref('main')  + show_head(), style="primary") }}
{{ show_commit('C3', desc= show_ref('origin/main')) }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

Explanation: When you create `C4`, the current branch `main` moves to `C4`, and `HEAD` moves along with it. However, the `main` branch in the remote `origin` remains at `C3` (because you have not pushed `C4` yet). That is, the remote-tracking branch `origin/main` is _one commit {{ show_git_term("behind") }}_ the local branch `main` (or, the local branch is _one commit {{ show_git_term("ahead") }}_). The `origin/main` ref will move to `C4` only after you push your local branch to the remote again.

{% call show_hands_on_practical('Pushing a local repo to an empty remote repo')  %}

{{ hp_number(hop_target) }} Upload (i.e., push) the revision history from a local repo to a remote repo.

{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-populate-remote', is_continue=1, sandbox_info='the `things` local repo and the `gitmastery-things` remote repo') }}


{{ hp_number("1") }} **Push the `main` branch** to the remote. **Also instruct Git to track this branch pair**.

{{ show_steps_tabs('push-to-empty-remote') }}

{{ hp_number("2") }} **Observe the remote-tracking branch** `origin/main` is now pointing at the same commit as the `main` branch.

{{ show_steps_tabs('after-pushing-to-empty-remote') }}

{% endcall %}

**The push command can be used repeatedly to send further updates to another repo** e.g., to update the remote with commits you created since you pushed the first time.

{% call show_hands_on_practical('Pushing to send further updates to a repo')  %}

{{ hp_number(hop_target) }} Add a commit to the same local repo, and push it to the remote repo.

{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-update-remote', is_continue=1, sandbox_info='the `things` local repo and the `gitmastery-things` remote repo') }}


{{ hp_number ('1') }} **Commit** some changes in your local repo. Example:

```bash
echo "Elderberries" >> fruits.txt
git commit -am "Update fruits list"
```
<box type="info" seamless>

**`-am` is a shorthand for `-a -m`**. The `-a` option stages any changes to tracked files, and `-m` is for specifying the commit message. <span class="d-print-none"> See {{ ask_chatgpt("here", "I'm new to Git. Explain what the `git commit -am \"Update fruits list\"` commad does. Elaborate how combining of options work in general.") }} for a longer explanation.</span>
</box>

{{ show_steps_tabs('commit-changes') }}

{{ hp_number ('2') }} **Push** the new commits to your fork on GitHub.

{{ show_steps_tabs('subsequent-push') }}

{% endcall %}


**Note that you can push between two repos only if those repos have a shared history** among them (i.e., one should have been created by copying the other).

</div>

<div id="extras">
{{ show_exercise(exercises.push_over) }}
{{ show_detour('pushToMultipleRepos') }}
</div>
