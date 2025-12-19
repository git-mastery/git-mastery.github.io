{% import "common/macros.njk" as m with context %}

<div id="cli"><!-- ------------------------------------------------------------------- -->

Optionally, you can run the `git status` command, which should confirm that your local branch is 'ahead' by one commit (i.e., the local branch has commits that are not present in the corresponding branch in the remote repo).

```bash{.no-line-numbers}
git status
```
{% call m.show_output() %}
```bash {highlight-lines="2"}
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```
{% endcall %}

You can also use the `git log --oneline --graph` command to see where the branch refs are. Note how the remote-tracking branch `origin/master` is one commit behind the local `main`.

```bash {highlight-lines="1['HEAD']@pink,1['main']@#e6fff2,2['origin/master']@#e6fff2"}
e60deae (HEAD -> main) Update fruits list
f761ea6 (origin/master) Add colours.txt, shapes.txt
2bedace Insert figs into fruits.txt
d5f91de Add fruits.txt
```

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

Create commits as you did before.

Before pushing the new commit, Sourcetree will indicate that your local branch is 'ahead' by one commit (i.e., the local branch has one new commit that is not in the corresponding branch in the remote repo).

<pic eager src="{{baseUrl}}/lessons/push/images/sourcetreeLocalBranchAhead.png" height="100" />
<p/>

</div><!-- ------------------------------------------------------------------- -->
