{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_fine_print, show_folder_columns, show_git_term, show_detour, show_exercise, show_git_tabs_from_text, show_hands_on_practical, show_head, show_hop_prep, show_lesson_intro, show_lesson_link, show_multiple_columns, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_under_the_hood with context %}


<span id="prereqs"></span>
<span id="outcomes">Can fetch/pull from a remote repository.</span>
{% set lesson_data = trail.workingWithRemotes.lessons.pull %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
When there are new commits in the remote repo, you need to **_pull_ those commits down to your local repo**.
{% endcall %}

**Bringing changes from a remote repository into a local repository involves two steps: _fetch_ and _merge_.**

* **{{ show_git_term("Fetch") }} is the act of downloading the latest changes from the remote repository, but without applying them to your current branch yet.** It updates metadata in your repo so Git knows what has changed in the remote repo, but your own local branch remains untouched.
* **{{ show_git_term("Merge") }} is the step after fetching that incorporates the fetched changes into your local branch.** It combines your local branch with the changes from the corresponding branch in the remote repo.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Fetch and merge from a remote")  %}

{{ hp_number (hop_scenario) }} You have cloned a remote repo. After you cloned it, two new commits were added to the remote. `R` and `L1` in the diagram below represent this scenario.


{% set a %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "add assets.txt"
    commit id: "add goals.txt"
    commit id: "[HEAD → main] add loan to Chang"
</mermaid>

<small>->[R: Remote repo `origin`]<-</small>
{% endset %}
{% set b %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "[HEAD → main][origin/main] add assets.txt"
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
    commit id: "[HEAD → main][origin/main] add loan to Chang"
</mermaid>

<small>->[L2: Local repo -- **after downloading**<br>
 the missing commits]<-</small>
{% endset %}

{{ show_multiple_columns([a, '|', b, '|', c, '|', d]) }}

{{ hp_number (hop_target) }} Now, you want to bring those missing commits into your clone, taking it from state `L1` to state `L2` (as shown in the diagram above).

{{ hp_number (hop_preparation) }}

{% set manual %}
To create the initial remote and local states (`R` and `L1` above), use these steps.

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

{{ hp_number ('1') }} **Verify Git has not yet learned about the extra commits** in the remote.

{% set cli %} <!-- ------ start: Git Tabs --------------->

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers  highlight-lines="2"}
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
{% endcall %}

{% endset %}
{% set sourcetree %}
The revision graph should look like this:

<pic src="images/sourcetreeStartingPoint.png" width="500" />
<p/>

If it looks like the image below, Sourcetree may be auto-fetching data from the repo periodically.

<pic src="images/sourcetreeAfterFetching.png" width="500" />
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}

<!-- ------ end: Git Tabs -------------------------------->


{{ hp_number ('2') }} **Fetch from the new remote.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git fetch <remote>` command to fetch changes from a remote. If you do not specify `<remote>`, Git uses the default remote `origin`.

```bash{.no-line-numbers}
git fetch origin
```
{% call show_output() %}
```bash{.no-line-numbers  highlight-lines="3['afbe966..b201f03']"}
remote: Enumerating objects: 8, done.
... # more output ...
   afbe966..b201f03  main     -> origin/main
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

{{ hp_number ('3') }} **Verify the fetch worked**: the local repo is now aware of the two missing commits. Also observe that the local `main` branch ref, the staging area, and the working directory remain unchanged after the fetch.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git status` command to confirm the local repo now knows it is behind the remote repo.

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="2[:50]"}
On branch main
Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

nothing to commit, working tree clean
```
{% endcall %}

{% endset %}
{% set sourcetree %}

Now, the revision graph should look something like this. Note how the `origin/main` ref is now two commits ahead of the `main` ref.

<pic src="images/sourcetreeAfterFetching.png" width="500" />
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}

<!-- ------ end: Git Tabs -------------------------------->

{{ hp_number ('4') }} **Merge the fetched changes.**

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git merge <remote-tracking-branch>` command to merge the fetched changes. Check the status and the revision graph to verify that the branch tip has now moved by two more commits.

```bash{.no-line-numbers}
git merge origin/main
```
{% call show_output() %}
```
Updating afbe966..b201f03
Fast-forward
 goals.txt | 1 +
 loans.txt | 1 +
 2 files changed, 2 insertions(+)
 create mode 100644 goals.txt
