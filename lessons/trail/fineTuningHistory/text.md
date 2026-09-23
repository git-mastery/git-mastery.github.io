{% from "common/macros.njk" import trail, show_next_link, show_previous_link, show_tour_title, show_tour_body, show_tour_link with context %}
{% set tour = trail.fineTuningHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can exercise fine-grained control over the revision graph.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To maintain a clean and meaningful revision history.</span>

<span class="d-none" id="motivation">A revision history is more useful when it consists of well-crafted and well-documented commits.</span>

<span class="d-none" id="achievements">You should now be able to create more meaningful commits from the start, and also refine them further after they’ve been created.</span>

<span id="next">{{ show_tour_link(trail.branchingLocally) }}</span>

<div id="body">

{{ show_tour_body(tour, part) }}
</div>

<div id="next-previous">
{% if part=="intro" %}{{ show_previous_link(tour=trail.usingRevisionHistory, part="outro", text="Outro of Previous Tour") }}{{ show_next_link(lesson=trail.fineTuningHistory.lessons.selectiveStage) }}{% elseif part=="outro" %}{{ show_previous_link(lesson=trail.fineTuningHistory.lessons.interactiveRebase) }}{{ show_next_link(tour=trail.branchingLocally, part="intro", text="Next Tour") }}{% endif %}
</div>

<div id="extras">
</div>
