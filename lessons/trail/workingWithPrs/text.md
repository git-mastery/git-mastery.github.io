{% from "common/macros.njk" import trail, show_next_link, show_previous_link, show_tour_title, show_tour_body, show_tour_link with context %}
{% set tour = trail.workingWithPrs %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can use GitHub pull requests to contribute to a project.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To contribute to a project using GitHub's _pull request_ mechanism.</span>

<span class="d-none" id="motivation">Pull Request (PR) is the most common way to contribute to a project hosted on GitHub.</span>

<div id="body">

{{ show_tour_body(tour, part) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">Now you can contribute to a GitHub project by creating, reviewing, and even merging PRs in a GitHub repository.</span>

<span id="next">{{ show_tour_link(trail.managingProjects) }}</span>

<div id="next-previous">
{% if part=="intro" %}{{ show_previous_link(tour=trail.remoteBranches, part="outro", text="Outro of Previous Tour") }}{{ show_next_link(lesson=trail.workingWithPrs.lessons.prsCreate) }}{% elseif part=="outro" %}{{ show_previous_link(lesson=trail.workingWithPrs.lessons.prsMerge) }}{{ show_next_link(tour=trail.managingProjects, part="intro", text="Next Tour") }}{% endif %}
</div>
