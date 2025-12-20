{% import "common/macros.njk" as m with context %}
<frontmatter>
layout: json.md
</frontmatter>

<pre>
{{ m.exercises | dump(2) }}
</pre>