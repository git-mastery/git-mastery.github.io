{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can clone a repo.</span>
<span id="title">{{ trail.workingWithRemotes.lessons.clone.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
The next step is to **create a local copy of the remote repo, by _cloning_ the remote repo**.
{% endcall %}

**You can {{ show_git_term("clone") }} a repository to create a full copy of it on your computer.** This copy includes the entire revision history, branches, and files of the original, so it behaves just like the original repository. For example, you can clone a repository from a hosting service like GitHub to your computer, giving you a complete local version to work with.

**Cloning a repo automatically creates a remote named `origin`** which points to the repo you cloned from.

<box type="info" icon=":fab-git-alt:" icon-size="2x" seamless>

**Conventions:**{.text-info}

When configuring remotes for a Git repository, the following naming conventions are commonly used:

* **`origin`: The repository that you _cloned_ from** is usually given the remote name `origin`.
Git sets this remote name automatically when you clone a repository (but you can change it to something else).
* **`upstream`: In fork-based workflows, the repository you _forked_ from** is often added as a second remote named `upstream`. This name is not created by Git automatically; it is a convention chosen by developers. Some use more specific name for this, for example, `team-repo`.

Separately from remote _names_, the term {{ show_git_term("'upstream'") }} is also used informally to describe the direction of duplication between repositories. When one repository is created by duplicating another (for example, by forking or cloning), the original repository is said to be _upstream_ of the duplicate.

Example:
* If you fork R1 to create R2, then _R1 is upstream of R2_.
* If you then clone R2 to create R3, both _R1 and R2 are upstream of R3_.

<pic src="images/repoNaming.png" width="500" />

</box>



<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Cloning a remote repo")  %}

{{ hp_number ('1') }} **Clone the remote repo** to your computer. For example, you can clone the [samplerepo-things](https://github.com/git-mastery/samplerepo-things) repo, or the fork you created from it in a previous lesson.

<box type="warning" seamless>

Note that the URL of the GitHub project is different from the URL you need to clone a repo in that GitHub project.
e.g.

```bash{highlight-lines="2['.git']@yellow"}
https://github.com/git-mastery/samplerepo-things  # GitHub project URL
https://github.com/git-mastery/samplerepo-things.git # the repo URL
```
</box>

{% set cli %} <!-- ------ start: Git Tabs --------------->

You can use the `git clone <repository-url> [directory-name]` command to clone a repo.
* `<repository-url>`: The URL of the remote repository you want to copy.
* `[directory-name]` (optional): The name of the folder where you want the repository to be cloned. If you omit this, Git will create a folder with the same name as the repository.

```bash{.no-line-numbers}
git clone https://github.com/git-mastery/samplerepo-things.git  # if using HTTPS
git clone git@github.com:se-edu/samplerepo-things.git  # if using SSH

git clone https://github.com/foo/bar.git my-bar-copy  # also specifies a dir to use
```
For exact steps for cloning a repo from GitHub, refer to [this GitHub document](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository).

{% endset %}
{% set sourcetree_windows %}

`File` → `Clone / New ...` and provide the URL of the repo and the destination directory.<br>

{% endset %}
{% set sourcetree_mac %}

`File` → `New ...` → Choose as shown below → Provide the URL of the repo and the destination directory in the next dialog.<br>
<pic src="images/sourcetreeMacChooseToCloneFromUrl.png" width="300" /><br>
<pic src="images/sourcetreeMacGiveUrl.png" width="500" />

{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree_windows=sourcetree_windows, sourcetree_mac=sourcetree_mac) }}


{{ hp_number ('2') }} **Verify the clone has a remote named `origin`** pointing to the upstream repo.

{% set cli %} <!-- ------ start: Git Tabs --------------->

Use the `git remote -v` command that you learned earlier.
{% endset %}
{% set sourcetree %}

Choose `Repository` → `Repository Settings` menu option.
{% endset %}
{{ show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>

<div id="extras">
{{ show_exercise(exercises.clone_repo) }}
</div>
