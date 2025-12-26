{% import "common/macros.njk" as m with context %}

<div id="cli"><!-- ------------------------------------------------------------------- -->

{{ m.hp_number ('1') }} **Examine the revision tree**, to get your bearing first.
```bash{.no-line-numbers}
git log --oneline --decorate
```
{{ icon_tip }} Reminder: You can use <trigger trigger="click" for="modal:checkout-aliases">aliases</trigger> to reduce typing Git commands.

<modal large header="" id="modal:checkout-aliases">
  <include src="../common/aliases-fragment.md"/>
</modal>

{% call m.show_output() %}
```bash{.no-line-numbers}
e60deae (HEAD -> main, origin/main) Update fruits list
f761ea6 (tag: v1.0) Add colours.txt, shapes.txt
2bedace (tag: v0.9) Insert figs into fruits.txt
d5f91de Add fruits.txt
```
{% endcall %}

{{ m.hp_number ('2') }} **Use the `checkout <commit-identifier>` command to check out a commit** other than the one currently pointed by `HEAD`. You can use any of the following methods:

* `git checkout v1.0`: checks out the commit tagged `v1.0`
* `git checkout 0023cdd`: checks out the commit with the hash `0023cdd`
* `git checkout HEAD~2`: checks out the commit 2 commits behind the most recent commit.

```bash{.no-line-numbers}
git checkout HEAD~2
```
{% call m.show_output() %}
```bash{.no-line-numbers}
Note: switching to 'HEAD~2'.

You are in 'detached HEAD' state.
# rest of the warning about the detached head ...

HEAD is now at 2bedace Insert figs into fruits.txt
```
{% endcall %}

{{ m.hp_number ('3') }} **Verify `HEAD` and the working directory have updated** as expected.

* `HEAD` should now be pointing at the target commit
* The working directory should match the state it was in at that commit (e.g., files added after that commit -- such as `shapes.txt` should not be in the folder).

```bash{.no-line-numbers}
git log --oneline --decorate
```
{% call m.show_output() %}
```bash{.no-line-numbers highlight-lines="1['HEAD']@pink}
2bedace (HEAD, tag: v0.9) Insert figs into fruits.txt
d5f91de Add fruits.txt
```
`HEAD` is indeed pointing at the target commit.

But note how the output does not show commits you added _after_ the checked-out commit.
{% endcall %}

<box type="info" seamless>

**The `--all` switch tells `git log` to show commits from _all_ refs**, not just those reachable from the current `HEAD`. This includes commits from other branches, tags, and remotes.
</box>

```bash{.no-line-numbers highlight-lines="1['--all']@yellow"}
git log --oneline --decorate --all
```
{% call m.show_output() %}
```bash{.no-line-numbers highlight-lines="1,2,['--all']@yellow"}
e60deae (origin/main, main) Update fruits list
f761ea6 (tag: v1.0) Add colours.txt, shapes.txt
2bedace (HEAD, tag: v0.9) Insert figs into fruits.txt
d5f91de Add fruits.txt

```
{% endcall %}

{{ m.hp_number ('4') }} **Go back to the latest commit** by checking out the `main` branch again.

```bash{.no-line-numbers}
git checkout main
```
</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

In the revision graph, double-click the commit you want to check out, or right-click on that commit and choose `Checkout...`.<br>

<pic src="images/sourcetreeCheckoutMenu.png" width="300" />

Click `OK` to the warning about ‘detached HEAD’ (similar to below).

<pic src="images/sourcetreeDetachedHeadWarning.png" height="140" />
<p/>

The specified commit is now loaded onto the working folder, as indicated by the `HEAD` label.

<pic src="images/sourcetreeHeadMoved.png" width="300" />
<p/>

To go back to the latest commit on the `main` branch, double-click the `main` branch.

<pic src="images/sourcetreeMasterBranch.png" width="300" />
<p/>
</div><!-- ------------------------------------------------------------------- -->




