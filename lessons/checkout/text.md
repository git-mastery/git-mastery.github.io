{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_steps_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_hop_prep, show_lesson_intro, show_output, show_ref, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Able to check out a commit.</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.checkout.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Another useful feature of revision control is to be able to **view the working directory as it was at a specific point in history, by _checking out_** a commit created at that point.
{% endcall %}

Suppose you added a new feature to a software product, and while testing it, you noticed that another feature added two commits ago doesn’t handle a certain edge case correctly. Now you’re wondering: _did the new feature break the old one, or was it already broken?_ Can you go back to the moment you committed the old feature and test it in isolation, and come back to the present after you found the answer? With Git, you can.

**To view the working directory at a specific point in history, you can {{ show_git_term("check out") }} a commit** created at that point.

<div id="detached-head-explanation">

**When you check out a commit, Git:**

1. **Updates your working directory to match the snapshot in that commit**, overwriting current files as needed.
2. **Moves the `HEAD` ref to that commit**, marking it as the current state you’re viewing.

{% set a %}
{{ show_commit('C3', desc=show_ref('main') + show_head()) }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>

{% endset %}
{% set b %}<small>%%[check out commit `C2`...]%%</small> {% endset %}
{% set c %}
{{ show_commit('C3', desc=show_ref('main')) }}
{{ show_commit('C2', desc=show_head() + " <small>#r#detached HEAD!##</small>") }}
{{ show_commit('C1', edge='') }}
<p/>

{% endset %}
{{ show_transformation_columns(a, b, c) }}

**Checking out a specific commit puts you in a {{ show_git_term('"detached `HEAD`"') }} state**: i.e., the `HEAD` no longer points to a branch, but directly to a commit (see the above diagram for an example). This isn't a problem by itself, but any commits you make in this state _can_ be lost, unless certain follow-up actions are taken. It is perfectly fine to be in a detached state if you are only examining the state of the working directory at that commit.

**To get out of a "detached HEAD" state, you can simply check out a branch**, which "re-attaches" `HEAD` to the branch you checked out.


{% set a %}
{{ show_commit('C3', desc=show_ref('main')) }}
{{ show_commit('C2', desc=show_head() + " <small>#r#detached HEAD!##</small>") }}
{{ show_commit('C1', edge='') }}
<p/>
{% endset %}
{% set b %}<small>%%[check out `main`...]%%</small> {% endset %}
{% set c %}
{{ show_commit('C3', desc=show_ref('main') + show_head() + " <small>%%HEAD re-attached!%%</small>") }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
<p/>
{% endset %}
{{ show_transformation_columns(a, b, c) }}

</div>

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical('Checking out some commits')  %}

{{ hp_number(hop_target) }} **Checkout a few commits in a local repo**, while examining the working directory to verify that it matches the state when you created the corresponding commit

{{ hp_number(hop_preparation) }}
{% set manual %}
**Clone a copy of the `things` repo** given [here](https://github.com/git-mastery/samplerepo-things).
{% endset %}

{{ show_hop_prep('hp-checkout-commits', manual_info=manual) }}

{{ show_steps_tabs('checkout-commits') }}

<box type="info" seamless>

If you check out a commit that comes before the commit in which you added a certain file (e.g., `temp.txt`) to the `.gitignore` file, and if the `.gitignore` file is version controlled as well, Git will now show it under ‘unstaged modifications’ because at <tooltip content="the point of time at which the currently checked out commit was created">that point</tooltip> Git hasn’t been told to ignore that file yet.
</box>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**If there are uncommitted changes in the working directory or staging area, Git proceeds with a checkout only if doing so would not overwrite or remove those changes.** Here are some examples to illustrate this behavior:
* Example 1: There is a new uncommitted file in the working directory.<br>
  → If the new file is untracked: Git proceeds with the checkout and keeps the file, provided the target commit does not contain a tracked file at the same path.<br>
  → If the new file is staged: Git proceeds with the checkout only if the checkout would not overwrite or remove the staged version of the file.
* Example 2: There is an uncommitted change to a file that would be overwritten by the version in the commit you want to check out.<br>
  → Git aborts the checkout.

If the above examples are a bit too abstract for you to grasp at this point, the important thing to remember is that **Git aims to prevent your uncommitted changes from being irrecoverably lost due to a checkout operation**.

**The Git {{ show_git_term("stash") }} feature temporarily sets aside uncommitted changes** you’ve made (in your working directory and staging area), without committing them. This is useful when you’re in the middle of some work, but need to switch to another state (e.g., checkout a previous commit), and your current changes are not yet ready to be committed or discarded. You can later reapply the stashed changes when you’re ready to resume that work.
</div>

<div id="extras">
{{ show_exercise(exercises.sensors_checkout) }}
{{ show_detour('stashingChanges') }}
{{ show_detour('conflictAtCheckout') }}
</div>
