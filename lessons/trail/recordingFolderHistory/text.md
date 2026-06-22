{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.recordingFolderHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can use Git to take snapshots of a folder</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To use Git to systematically record the history of a folder on your own computer. Specifically, to use Git to save snapshots of the folder at chosen points in time.</span>

<span class="d-none" id="motivation">Recording the history of files in a folder %%(e.g., code files of a software project, case notes, files related to an article you are writing)%% can be useful when you need to refer to past versions.</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">You should now be able to initialize a Git repository in a folder and commit snapshots of its files at chosen points in time. So far, you have not learned how to use those snapshots (other than listing them and viewing a simple revision graph) -- we will do that in later tours.</span>

<span id="next">{{ show_tour_link(trail.backingUpOnCloud) }}</span>