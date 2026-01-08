{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

{% call show_sidebar("Working with the 'less' pager") %}
**Some Git commands — such as `git log`— may show their output through a {{ show_git_term("pager") }}.** A pager is a program that lets you view long text one screen at a time, so you don’t miss anything that scrolls off the top. For example, the output of `git log` command will temporarily hide the current content of the terminal, and enter the pager view that shows the output one screen at a time. When you exit the pager, the `git log` output will disappear from view, and the previous content of the terminal will reappear.

{% set a %} <!-- ------ start: transformation columns --------------->
```
command 1
output 1

git log

```
{% endset %}
{% set b %}

{% endset %}
{% set c %}
```
commit f761ea63738a...
Author: ... <...@...>
Date:   Sat ...

    Add colours.txt
```
{% endset %}
{{ show_transformation_columns(a, b, c) }}
<!-- ------ end: transformation columns -------------------------------->

**By default, Git uses a pager called [less](https://en.wikipedia.org/wiki/Less_(Unix))**. Given below are some useful commands you can use inside the less pager.

| Command      | Description
|--------------|--------------
| `q`          | Quit `less` and return to the terminal
| `↓` or `j`   | Move down one line
| `↑` or `k`   | Move up one line
| `Space`      | Move down one screen
| `b`          | Move up one screen
| `G`          | Go to the end of the content
| `g`          | Go to the beginning of the content
| `/pattern`   | Search forward for *pattern* (e.g., `/fix`)
| `n`          | Repeat the last search (forward)
| `N`          | Repeat the last search (backward)
| `h`          | Show help screen with all `less` commands

**If you’d rather see the output directly**, without using a pager, you can add the `--no-pager` flag to the command e.g.,
```bash
git --no-pager log
```
It is possible to ask Git to not use less at all, use a different pager, or fine-tune how less is used. For example, **you can reduce Git's use of the pager** (recommended), using the following command:
```bash
git config --global core.pager "less -FRX"
```

Explanation: `-FRX` is a shorthand for combining the following three flags.

* `-F` : Quits if the output fits on one screen (don’t show pager unnecessarily)
* `-R` : Shows raw control characters (for coloured Git output)
* `-X` : Keeps content visible after quitting the pager (so output stays on the terminal)

{% endcall %}
