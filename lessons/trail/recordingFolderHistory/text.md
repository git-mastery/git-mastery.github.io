{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.recordingFolderHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can use Git to record snapshots of tracked files in a folder.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To use Git to systematically record the history of files in a folder on your own computer. Specifically, to put a folder under Git's control, choose which file versions to include, and save snapshots of tracked files at chosen points in time.</span>

<span class="d-none" id="motivation">Recording the history of selected files in a folder %%(e.g., code files of a software project, case notes, files related to an article you are writing)%% can be useful when you need to refer to past versions.</span>

<div id="video">
<box>

<box type="tip" seamless>

**Recommended: Watch this video!**{.text-success}

Tour/lesson videos (such as the one below) are recommended viewing, as **they help you build the right mental models about Git** before diving into detailed steps covered in the lessons.
</box>

@[youtube](MC-71B1gsqM)

</box>
</div>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">You should now be able to initialize a Git repository in a folder, stage file versions, and commit snapshots of tracked files at chosen points in time. So far, you have not learned how to use those snapshots (other than listing them and viewing a simple revision graph) -- we will do that in later tours.</span>

<span id="next">{{ show_tour_link(trail.backingUpOnCloud) }}</span>
