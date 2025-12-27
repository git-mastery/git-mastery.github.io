{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}


<span id="prereqs"></span>
<span id="outcomes">Can understand Git workflows</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.workflows.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}

**A Git {{ show_git_term('workflow') }} is essentially a set of agreed-upon rules that a development team uses to manage code changes** and collaborate effectively on a project, answering questions such as: "How do we add a new feature without breaking the existing code?", and "When should we create a branch?". By having a consistent workflow, a team can proceed in an organized, predictable manner.

**Workflows can be understood more easily by looking at two key dimensions** that describe how they operate:

* **Collaboration model:** who is allowed to push to the main repository? {{ bold_number("['D1:', 'D2:']")}}
  * At one end of this dimension is **the {{ show_git_term('centralised model') }}, in which all team members push to a single shared repository**. The coordination is largely social: developers agree on rules about when and how to push. {{ bold_number("['D1a:', 'D1b:', 'D2a:', 'D2b:']") }}
  * At the other end is **the {{ show_git_term('forking model') }}, in which each contributor works in their own fork and proposes changes back to the original repository using pull requests.** The maintainers of the upstream repository decide what gets merged. This model is common in open-source projects and large organisations because it scales well and provides strong control over what enters the main codebase.
* **Integration strategy:** when and how often changes are merged into the main line of development?
  * One end of this dimension is **the {{ show_git_term('feature-branch strategy') }}, in which the work is done on branches that live for a relatively long time** — often days or weeks. A feature is developed in isolation and only merged back when it is considered complete. Integration happens late, which can make merges larger and riskier, but the workflow feels intuitive and structured, especially when combined with pull requests and formal reviews.
  * The opposite end is **the{{ show_git_term('trunk-based strategy') }}, in which there is a single main branch (the “trunk”), and changes are integrated to it continuously.** Branches, if they exist at all, are very short-lived. Developers make small changes, merge them frequently, and rely on practices like automated testing and feature flags to keep the trunk stable and releasable at all times. In the simplest form of trunk-based development does not require branches at all;  everyone commits directly to the main branch.

From these two dimensions, we get four representative workflow models that together cover the full landscape:

* **Centralised + Feature-branch**: a shared repository where developers create long-lived feature branches and merge them when the feature is ready.
* **Centralised + Trunk-based**: a shared repository with continuous integration into the main branch, possibly with no branches at all, or using short-term branches.
* **Forking + Feature-branch**: contributors work on feature branches in their own forks and submit pull requests when features are complete.
* **Forking + Trunk-based**: contributors work in forks but integrate small, frequent changes into the upstream trunk via pull requests (either using the main branch, or using short-term branches).

Many named workflows, such as [_Gitflow_](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), are simply specific recipes built within one of these combinations rather than fundamentally new models.

</div>

<div id="extras">
</div>
