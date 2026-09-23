{% from "common/macros.njk" import trail, show_next_link, show_previous_link, show_tour_title, show_tour_body, show_tour_link with context %}
{% set tour = trail.backingUpOnCloud %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can back up a Git repository on a cloud-based Git service such as GitHub</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To back up a Git repository on a cloud-based Git service such as GitHub.</span>

<span class="d-none" id="motivation">One benefit of maintaining a copy of a repo on a cloud server is that it acts as a safety net %%(e.g., against the folder becoming inaccessible due to a hardware fault)%%.</span>

<div class="d-none" id="video">

@[youtube](txlNJP_1aMI)

</div>
<div id="body">
{{ show_tour_body(tour, part) }}
</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">You should now be able to create a copy of your repo on GitHub and keep it updated as you add more commits to your local repo. If something goes wrong with your local repo (e.g., a disk crash), you can now recover it from the remote repo. This tour did not cover the exact recovery steps; they will be covered in a future tour.</span>

<span id="next">{{ show_tour_link(trail.workingWithRemotes) }}</span>

<div id="next-previous">
{% if part=="intro" %}{{ show_previous_link(tour=trail.recordingFolderHistory, part="outro", text="Outro of Previous Tour") }}{{ show_next_link(lesson=trail.backingUpOnCloud.lessons.remoteRepos) }}{% elseif part=="outro" %}{{ show_previous_link(lesson=trail.backingUpOnCloud.lessons.ignore) }}{{ show_next_link(tour=trail.workingWithRemotes, part="intro", text="Next Tour") }}{% endif %}
</div>
