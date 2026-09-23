{% from "common/macros.njk" import trail, show_tour_outro with context %}
<frontmatter>
title: "{{ trail.remoteBranches.title }}"
layout: lessons.md
pageNav: 4
</frontmatter>

<include src="tour-inPage-asFlat.md" var-part="all" boilerplate />
