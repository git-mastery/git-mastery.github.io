<head-bottom>
  <link rel="stylesheet" href="{{baseUrl}}/css/main.css">
</head-bottom>

<header sticky>
{% include '_markbind/layouts/navbar.md' %}
</header>

{% from "common/macros.njk" import trail with context %}

{% macro show_site_nav(trail) %}
* [**Lessons Home**]({{baseUrl}}/lessons/)
{% for tour_name, tour in trail %}
* {{ tour.title }}
  * [Tour Intro]({{baseUrl}}/lessons/trail/{{ tour.folder }}/index.md)
  {% for lesson_name, lesson in tour.lessons %}
  * [{{ lesson.title}} <cv-label name="{{ tour_name }}.{{ lesson_name }}"/>]({{baseUrl}}/lessons/{{ lesson.lesson_name }}/)
  {% endfor %}
  * [Tour Outro]({{baseUrl}}/lessons/trail/{{ tour.folder }}/end.md)
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

  {{ content }}
</div>
<nav id="page-nav" class="fixed-header-padding">
  <div class="nav-component slim-scroll">
  <page-nav />
  </div>
</nav>
</div>

{% include '_markbind/layouts/footer.md' %}
