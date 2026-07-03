ISSUES_FOUND = [
    ('title: "{{ trail.recordingFolderHistory.lessons.log.title }}"',
     'title: "{{ trail.recordingFolderHistory.lessons.intro.title }}"',
     'lessons/intro/index.md',
     'intro: Fix page title binding'),  # [metadata issue] The rendered page title uses the log lesson title instead of the intro lesson title.
    ("* **track your project's history**, recording who made each change, when, why, and what it was.",
     "* **track your project's history**, recording who made each change, when, why, and what changed.",
     'lessons/intro/text.md',
     'intro: Clarify tracked change details'),  # [phrasing issue] Replaces the vague phrase "what it was" with the clearer "what changed".
    ('**++[:fab-github: GitHub](https://github.com/)++ is a web-based project hosting platform for projects using Git for revision control.** Other similar services include GitLab, BitBucket, and SourceForge.',
     '**++[:fab-github: GitHub](https://github.com/)++ is a web-based platform for hosting projects that use Git for revision control.** Other similar services include GitLab, Bitbucket, and SourceForge.',
     'lessons/intro/text.md',
     'intro: Tighten GitHub description'),  # [phrasing issue] Avoids repeating "project" and fixes the capitalization of Bitbucket.
    ('It is a free and open-source tool [created by Linus Torvalds in 2005 to manage development of the Linux kernel](https://www.youtube.com/watch?v=Uq41qdjJ8Xs).',
     'It is a free and open-source tool [created by Linus Torvalds in 2005 to manage the development of the Linux kernel](https://www.youtube.com/watch?v=Uq41qdjJ8Xs).',
     'lessons/intro/text.md',
     'intro: Add article before development'),  # [grammar issue] Adds the article needed before "development" in this sentence.
    ('%%Other RCS tools include Mercurial, Subversion (SVN), Perforce, CVS (Concurrent Versions System), Bazaar, TFS (Team Foundation Server), and Clearcase.%%',
     '%%Other RCS tools include Mercurial, Subversion (SVN), Perforce, CVS (Concurrent Versions System), Bazaar, TFS (Team Foundation Server), and ClearCase.%%',
     'lessons/intro/text.md',
     'intro: Fix ClearCase capitalization'),  # [capitalization issue] Corrects the product name capitalization from Clearcase to ClearCase.
    ("{{ show_git_term('Revision Control Software (RCS)') }} **automates revision control**. Modern RCS tools can handle thousands of people working together on projects consisting of thousands of files.",
     "{{ show_git_term('Revision Control Software (RCS)') }} **automates revision control**. Modern RCS tools can handle large teams working together on projects with thousands of files.",
     'lessons/intro/text.md',
     'intro: Reduce repeated thousands phrasing'),  # [phrasing issue] Reduces repeated "thousands" phrasing while preserving the scale being described.
]
