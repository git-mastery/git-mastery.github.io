{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}
{% set title = "Exercises Directory" %}
<frontmatter>
title: "{{ title }}"
layout: default.md
pageNav: 6
</frontmatter>

# {{ title }}
{% set count = 0 %}
{% for exercise_id, exercise in exercises %}
{% if not exercise.wip %}{% set count = count+1 %}{{ show_exercise(exercise, status="expanded", has_footer=0) }}{% endif %}
{% endfor %}

<p/>

**Total exercises:** `{{ count }}`