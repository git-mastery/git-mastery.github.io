{% import "common/macros.njk" as m with context %}

<div id="cli"><!-- ------------------------------------------------------------------- -->

To push the newer commit(s) in the current branch `main` to the remote `origin`, you can use any of the following commands:

* `git push origin main`
* `git push origin`<br>
  → With the usual Git configuration used in this course, Git will push the current branch (e.g., `main`) to the branch it tracks on `origin`.
* `git push`<br>
  → Due to the tracking you set up earlier, Git will push the current branch (e.g., `main`) to its upstream branch on `origin`.

After pushing, the revision graph should look something like the following (note how both local and remote-tracking branch refs are pointing to the same commit again).

```bash {highlight-lines="1['HEAD']@pink,1['main']@#e6fff2,1['origin/main']@#e6fff2"}
e60deae (HEAD -> main, origin/main) Update fruits list
f761ea6 Add colours.txt, shapes.txt
2bedace Insert figs into fruits.txt
d5f91de Add fruits.txt
```

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

To push, click the `Push` button on the top buttons ribbon, ensure the settings are as follows in the next dialog, and click the `Push` button on the dialog.

<pic eager src="{{baseUrl}}/lessons/push/images/sourcetreePushDialog.png" height="150" />
<p/>

After pushing the new commit to the remote, the remote-tracking branch ref should move to the new commit:

<pic src="images/sourcetreeAfterPushing.png" width="500" />

</div><!-- ------------------------------------------------------------------- -->
