{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Understands the role of revision control.</span>
{% set lesson_data = trail.recordingFolderHistory.lessons.intro %}
<span id="title">{{ lesson_data.title }} <cv-label name="{{ lesson_data.tour_name }}.{{ lesson_data.lesson_name }}"/></span>

<div id="body">
{% call show_lesson_intro() %}
Before learning about Git, let us first **understand what _revision control_** is.
{% endcall %}

{{ show_git_term('Revision control') }} **is the process of managing versions of <popover content="for example, any files or outputs related to the development of software, such as source files, build scripts, config files, etc.">artifacts</popover> as they evolve**, such as tracking the versions of a project's files. You can do this by hand: each time you make some changes, you save the project folder under a new name (e.g., `Project-Foo-v1.2 (after fixing memory leak)`). But this is tedious and error-prone, especially when multiple people work on the same project.

{{ show_git_term('Revision Control Software (RCS)') }} **automates revision control**. Modern RCS tools can handle thousands of people working together on projects consisting of thousands of files. %%RCS tools are also known as _Version Control Software (VCS)_, and by a few other names.%%

<box type="info" seamless>

**_Revision_ vs _Version_**{.text-info}

* {{ show_git_term('Revision') }} ("How it changed"): A discrete change made to an artifact at a specific point in time. For example, an edit that fixes a typo in the file `README.md` is a _revision_ to that file.
* {{ show_git_term('Version') }} ("What it is"): A specific state of an artifact, usually the result of one or more revisions. For example, after fixing that typo, you have a new _version_ of `README.md`.

In everyday conversation, **these two terms are often used interchangeably**. We'll do the same in these lessons.
</box>

**A revision control tool can:**

* **track your project's history**, recording who made each change, when, why, and what it was.
* **make collaboration easier**, for example by helping you spot and resolve conflicting changes made around the same time.
* **help you recover from mistakes**, letting you revert to an earlier version and even pinpoint when a problem was introduced.
* **let you work on multiple versions at once** and manage the drift between them.

**++[:fab-git-alt: Git](https://git-scm.com/)++ is the most widely used RCS today.** It is a free and open-source tool created by Linus Torvalds in 2005 to manage development of the Linux kernel. %%Other RCS tools include Mercurial, Subversion (SVN), Perforce, CVS (Concurrent Versions System), Bazaar, TFS (Team Foundation Server), and Clearcase.%%

**++[:fab-github: GitHub](https://github.com/)++ is a web-based project hosting platform for projects using Git for revision control.** Other similar services include GitLab, BitBucket, and SourceForge.
</div>

<div id="extras">
</div>
