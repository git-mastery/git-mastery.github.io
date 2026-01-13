{% import "common/macros.njk" as m with context %}

<!--
mkdir funny-glossary
cd funny-glossary
git init -b main
echo -e "A funny glossary of computing terms" > glossary.txt
git add glossary.txt
git commit -m "Add intro in glossary.txt"
sleep 1

git switch -c ABC
echo -e "bug: An error that disappears when you try to show it to someone else." > b.txt
git add b.txt
git commit -m "Add 'bug'"
sleep 1

git switch -c DEF main
echo -e "debugging: Playing detective to solve a crime that you committed." > d.txt
git add d.txt
git commit -m "Add 'debugging'"
sleep 1

git switch -c STU main
echo -e "testing: Writing code to prove your other code is lying." > t.txt
git add t.txt
git commit -m "Add 'testing'"
sleep 1

git switch STU
echo -e "server: Metal roommate that gets loud exactly when you need quiet." > s.txt
git add s.txt
git commit -m "Add 'server'"
sleep 1

git switch ABC
echo -e "cache: A place where data goes to be wrong, faster." > c.txt
git add c.txt
git commit -m "Add 'cache'"
sleep 1

git switch DEF
echo -e "exception: The program screaming, but in an object-oriented way." > e.txt
git add e.txt
git commit -m "Add 'exception'"
sleep 1

git switch -c VWX main
echo -e "nothing yet ..." > v.txt
git add v.txt
git commit -m "Add v.txt with a placeholder"
sleep 1

# locally

git switch -c PQR main
echo -e "refactoring: Improving the code without changing what it does... in theory." > r.txt
git add r.txt
git commit -m "Add 'refactoring'"
sleep 1

git switch DEF
echo -e "documentation: Evidence that someone once cared." > e.txt
git add e.txt
git commit -m "Add 'exception'"

-->

<div id="scenario" class="d-none">

Your `funny-glossary` repo is a collection of funny definitions of computing terms. Currently, you have divided the work into several parallel branches (e.g., terms starting with letters `A, B, C` are in the branch `ABC`), in the hope of recruiting a few friends to work on each branch. The branches are to be merged into the `main` branch later, to produce the full version of the glossary.

</div>

<div id="task" class="d-none">

The `PQR` branch has not been pushed to the remote yet. Push it now.

</div>

{{ m.show_exercise(m.exercises.glossary_branch_push, is_panel=0) }}
