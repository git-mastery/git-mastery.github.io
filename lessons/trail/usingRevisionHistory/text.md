{% from "common/macros.njk" import trail, show_next_link, show_previous_link, show_tour_title, show_tour_body, show_tour_link with context %}
{% set tour = trail.usingRevisionHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can inspect, label, compare, and visit points in a Git repo's history, and undo unwanted changes.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To use the commits in a Git repo's history as reference points for understanding, navigating, and correcting the project.</span>

<span class="d-none" id="motivation">After you have put effort into recording meaningful commits, the history should help you answer practical questions such as "What changed in this file?", "Which commit should I mark as a release?", "What did the project look like last week?", and "How can I undo a mistake safely?"</span>

<div id="body">

{{ show_tour_body(tour, part) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">You should now be able to use a repository's revision history to inspect past commits, mark important commits with tags, compare versions, visit earlier snapshots, and choose between rewriting local history with reset or preserving history with revert.<br>
How useful this history is depends greatly on how well it was constructed -- for example, how focused and well-documented the commits are. We will explore that in the next tour.</span>

<span id="next">{{ show_tour_link(trail.fineTuningHistory) }}</span>

<div id="next-previous">
{% if part=="intro" %}{{ show_previous_link(tour=trail.workingWithRemotes, part="outro", text="Outro of Previous Tour") }}{{ show_next_link(lesson=trail.usingRevisionHistory.lessons.show) }}{% elseif part=="outro" %}{{ show_previous_link(lesson=trail.usingRevisionHistory.lessons.revert) }}{{ show_next_link(tour=trail.fineTuningHistory, part="intro", text="Next Tour") }}{% endif %}
</div>
