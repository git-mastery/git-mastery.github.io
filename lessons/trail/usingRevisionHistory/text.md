{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
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

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">You should now be able to use a repository's revision history to inspect past commits, mark important commits with tags, compare versions, visit earlier snapshots, and choose between rewriting local history with reset or preserving history with revert.<br>
How useful this history is depends greatly on how well it was constructed -- for example, how focused and well-documented the commits are. We will explore that in the next tour.</span>

<span id="next">{{ show_tour_link(trail.fineTuningHistory) }}</span>