```
{% endcall %}

Verify the status of the repo is as expected:
```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```
On branch main
Your branch is up to date with 'origin/main'.
```
{% endcall %}
```bash{.no-line-numbers}
git log --oneline --decorate
```
{% call show_output() %}
```
b201f03 (HEAD -> main, origin/main, origin/HEAD) Add loan to Chang
1b923a4 Add goals.txt
afbe966 Add assets.txt
0434002 Add loan to Ben
fd96227 Add loans.txt
```
{% endcall %}
{% endset %}
{% set sourcetree %}
To merge the fetched changes, right-click on the latest commit on the `origin/main` branch and choose `Merge`.

<pic src="images/sourcetreeRightClickToMerge.png" width="400" />

In the next dialog, choose as follows:<br>
<pic src="images/sourcetreeMergeDialog.png" width="500" />

The final result should look something like this, matching state `L2` in the diagram above:<br>
<pic src="images/sourcetreeAfterMerging.png" width="500" />

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{{ icon_warning }} Note that merging fetched changes can get complicated when the repo has multiple branches, or when local commits conflict with remote commits. We will address such situations in a later lesson when we learn more about Git branches.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


**{{ show_git_term("Pull") }} is a shortcut that combines fetch and merge**: it fetches the latest changes from the remote and immediately merges them into your current branch. {{ show_fine_print("This is the default behavior of `pull`, but you will later learn how to configure it to behave in other ways.")}} In practice, Git users usually pull instead of fetching and merging separately.

<box type="info" seamless>

{{ show_git_term("pull") }} = {{ show_git_term("fetch") }} + {{ show_git_term("merge") }}
</box>

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Pull from a remote")  %}
{{ hp_number (hop_scenario) }} Use the same scenario as the previous hands-on practical.

{{ hp_number(hop_target) }} Use the same target as in the previous hands-on practical, but fetch and merge in one step.

{{ hp_number(hop_preparation) }}

{% set manual %}

Set up the same scenario as in the previous hands-on practical, but use a different local folder.
{% endset %}

{{ show_hop_prep('hp-pull-remote', manual_info=manual) }}

{{ hp_number('1') }} **Pull the newer commits from the remote** instead of fetching and merging separately.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git pull <remote> <branch>` command to pull changes.

```bash{.no-line-numbers}
git pull origin main
```
{% call show_output() %}
```
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 6 (delta 1), reused 6 (delta 1), pack-reused 0 (from 0)
Unpacking objects: 100% (6/6), 557 bytes | 69.00 KiB/s, done.
From https://github.com/git-mastery/samplerepo-finances-2
 * branch            main       -> FETCH_HEAD
   afbe966..b201f03  main       -> origin/main
Updating afbe966..b201f03
Fast-forward
 goals.txt | 1 +
 loans.txt | 1 +
 2 files changed, 2 insertions(+)
 create mode 100644 goals.txt
