{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.workingWithPrs %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can use GitHub Pull Requests to contribute to a project.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To contribute to a project using GitHub's _Pull Request_ mechanism</span>

<span class="d-none" id="motivation">Pull Request (PR) is the most common way to contribute to a project hosted on GitHub.</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">Now you can contribute to a GitHub project by creating reviewing, and even merging PRs in a GitHub repository.</span>

<span id="next"></span>