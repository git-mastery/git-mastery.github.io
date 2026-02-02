{% import "common/macros.njk" as m with context %}

<div id="cli"><!-- ------------------------------------------------------------------- -->

{{ m.hp_number ('1') }} **In a terminal, navigate to the folder containing the local repo** `things`.

{{ m.hp_number ('2') }} **List the current list of remotes** using the `git remote -v` command (`-v` stands for 'verbose'), for a sanity check. No output is expected if there are no remotes yet.

{{ m.hp_number ('3') }} **Add a new remote repo** using the `git remote add <remote-name> <remote-url>` command.<br>

Format of the `<remote-url>`:
```bash{highlight-lines="1['<owner>'],1['<remote-repo>'],2['<owner>'],2['<remote-repo>']"}
https://github.com/<owner>/<remote-repo>.git  # using HTTPS
git@github.com:<owner>/<remote-repo>.git  # using SSH
```

<box seamless>

<cv-placeholder-input name="username" label="Note: Your GitHub username (used in the commands given below) -- you may change it if you wish:"></cv-placeholder-input>
</box>

The full command:
```bash{highlight-lines="1['[[username: JohnDoe]]'],1['gitmastery-things'],2['[[username: JohnDoe]]'],2['gitmastery-things']"}
git remote add origin https://github.com/[[username: JohnDoe]]/gitmastery-things.git  # using HTTPS
git remote add origin git@github.com:[[username: JohnDoe]]/gitmastery-things.git  # using SSH
```
<div id="tip-find-url-of-repo">

<box type="tip" seamless class="d-print-none">

**To find the URL of a repo on GitHub**, you can click on the {{ m.button_green(':fas-angle-left::fas-angle-right: Code :fas-caret-down:') }} button:

<pic src="images/githubFindUrl.png" />
</box>
</div>

{{ m.hp_number ('4') }} **List the remotes again to verify** the new remote was added.

```bash {.no-line-numbers}
git remote -v
```
{% call m.show_output() %}
```{.no-line-numbers  highlight-lines="1['origin'],1['fetch'],2['origin'],2['push']"}
origin  https://github.com/[[username: JohnDoe]]/gitmastery-things.git (fetch)
origin  https://github.com/[[username: JohnDoe]]/gitmastery-things.git (push)
```
{% endcall %}

{{ icon_info }} The same remote will be listed twice, to indicate that the remote supports two operations (`fetch` and `push`). You can ignore that for now. The important thing is the remote you added is being listed.

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

{{ m.hp_number('1') }} **Open the local repo** in Sourcetree.

{{ m.hp_number('2') }} **Open the dialog for adding a remote**, as follows:

:fab-windows: Choose `Repository` → `Repository Settings` menu option.<br>
:fab-apple: Choose `Repository` → `Repository Settings...` → Choose `Remotes` tab.

{{ m.hp_number('3') }} **Add a new _remote_** to the repo with the following values.

<pic eager src="images/fillRemoteInfoForSourceTree.png" width="450" />

* `Remote name`: the name you want to assign to the remote repo i.e., `origin`
* `URL/path`: the URL of your remote repo<br>
  ```bash{highlight-lines="1['<owner>'],1['<repo>'],2['<owner>'],2['<repo>']"}
  https://github.com/<owner>/<repo>.git  # using HTTPS
  git@github.com:<owner>/<repo>.git  # using SSH
  ```
  e.g.,
  ```bash{highlight-lines="1['[[username: JohnDoe]]'],1['things'],2['[[username: JohnDoe]]'],2['things']"}
  https://github.com/[[username: JohnDoe]]/things.git  # using HTTPS
  git@github.com:[[username: JohnDoe]]/things.git  # using SSH
  ```

<include src="steps-set-remote-fragment.md#tip-find-url-of-repo" />

* `Username`: your GitHub username

{{ m.hp_number('4') }} **Verify the remote was added** by going to `Repository` → `Repository Settings` again.

</div><!-- ------------------------------------------------------------------- -->