```
{% endcall %}

The following command also works. If you do not specify `<remote>` and `<branch>`, Git will pull into the current branch from the remote branch it tracks.
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

{{ hp_number ('2') }} **Verify that the outcome** matches the fetch + merge steps you did in the previous hands-on practical.

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**You can pull from multiple remote repos**, as long as the repos have a shared history. This is useful when the upstream repo you forked from has new commits that you want to bring into your fork and local repo.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Sync your repos with the upstream repo")  %}

{{ hp_number (hop_scenario) }} You have forked and cloned a remote repo. Since then, new commits have been added to the original remote repo that you forked from.


{% set a %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "add assets.txt"
    commit id: "add goals.txt"
    commit id: "[HEAD → main] add loan to Chang"
</mermaid>

<small>->[`upstream`: the original remote repo<br> that you forked]<-</small>
{% endset %}
{% set b %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "[HEAD → main] add assets.txt"
</mermaid>

<small>->[`origin`: your fork (remote), <br>
**2 commits behind** `upstream`]<-</small>
{% endset %}
{% set c %}
<mermaid>
gitGraph BT:
    {{ "%%{init: { 'theme': 'default', 'gitGraph': {'mainBranchName': 'main'}} }%%" }}
    commit id: "add loans.txt"
    commit id: "add loan to Ben"
    commit id: "[HEAD → main][origin/main] add assets.txt"
</mermaid>

<small>->[your clone (local), also <br>
**2 commits behind**]<-</small>
{% endset %}

{{ show_multiple_columns([a, '|', b, '|', c]) }}


{{ hp_number (hop_target) }} Now, you want to bring the new commits into your clone and then update your fork with them.

{{ hp_number (hop_preparation) }}

{{ show_hop_prep('hp-sync-upstream') }}

{{ hp_number ('1') }} **Confirm your local repo is behind `upstream`** by two commits. Here are two ways to do that:

a) Go to the `upstream` repo at https://github.com/git-mastery/samplerepo-finances-2, and navigate to the repo's commit list. Compare that list with the commits in your local copy.<br>
OR<br>
b) Do a `fetch` and examine the revision graph locally, as shown below.

```bash
git fetch upstream
git log --oneline --decorate --graph --all
```
{% call show_output() %}
```{highlight-lines="1['upstream/main']@#e6fff2,3['origin/main']@pink,3['main']@pink"}
* b201f03 (upstream/main, upstream/HEAD) Add loan to Chang
* 1b923a4 Add goals.txt
* afbe966 (HEAD -> main, origin/main, origin/HEAD) Add assets.txt
* 0434002 Add loan to Ben
* fd96227 Add loans.txt
```
{% endcall %}

{{ hp_number ('2') }} **Pull from the upstream repo.** Git will bring any new commits into your local repo. For example:
```bash{.no-line-numbers}
git pull upstream main
```

{{ hp_number ('3') }} **Push to your fork.** Any new commits you pulled from the upstream repo will now appear in your fork as well. For example:
```bash{.no-line-numbers}
git push origin main
```
<box type="info" seamless>

This method is the standard way to synchronize a fork with the upstream repo. Platforms such as GitHub also provide alternatives, including GitHub's [Sync fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) feature.
</box>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

{% call show_sidebar("Distributed vs Centralized Revision Control", non_printable=0) %}
**Revision control can follow either a _centralized_ or a _distributed_ model.**

**{{ show_git_term("Centralized RCS") }} uses a single central (server-hosted) repository that is shared by the team.** Developers check out a working copy, make changes locally, and then commit directly to the central repository. Developers do not have their own copy of the entire repository history; they only have a working copy of files. One advantage of this model is having one clear "source of truth." A major disadvantage is that the central server becomes a critical dependency: if it's down, most operations (commits and history queries beyond the local working copy) are blocked. Older RCS tools such as CVS, Subversion, and Perforce follow this model.

<pic eager class="tbg" src="{{baseUrl}}/lessons/pull/images/crcsDiagram.png" width="450">

_The centralized RCS approach_
</pic>

**{{ show_git_term("Distributed RCS") }} (also known as decentralized RCS) allows multiple remote and local repositories to work together.** Workflows vary by team. For example, each team member can have their own remote repository in addition to a local repository. This architecture enables offline work, fast local operations, and more flexible workflows. It also supports multiple integration points (e.g., forks or alternative remotes) and uses cryptographic checksums to ensure history integrity. The trade-offs include more conceptual complexity (multiple repositories, remotes, and sync patterns) and the need for conventions to establish an authoritative integration flow. Git and Mercurial are prominent RCS tools that support the distributed approach.

<pic eager class="tbg" src="{{baseUrl}}/lessons/pull/images/drcsDiagram.png" width="450">

_The decentralized RCS approach_
</pic>

{% endcall %}


<box type="important" light>

Because Git uses multiple copies of a repository, **Git is considered a _distributed_ revision control system**, as opposed to a _centralized_ revision control system that keeps only a single repository.
</box>

</div>
<div id="extras">
{{ show_exercise(exercises.fetch_and_pull) }}
{{ show_detour('pullingFromMultipleRemotes') }}

</div>
