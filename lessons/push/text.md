{% from "common/macros.njk" import trail, ask_chatgpt, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_fine_print, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can push to a remote repo</span>

{% set lesson_data = trail.backingUpOnCloud.lessons.push %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
The third step of backing up a local repo on GitHub: **push local commits to a branch in the remote repo**.

{% endcall %}

**You can {{ show_git_term('push') }} recorded Git history from one repository to another**, usually from your local repo to a remote repo. Pushing sends commits and updates a branch in the remote repo, but it does not transfer unstaged changes or untracked files.

* **To push, you need to have <tooltip content="permission to update contents on the remote">write access</tooltip> to the remote repo**.
* **Pushing is performed one branch at a time**; you must specify which branch you want to push.

**You can configure Git to remember which remote branch a local branch should push to by default**, so later you can push from the same local branch without specifying the destination again. For example, you can set your local `main` branch to use the `main` branch on the remote repo `origin` as its corresponding branch. In the revision graph below, **the ref {{ show_ref('origin/main') }} is a {{ show_git_term("remote-tracking branch") }} that represents Git's latest known state of a corresponding branch in a remote repository**. More precisely, a remote-tracking branch records the state of the corresponding remote branch _at the time Git last updated that information_, such as after a successful push.

{{ show_commit('C3', desc=show_ref('main') + show_head() + show_ref('origin/main')) }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

 In this example, the `main` branch in the remote `origin` is also at the commit `C3` (which means you have not created new commits after you pushed to the remote).

If you now create a new commit `C4`, the state of the revision graph will be as follows:

{{ show_commit('#y#C4##', desc=show_ref('main')  + show_head(), style="primary") }}
{{ show_commit('C3', desc= show_ref('origin/main')) }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

Explanation: When you create `C4`, the current branch `main` moves to `C4`, and `HEAD` moves along with it. However, the `main` branch in the remote `origin` remains at `C3` (because you have not pushed `C4` yet). That is, the remote-tracking branch `origin/main` is _one commit {{ show_git_term("behind") }}_ the local branch `main` (or, the local branch is _one commit {{ show_git_term("ahead") }}_). The `origin/main` ref will move to `C4` only after you push your local branch to the remote again.

{% call show_hands_on_practical('Pushing a local repo to an empty remote repo')  %}

{{ hp_number(hop_target) }} Upload (i.e., push) the commits from a local branch to a branch in a remote repo.

{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-populate-remote', is_continue=1, sandbox_info='the `things` local repo and the `gitmastery-things` remote repo') }}


{{ hp_number("1") }} **Push the `main` branch** to the remote. **Also instruct Git to track this branch pair**.

{{ show_steps_tabs('push-to-empty-remote') }}

Note: Because the remote repo is empty, this push creates the `main` branch on the remote and uploads the commits to it. You can go to the repo page on GitHub to see the commits and the branch.

{{ hp_number("2") }} **Observe the remote-tracking branch** `origin/main` is now pointing at the same commit as the `main` branch.

{{ show_steps_tabs('after-pushing-to-empty-remote') }}

{% endcall %}

**You can use the push command repeatedly to send further updates to the remote repo**, e.g., to update the remote with commits you created since you pushed the first time.

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

**`-am` is shorthand for `-a -m`**. The `-a` option stages any changes to tracked files, and `-m` is for specifying the commit message. <span class="d-print-none"> See {{ ask_chatgpt("here", "I'm new to Git. Explain what the `git commit -am \"Update fruits list\"` command does. Elaborate how combining of options work in general.") }} for a longer explanation.</span>
</box>

{{ show_steps_tabs('commit-changes') }}

{{ hp_number ('2') }} **Push** the new commits to your remote repo on GitHub.

{{ show_steps_tabs('subsequent-push') }}

{% endcall %}


<box type="info" seamless>

**Can one push from any repo to any other repo?**{.text-info}

When updating an existing branch on a remote, **Git normally expects your local changes to build on the remote repo's current history**. That is, you cannot normally push if the two repos are completely unrelated to each other. In this tour, the remote repo is empty, so the first push from a local repo goes through just fine.
</box>

</div>

<div id="extras">
{{ show_exercise(exercises.push_over) }}
{{ show_detour('pushToMultipleRepos') }}
</div>
