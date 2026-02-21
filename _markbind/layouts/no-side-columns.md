<head-bottom>
  <link rel="stylesheet" href="{{baseUrl}}/css/main.css">
</head-bottom>

<header sticky>
{% include '_markbind/layouts/navbar.md' %}
</header>

<div id="flex-body">
<div id="content-wrapper" class="fixed-header-padding">

{{ content }}
</div>
</div>

{% include '_markbind/layouts/footer.md' %}
