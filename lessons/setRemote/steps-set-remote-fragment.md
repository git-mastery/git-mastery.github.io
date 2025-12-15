{% import "common/macros.njk" as m with context %}

<div id="cli"><!-- ------------------------------------------------------------------- -->

{{ m.hp_number ('1') }} **In a terminal, navigate to the folder containing the local repo** `things`.

{{ m.hp_number ('2') }} **List the current list of remotes** using the `git remote -v` command, for a sanity check. No output is expected if there are no remotes yet.

{{ m.hp_number ('3') }} **Add a new remote repo** using the `git remote add <remote-name> <remote-url>` command.<br>

Format of the `<remote-url>`:
```bash{highlight-lines="1['<owner>'],1['<remote-repo>'],2['<owner>'],2['<remote-repo>']"}
https://github.com/<owner>/<remote-repo>.git  # using HTTPS
git@github.com:<owner>/<remote-repo>.git  # using SSH
```

The full command:
```bash{highlight-lines="1['JohnDoe'],1['gitmastery-things'],2['JohnDoe'],2['gitmastery-things']"}
git remote add origin https://github.com/JohnDoe/gitmastery-things.git  # using HTTPS
git remote add origin git@github.com:JohnDoe/gitmastery-things.git  # using SSH
```

{{ m.hp_number ('4') }} **List the remotes again to verify** the new remote was added.

```bash {.no-line-numbers}
git remote -v
```
{% call m.show_output() %}
```{.no-line-numbers  highlight-lines="1['origin'],1['fetch'],2['origin'],2['push']"}
origin  https://github.com/johndoe/gitmastery-things.git (fetch)
origin  https://github.com/johndoe/gitmastery-things.git (push)
```
{% endcall %}

{{ icon_info }} The same remote will be listed twice, to show that you can do two operations (`fetch` and `push`) using this remote. You can ignore that for now. The important thing is the remote you added is being listed.

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
     ```bash{highlight-lines="1['JohnDoe'],1['things'],2['JohnDoe'],2['things']"}
     https://github.com/JohnDoe/things.git  # using HTTPS
     git@github.com:JohnDoe/things.git  # using SSH
     ```


   * `Username`: your GitHub username<br><br>

{{ m.hp_number('4') }} **Verify the remote was added** by going to `Repository` → `Repository Settings` again.

</div><!-- ------------------------------------------------------------------- -->
