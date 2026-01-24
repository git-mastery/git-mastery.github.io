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
6304a59 (HEAD -> main) shapes.txt: Add some shapes
9f68246 (tag: 1.0) colours.txt: Add some colours
2ef8852 Update fruits list
8ca5cc6 (tag: 0.9) Add colours.txt, shapes.txt
542668f Add elderberries and figs into fruits.txt
ec49b17 Add fruits.txt
```
{% endcall %}

{{ m.hp_number ('2') }} **Use the `checkout <commit-identifier>` command to check out a commit** other than the one currently pointed to by `HEAD`. You can use any of the following methods:

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
# rest of the warning about the detached HEAD ...

HEAD is now at 2ef8852 Update fruits list
```
{% endcall %}

{{ m.hp_number ('3') }} **Verify `HEAD` and the working directory have updated** as expected.

* `HEAD` should now be pointing at the target commit
* The working directory should match the state it was in at that commit (i.e., changes done after that commit should not be in the folder).

```bash{.no-line-numbers}
git log --oneline --decorate
```
{% call m.show_output() %}
```bash{.no-line-numbers highlight-lines="1['HEAD']@pink}
2ef8852 (HEAD) Update fruits list
8ca5cc6 (tag: 0.9) Add colours.txt, shapes.txt
542668f Add elderberries and figs into fruits.txt
ec49b17 Add fruits.txt
```
`HEAD` is indeed pointing at the target commit.

But note how the output does not show commits you added _after_ the checked-out commit.
{% endcall %}

You can use the following command to verify that the missing commits still exist in the repo.

```bash{.no-line-numbers highlight-lines="1['--all']@yellow,1['--date-order']@yellow"}
git log --oneline --decorate --all --date-order
```
{% call m.show_output() %}
```bash{.no-line-numbers highlight-lines="1,2,['--all']@yellow"}
2a6daee (main) shapes.txt: Add some shapes
b9a03c0 (tag: 1.0) colours.txt: Add some colours
b57ad18 (HEAD) Update fruits list
aff416b (tag: 0.9) Add colours.txt, shapes.txt
8998bfb Add elderberries and figs into fruits.txt
9d3b329 Add fruits.txt
```
{% endcall %}
<box type="info" seamless>

**The `--all` switch tells `git log` to show commits from _all_ refs**, not just those reachable from the current `HEAD`. This includes commits from other branches, tags, and remotes.

**The `--date-order` switch tells `git log` to order commits primarily by commit date, but never show a child commit before its parent.** This way, the output stays chronologically and topologically sensible
_even when multiple commits have identical timestamps_ (a situation that can happen when commits are generated programmatically by a tool/script e.g., Git-Mastery).
</box>

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




