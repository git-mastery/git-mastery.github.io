{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Is aware of other project management features in GitHub.</span>
<span id="title">{{ trail.managingProjects.lessons.otherPmFeatures.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
GitHub provides many other features useful for managing a project.
{% endcall %}

Given below are some GitHub features that can be useful in managing projects hosted on GitHub.

* **Issue tracker** for task-tracking: GitHub Issues is a lightweight task and bug tracker built into each repository, letting you create, assign, and discuss work in a structured way. Noteworthy features include labels for categorisation, assignees, issue templates and issue forms for consistent reporting, checklists, cross-references, mentions, and linking issues to pull requests, milestones, and projects.<br>
  <small>Official docs: https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues</small>

* **Projects** for kanban-style task tracking: Building on top of the issue tracker, GitHub Projects provide flexible planning and tracking with tables/boards, custom fields, filters, and views, integrating issues and pull requests into a single workspace. Notable features include automation rules, insights, iterations, saved views, item fields (status, priority, estimates), and tight links to issues/PRs for end-to-end tracking.<br>
  <small>Official docs: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects</small>

* **Milestones:** Milestones group related issues and pull requests under a shared goal or time frame, making it easier to track progress toward a release or sprint. You can set a due date, add a description, view progress by open/closed items, and filter issues/PRs by milestone; milestones also integrate with project boards and can improve planning and reporting.<br>
<small>Official docs: https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones</small>

* **Releases** for managing product releases: Releases package a specific version of your software with tags, release notes, and optional build artifacts (binaries). Highlights include draft releases, pre-releases, auto-generated release notes, uploading assets, and associating releases with tags created via Git or the UI; they provide a clear history for users and downstream tooling.<br>
<small>Official docs: https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases</small>

* **GitHub Actions** for continuous integration: GitHub Actions is integrated continuous integration and automation, running workflows on events like pushes and pull requests to test, build, and deploy code. Key concepts are workflows (YAML), jobs and steps, runners (GitHub-hosted or self-hosted), reusable actions from the Marketplace, caching, matrix builds, and environment/secrets management; status checks can be required before merging.<br>
<small>Official docs: https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions</small>

* **GitHub Pages** for hosting a project website: GitHub Pages hosts static websites directly from your repository, ideal for documentation, portfolios, or project sites. You can publish from branches or /docs folders, use Jekyll for site generation, choose themes, configure custom domains and HTTPS, and automate publishing via Actions; it’s simple to set up and maintain alongside your code.<br>
<small>Official docs: https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages</small>



</div>

<div id="extras">
</div>
