{% import "common/macros.njk" as m with context %}

<div id="cli"><!-- ------------------------------------------------------------------- -->

Navigate inside the `things` folder.

Use `git push -u <remote-repo-name> <local-branch-name>` to push the commits in a local branch to a remote repository.
```bash{.no-line-numbers}
git push -u origin main
```
Explanation:

* `push`: the Git sub-command that sends local commits to a remote repo
* `origin`: name of the remote
* `main`: branch to push
* `-u` (or `--set-upstream`): the flag that sets `origin/main` as the upstream branch of the local `main` branch. The _upstream_ branch is Git's remembered default remote-tracking branch for this local branch; here, `main` will use `origin/main` as the upstream branch.

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

Click the `Push` button on the buttons ribbon at the top.

<annotate src="{{baseUrl}}/lessons/images/sourcetreeTopMenu.png" width="400" alt="Sourcetree top menu">
  <a-point x="34%" y="5%" content="Look within this box">
    <div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
  </a-point>
</annotate>

In the next dialog, ensure the settings are as follows, select the `Track` option, and click the `Push` button on the dialog.

<annotate src="{{baseUrl}}/lessons/push/images/sourcetreePushToEmptyRemote.png" width="500" alt="push to empty remote">
<a-point x="90%" y="40%" content="Look within this box">
<div style="width: 45px; height: 50px; border: 2px solid red; margin: 20px auto;"></div>
</a-point>
</annotate>

</div><!-- ------------------------------------------------------------------- -->
