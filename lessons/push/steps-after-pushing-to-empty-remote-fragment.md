{% import "common/macros.njk" as m with context %}

<div id="cli"><!-- ------------------------------------------------------------------- -->

Use the `git log --oneline --graph` to see the revision graph.
```bash {highlight-lines="1['origin/master']@#e6fff2"}
* f761ea6 (HEAD -> master, origin/master) Add colours.txt, shapes.txt
* 2bedace Insert figs into fruits.txt
* d5f91de Add fruits.txt
```

</div>
<div id="sourcetree"><!-- ---------------------------------------------------- -->

Click the `History` to see the revision graph.

* In some versions of Sourcetree, the `HEAD` ref may not be shown -- it is implied that the `HEAD` ref is pointing to the same commit the currently active branch ref is pointing.
* If the remote-tracking branch ref (e.g., `origin/master`) is not showing up, you may need to enable the `Show Remote Branches` option.

<pic eager src="images/sourcetreeShowSimpleGraph.png" width="600" />
<p/>

</div><!-- ------------------------------------------------------------------- -->
