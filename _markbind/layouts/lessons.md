<head-bottom>
  <link rel="stylesheet" href="{{baseUrl}}/css/main.css">
</head-bottom>

<header sticky>
{% include '_markbind/layouts/navbar.md' %}
</header>

{% from "common/macros.njk" import trail with context %}

{% macro show_site_nav(trail) %}
* [**Lessons Home**]({{baseUrl}}/lessons/)
{% for tour_id, tour in trail %}
* {{ tour.title }}
  * [Tour Home]({{baseUrl}}/lessons/trail/{{ tour.folder }}/)
  {% for lesson_id, lesson in tour.lessons %}
  * [{{ lesson.title}}]({{baseUrl}}/{{ lesson.path }}/)
  {% endfor %}
{% endfor %}
* [**All lessons in one page**]({{baseUrl}}/lessons/trail/all.html)
{% endmacro %}

<div id="flex-body">
<nav id="site-nav" class="fixed-header-padding">
<div class="nav-component slim-scroll">
<site-nav>
<small>
{{ show_site_nav(trail) | replace(r/\n\s*\n/g, "\n") }}
</small>
</site-nav>
</div>
</nav>
<div id="content-wrapper" class="fixed-header-padding">

# <span class="text-dark"><small>****Git-Mastery: Lessons****</small></span>
  {{ content }}
</div>
<nav id="page-nav" class="fixed-header-padding">
  <div class="nav-component slim-scroll">
  <page-nav />
  </div>
</nav>
</div>

{% include '_markbind/layouts/footer.md' %}
