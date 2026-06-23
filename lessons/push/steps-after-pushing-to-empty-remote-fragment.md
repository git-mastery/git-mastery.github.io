{% import "common/macros.njk" as m with context %}

<div id="cli"><!-- ------------------------------------------------------------------- -->

Use `git log --oneline --graph` to see the revision graph.
```bash {highlight-lines="1['origin/main']@#e6fff2"}
* f761ea6 (HEAD -> main, origin/main) Add colours.txt, shapes.txt
* 2bedace Insert figs into fruits.txt
* d5f91de Add fruits.txt
```

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

Click `History` to see the revision graph.

* In some versions of Sourcetree, the `HEAD` ref may not be shown -- it is implied that the `HEAD` ref points to the same commit as the current branch ref.
* If the remote-tracking branch ref (e.g., `origin/main`) is not showing up, you may need to enable the `Show Remote Branches` option.

<pic eager src="images/sourcetreeShowSimpleGraph.png" width="600" />
<p/>

</div><!-- ------------------------------------------------------------------- -->
