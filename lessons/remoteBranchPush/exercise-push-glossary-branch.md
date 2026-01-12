{% import "common/macros.njk" as m with context %}

<!--
mkdir funny-glossary
cd funny-glossary
git init -b main
echo -e "A funny glossary of computing terms" > glossary.txt
git add glossary.txt
git commit -m "Add intro in glossary.txt"

git switch -c ABC
echo -e "bug (noun): An error that disappears when you try to show it to someone else." > b.txt
git add b.txt
git commit -m "Add term 'bug'"

git switch -c DEF main
echo -e "debugging (verb): Being the detective in a crime movie where you are also the murderer." > d.txt
git add d.txt
git commit -m "Add term 'debugging'"

git switch -c STU main
echo -e "testing (verb): Writing code to prove your other code is lying." > t.txt
git add t.txt
git commit -m "Add term 'testing'"

git switch -c PQR main
echo -e "refactoring (verb): Improving the code without changing what it does... in theory." > r.txt
git add r.txt
git commit -m "Add term 'refactoring'"

git switch STU
echo -e "server (noun): Metal roommate that gets loud exactly when you need quiet." > s.txt
git add s.txt
git commit -m "Add term 'server'"

git switch ABC
echo -e "cache (noun): A place where data goes to be wrong, faster." > c.txt
git add c.txt
git commit -m "Add term 'cache'"
-->

<div id="scenario" class="d-none">

Your `funny-glossary` repo is a collection of funny definitions of computing terms. Currently, you have divided the work into several parallel branches (e.g., terms starting with letters `A, B, C` are in the branch `ABC`), in the hope of recruiting a few friends to work on each branch. The branches are to be merged into the `main` branch later, to produce the full version of the glossary.

</div>

<div id="task" class="d-none">

The `PQR` branch has not been pushed to the remote yet. Push it now.

</div>

{{ m.show_exercise(m.exercises.push_glossary_branch, is_panel=0) }}
