{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_hop_prep, show_lesson_intro, show_lesson_link, show_multiple_columns, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_under_the_hood with context %}


<span id="prereqs"></span>
<span id="outcomes">Can fetch/pull from a remote repository.</span>
<span id="title">{{ trail.workingWithRemotes.lessons.pull.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
When there are new changes in the remote, you need to **_pull_ those changes down to your local repo**.
{% endcall %}

**There are two steps to bringing over changes from a remote repository into a local repository: _fetch_ and _merge_.**

* **{{ show_git_term("Fetch") }} is the act of downloading the latest changes from the remote repository, but without applying them to your current branch yet.** It updates metadata in your repo so that it knows what has changed in the remote repo, but your own local branch remains untouched.
* **{{ show_git_term("Merge") }} is what you do after fetching, to actually incorporate the fetched changes into your local branch.** It combines your local branch with the changes from the corresponding branch from the remote repo.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Fetch and merge from a remote")  %}

{{ hp_number (hop_scenario) }} You have cloned a remote repo. After you have cloned, two new commits have been added to it. `R` and `L1` in the diagram below represents this scenario.


{% set a %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "add assets.txt"
    commit id: "add goals.txt"
    commit id: "[head → master] add loan to Chang"
</mermaid>

<small>->[R: Remote repo `origin`]<-</small>
{% endset %}
{% set b %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "[head → master][origin/master] add assets.txt"
</mermaid>

<small>->[L1: Local repo -- currently, <br>
**2 commits behind** the remote]<-</small>
{% endset %}
{% set c %}
→
{% endset %}
{% set d %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "add assets.txt"
    commit id: "add goals.txt"
    commit id: "[head → master][origin/master] add loan to Chang"
</mermaid>

<small>->[L2: Local repo -- **after downloading**<br>
 the missing commits]<-</small>
{% endset %}

{{ show_multiple_columns([a, '|', b, '|', c, '|', d]) }}

{{ hp_number (hop_target) }} Now, you wish to bring over those missing commits to your clone, taking it from the state `L1` to state `L2` (as given in the diagram above).

{{ hp_number (hop_preparation) }}

{% set manual %}
To create the initial state of the remote repo and the local repo (i.e., `R` and `L1` given above), you can use the following steps.

1. **Clone the repo [git-mastery/samplerepo-finances](https://github.com/git-mastery/samplerepo-finances)**. It has 3 commits. Your clone now has a remote `origin` pointing to the remote repo you cloned from.
1. **Change the remote `origin`** to point to [samplerepo-finances-2](https://github.com/git-mastery/samplerepo-finances-2.git). This remote repo is a copy of the one you cloned, but it has two extra commits.

<div class="indented-level1">

{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash{.no-line-numbers}
git remote set-url origin https://github.com/git-mastery/samplerepo-finances-2.git
```
{% endset %}
{% set sourcetree %}

Go to `Repository` → `Repository settings ...` to update remotes.
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

</div>
{% endset %}

{{ show_hop_prep('hp-fetch-merge', manual_info=manual) }}

{{ hp_number ('1') }} **Verify the local repo is unaware of the extra commits** in the remote.

{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers  highlight-lines="2"}
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```
{% endcall %}

{% endset %}
{% set sourcetree %}
The revision graph should look like the below:

<pic src="images/sourcetreeStartingPoint.png" width="500" />
<p/>

If it looks like the below, it is possible that Sourcetree is auto-fetching data from the repo periodically.

<pic src="images/sourcetreeAfterFetching.png" width="500" />
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}

<!-- ------ end: Git Tabs -------------------------------->


{{ hp_number ('2') }} **Fetch from the new remote.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git fetch <remote>` command to fetch changes from a remote. If the `<remote>` is not specified, the default remote `origin` will be used.

```bash{.no-line-numbers}
git fetch origin
```
{% call show_output() %}
```bash{.no-line-numbers  highlight-lines="2['2bedace..e60deae']"}
remote: Enumerating objects: 8, done.
... # more output ...
   afbe966..cc6a151  master     -> origin/master
 * [new tag]         beta       -> beta
```
{% endcall %}

{% endset %}
{% set sourcetree %}
Click on the `Fetch` button on the top menu:<br>
<annotate src="{{baseUrl}}/lessons/images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
  <a-point x="45%" y="5%" content="Look within this box">
    <div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
  </a-point>
</annotate>

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}

<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('3') }} **Verify the fetch worked** i.e., the local repo is now aware of the two missing commits. Also observe how the local branch ref of the `main` branch, the staging area, and the working directory remain unchanged after the fetch.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git status` command to confirm the repo now knows that it is behind the remote repo.

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="2[:50]"}
On branch master
Your branch is behind 'origin/master' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

nothing to commit, working tree clean
```
{% endcall %}

{% endset %}
{% set sourcetree %}

Now, the revision graph should look something like the below. Note how the `origin/master` ref is now two commits ahead of the `main` ref.

<pic src="images/sourcetreeAfterFetching.png" width="500" />
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}

<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('4') }} **Merge the fetched changes.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git merge <remote-tracking-branch>` command to merge the fetched changes. Check the status and the revision graph to verify that the branch tip has now moved by two more commits.

```bash{.no-line-numbers}
git merge origin/master

git status
git log --oneline --decorate
```
{% endset %}
{% set sourcetree %}
To merge the fetched changes, right-click on the latest commit on `origin/remote` branch and choose `Merge`.

<pic src="images/sourcetreeRightClickToMerge.png" width="400" />

In the next dialog, choose as follows:<br>
<pic src="images/sourcetreeMergeDialog.png" width="500" />

The final result should be something like the below (same as the repo state before we started this hands-on practical):<br>
<pic src="images/sourcetreeAfterMerging.png" width="500" />

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ icon_warning }} Note that merging the fetched changes can get complicated if there are multiple branches or the commits in the local repo conflict with commits in the remote repo. We will address them when we learn more about Git branches, in a later lesson.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


**{{ show_git_term("Pull") }} is a shortcut that combines fetch and merge** — it fetches the latest changes from the remote and immediately merges them into your current branch. In practice, Git users typically use the pull instead of the fetch-then-merge.

<box type="info" seamless>

{{ show_git_term("pull") }} = {{ show_git_term("fetch") }} + {{ show_git_term("merge") }}
</box>

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Pull from a remote")  %}
{{ hp_number (hop_scenario) }} Same as previous hands-on practical.

{{ hp_number(hop_target) }} Same as the previous, but this time we intend to fetch and merge in one step.

{{ hp_number(hop_preparation) }}

{% set manual %}

Same as previous hands-on practical but use a different folder.
{% endset %}

{{ show_hop_prep('hp-pull-remote', manual_info=manual) }}

{{ hp_number('1') }} **Pull the newer commits from the remote**, instead of a fetch-then-merge.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git pull <remote> <branch>` command to pull changes.

```bash{.no-line-numbers}
git pull origin master
```
The following works too. If the `<remote>` and `<branch>` are not specified, Git will pull to the current branch from the remote branch it is tracking.
```bash{.no-line-numbers}
git pull
```
{% endset %}
{% set sourcetree %}
Click on the `Pull` button on the top menu:<br>
<annotate src="{{baseUrl}}/lessons/images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
<a-point x="24%" y="5%" content="Look within this box">
<div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
</a-point>
</annotate>

<p/>
In the next dialog, choose as follows:<br>
<pic src="images/sourcetreePullDialog.png" width="500" />

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('2') }} **Verify the outcome** is same as the fetch + merge steps you did in the previous hands-on practical.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**You can pull from any number of remote repos**, provided the repos involved have a shared history. This can be useful when the upstream repo you forked from has some new commits that you wish to bring over to your copies of the repo (i.e., your fork and your local repo).

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Sync your repos with the upstream repo")  %}

{{ hp_number (hop_scenario) }} You have forked and cloned a remote repo. Since then, new commits have been added to the original remote repo.


{% set a %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "add assets.txt"
    commit id: "add goals.txt"
    commit id: "[head → master] add loan to Chang"
</mermaid>

<small>->[R: the original remote repo]<-</small>
{% endset %}
{% set b %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "[head → master] add assets.txt"
</mermaid>

<small>->[F: your fork (remote), <br>
**2 commits behind** the remote]<-</small>
{% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "[head → master][origin/master] add assets.txt"
</mermaid>

<small>->[C: your clone (local), also <br>
**2 commits behind**]<-</small>
{% endset %}

{{ show_multiple_columns([a, '|', b, '|', c]) }}


{{ hp_number (hop_target) }} Now, you wish to bring over new commits to your clone, and also update your fork with those commits.

{{ hp_number (hop_preparation) }}

{{ show_hop_prep('hp-sync-upstream', manual_info="n/a") }}

{{ hp_number ('1') }} **Confirm your local repo is behind** by two commits. For example, you can examine the remote-tracking branches for this.

```bash
git log --oneline --decorate --graph --all
```
{% call show_output() %}
```{highlight-lines="1['upstream/master']@#e6fff2,3['origin/master']@pink,3['main']@pink"}
* b201f03 (upstream/master, upstream/HEAD) Add loan to Chang
* 1b923a4 Add goals.txt
* afbe966 (HEAD -> main, origin/master, origin/HEAD) Add assets.txt
* 0434002 Add loan to Ben
* fd96227 Add loans.txt
```
{% endcall %}

{{ hp_number ('2') }} **Pull from the upstream repo.** If there are new commits, those will come over to your local repo. For example:
```bash{.no-line-numbers}
git pull upstream master
```

{{ hp_number ('3') }} **Push to your fork.** Any new commits you pulled from the upstream repo will now appear in your fork as well. For example:
```bash{.no-line-numbers}
git push origin master
```
<box type="info" seamless>

The method given above is the more 'standard' method of synchronising a fork with the upstream repo. In addition, platforms such as GitHub can provide other ways (example: GitHub's [Sync fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) feature).
</box>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>
<div id="extras">
{{ show_exercise(exercises.fetch_and_pull) }}
{{ show_detour('pullingFromMultipleRemotes') }}

</div>
