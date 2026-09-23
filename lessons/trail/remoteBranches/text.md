{% from "common/macros.njk" import trail, show_next_link, show_previous_link, show_tour_title, show_tour_body, show_tour_link with context %}
{% set tour = trail.remoteBranches %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can work with branches of a remote repo.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To synchronize branches in the local repo with a remote repo's branches.</span>

<span class="d-none" id="motivation">It is useful to be able to have another copy of branches in a remote repo.</span>

<span class="d-none" id="achievements">You should now be able to work with branches in a remote repo, and keep them synchronized with branches in the local repo.</span>

<span id="next">{{ show_tour_link(trail.workingWithPrs) }}</span>

<div id="body">

{{ show_tour_body(tour, part) }}
</div>

<div id="next-previous">
{% if part=="intro" %}{{ show_previous_link(tour=trail.syncingBranches, part="outro", text="Outro of Previous Tour") }}{{ show_next_link(lesson=trail.remoteBranches.lessons.remoteBranchPush) }}{% elseif part=="outro" %}{{ show_previous_link(lesson=trail.remoteBranches.lessons.remoteBranchRename) }}{{ show_next_link(tour=trail.workingWithPrs, part="intro", text="Next Tour") }}{% endif %}
</div>

<div id="extras">
</div>
