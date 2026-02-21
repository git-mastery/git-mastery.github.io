<frontmatter>
title: "Git-Mastery: Home"
layout: no-side-columns.md
</frontmatter>
{% from 'common/macros.njk' import thumbnail with context %}

<div class="website-content">

<header>
<div class="jumbotron jumbotron-fluid text-center" style="padding-top: inherit; padding-bottom: inherit">
  <div class="container">
  <h1 class="display-3 text-success">Git-Mastery</h1>
  <div class="lead">

Learn, practice, and receive feedback on your journey to Git mastery.<br>
A free resource **for students and teachers**.<br>
  </div>
  <hr>
  </div>
</div>
</header>


{% macro heading(icon, text) %}<h4 class="text-success">{{ thumbnail(icon) }} <span class="lead font-weight-bold text-green"><strong>{{ text }}</strong></span></h4>{% endmacro %}
<div class="position-relative" style="padding-left:30px;">
  <span style="
    content:'';
    position:absolute;
    top:0;
    bottom:0;
    left:53px;
    width:4px;
    background-color: #198754;">
  </span>


{{ heading(":fas-route:", "Outcome-driven lesson paths") }}
<div class="indented-level3">

Our Git lessons are divided into [tours](lessons/), each **teaching a specific usage of Git, not simply learning different Git commands** %%e.g., how to keep track of the history of a folder, while keeping a backup of it on the cloud.%%
</div>

{{ heading(":fas-dumbbell:", "Authentic exercises to practice Git") }}
<div class="indented-level3">

We provide hands-on practicals to practice Git concepts as you learn them, and **exercises that reflect authentic Git usage** to self-test  knowledge. Students do the exercise **in their own computer**, using their own choice of Git tools. Our companion app **sets up specific Git usage scenarios in a scaffolded sandbox** so that the student can go straight to practicing the concept at hand, without needing the setup the scaffolding themselves.
</div>


{{ heading(":fas-spell-check:", "Automated feedback") }}
<div class="indented-level3">

Students will not need to wonder if they did the exercise correctly, or where they went wrong. The Git-Mastery companion **app gives feedback on the Git exercises, and verifies that the solution is correct**.
</div>

{{ heading(":fas-list-check:", "Progress tracking/monitoring") }}
<div class="indented-level3">

Our companion **app keeps track of the student's progress** through the exercises. The student can even make their progress visible online.<br>
**Instructors can keep track of their students' progress** using a dashboard.
</div>


{{ heading(":fas-hand-holding-heart:", "Free forever. No limits.") }}
<div class="indented-level3">

Git-Mastery is entirely free. There is **no account signup**. There is **no limits on usage**.<br>
Students can use it on their own, or as directed by their instructors.<br>
Instructors can use it for their classes. No limits on class count or class size.
</div>
</div>

<p/>
<div class="indented-level1">

<box type="success" no-icon no-background>

#### :fas-graduation-cap: If you are a student ...{.text-success}

<div class="indented-level2">

****If you are new to Git****, we recommend that you follow the [lessons](lessons/) in the given sequence.

****If you have some familiarity with Git**** but wish to improve, you can still skim through the [lessons](lessons/) in the given sequence, and do the exercises as you encounter them.

In both cases, relevant tools and features will be introduced along the way.
</div>

</box>
<box type="success" no-icon no-background>

#### :fas-chalkboard-user: If you are an instructor ...{.text-success}

<div class="indented-level2">

****Option 1: Use the entire Git-Mastery site**** as part of your course.<br>
****Option 2: Select specific tours, lessons, or exercises**** to use in your course.

In both cases, you can set up a dashboard to monitor the progress of your students.
</div>
</box>

</div>

</div>
