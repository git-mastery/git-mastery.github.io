

To push the newer commit(s) in the current branch `master` to the remote `origin`, you can use any of the following commands:

* `git push origin master`
* `git push origin`<br>
  → Git will assume you are pushing the current branch (e.g., `master`) even if you don't specify it.
* `git push`<br>
  → Git will assume you are pushing the current branch (e.g., `master`). Due to tracking you've set up earlier, Git will assume that you want to push it to the matching branch on `origin`.

After pushing, the revision graph should look something like the following (note how both local and remote-tracking branch refs are pointing to the same commit again).

```bash {highlight-lines="1['HEAD']@pink,1['master']@#e6fff2,1['origin/master']@#e6fff2"}
* 2ac116a (HEAD -> master, origin/master) Add boxing.txt
* 3f1240c (origin/master) Add football.txt
* 5f05612 Add tennis.txt
* 2dfe92d Add golf.txt
```
