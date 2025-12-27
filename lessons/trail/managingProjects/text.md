{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.managingProjects %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can manage a multi-person project on GitHub.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To manage a multi-person project on GitHub</span>

<span class="d-none" id="motivation">To manage a multi-person project on GitHub, one needs to know so some additional project management features GitHub offers.</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">You are now able to use an appropriate workflow for your project, and also, make use of other project management features offered by GitHub.</span>

<span id="next">This is the last of the Git-Mastery tours!</span>