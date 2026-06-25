{% from "common/macros.njk" import trail, bold_number, button_green, callout, exercises, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can fork a repo on GitHub.</span>
{% set lesson_data = trail.workingWithRemotes.lessons.fork %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
GitHub allows you to **create your own remote copy of another repo through a process called _forking_**.
{% endcall %}

**A {{ show_git_term("fork") }} is a copy of a remote repository** created on the same hosting service, such as GitHub, GitLab, or Bitbucket. On GitHub, you can fork a repository owned by another user or organization into your own space, such as your account or an organization where you have the required access. {{ show_git_term("Forking") }} is useful when you want to experiment with a repo but don't have write permissions to the original; it gives you your own remote copy without affecting the original repo.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Forking a repo on GitHub")  %}

{{ hp_number(hop_preparation) }} **Create a GitHub account if you don't have one yet.**

{{ hp_number('1') }}  **Go to the GitHub repo you want to fork**, e.g., [samplerepo-things](https://github.com/git-mastery/samplerepo-things)

{{ hp_number('2') }} **Click the <pic eager src="images/fork.png" height="30" /> button** in the top-right corner. On the next screen:
  * choose your own account or a GitHub organization where you are an admin.
  * ==uncheck the <code>[ ] Copy the main branch only</code> option==, so that you get copies of other branches (if any) in the repo. %%You'll learn more about branches in a later lesson.%%
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


<box type="important" seamless>

**Forking is not a Git feature**, but a feature provided by hosted Git services like GitHub, GitLab, or Bitbucket.
</box>
<box type="info" seamless>

GitHub does not allow you to fork the same repo more than once to the same destination. If you want to re-fork, you need to [delete the previous fork](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository).
</box>

</div>

<div id="extras">
{{ show_exercise(exercises.fork_repo) }}
</div>
