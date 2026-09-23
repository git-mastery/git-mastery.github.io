{% from "common/macros.njk" import trail, show_next_link, show_previous_link, show_tour_title, show_tour_body, show_tour_link with context %}
{% set tour = trail.syncingBranches %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can keep Git branches in sync.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To keep branches in a local repository synchronized with each other, as needed.</span>

<span class="d-none" id="motivation">While working on one branch, you might want to have access to changes introduced in another branch (e.g., to take advantage of a bug fix introduced in another branch).</span>

<span class="d-none" id="achievements">You should now be able to bring changes from one branch to another in your local repository.</span>

<span id="next">{{ show_tour_link(trail.remoteBranches) }}</span>

<div id="body">

{{ show_tour_body(tour, part) }}
</div>

<div id="next-previous">
{% if part=="intro" %}{{ show_previous_link(tour=trail.branchingLocally, part="outro", text="Outro of Previous Tour") }}{{ show_next_link(lesson=trail.syncingBranches.lessons.syncByMerge) }}{% elseif part=="outro" %}{{ show_previous_link(lesson=trail.syncingBranches.lessons.cherryPick) }}{{ show_next_link(tour=trail.remoteBranches, part="intro", text="Next Tour") }}{% endif %}
</div>

<div id="extras">
</div>
