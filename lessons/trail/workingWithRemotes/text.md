{% from "common/macros.njk" import trail, show_next_link, show_previous_link, show_tour_title, show_tour_body, show_tour_link with context %}
{% set tour = trail.workingWithRemotes %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can continue work by starting with an existing remote repo.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To work with an existing remote repository.</span>

<span class="d-none" id="motivation">You will often need to start with an existing remote repository. You may need to create your own copies and keep them updated when the upstream repository changes.</span>


<div class="d-none" id="video">

@[youtube](onBJbDSbnaE)

</div>

<div id="body">

{{ show_tour_body(tour, part) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">Now you can create your own remote and local copies of any accessible GitHub repo you are allowed to fork or clone, and update your copy when there are new commits in the upstream repo.</span>

<span id="next">{{ show_tour_link(trail.usingRevisionHistory) }}</span>

<div id="next-previous">
{% if part=="intro" %}{{ show_previous_link(tour=trail.backingUpOnCloud, part="outro", text="Outro of Previous Tour") }}{{ show_next_link(lesson=trail.workingWithRemotes.lessons.fork) }}{% elseif part=="outro" %}{{ show_previous_link(lesson=trail.workingWithRemotes.lessons.pull) }}{{ show_next_link(tour=trail.usingRevisionHistory, part="intro", text="Next Tour") }}{% endif %}
</div>
