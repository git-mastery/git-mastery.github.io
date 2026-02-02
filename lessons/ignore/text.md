{% from "common/macros.njk" import trail, ask_chatgpt, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can set Git to ignore files</span>
<span id="title">{{ trail.backingUpOnCloud.lessons.ignore.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Git allows you to **specify which files should be omitted from revision control**.
{% endcall %}

**You can specify which files Git should {{ show_git_term("ignore") }} from revision control**. While you can always omit files from revision control simply by not staging them, having an 'ignore-list' is more convenient, especially if there are files inside the working folder that are not suitable for revision control %%(e.g., temporary log files)%% or files you want to prevent from accidentally including in a commit %%(files containing confidential information)%%.

**A repo-specific ignore-list of files can be specified in a `.gitignore` file**, stored in the root of the repo folder.

**The `.gitignore` file itself can be either revision controlled or ignored.**

* To version control it (the more common choice – which allows you to track how the `.gitignore` file changes over time), simply commit it as you would commit any other file.
* To ignore it, simply add its name to the `.gitignore` file itself.

**The `.gitignore` file supports file patterns** e.g., adding `temp/*.tmp` to the `.gitignore` file prevents Git from tracking any `.tmp` files in the `temp` directory.

{% call show_sidebar("`.gitignore` File Syntax", non_printable=1) %}

* Blank lines: Ignored and can be used for spacing.
* Comments: Begin with `#` (lines starting with # are ignored).
  ```bash
   # This is a comment
   ```
* Write the name or pattern of files/directories to ignore.
  ```bash
  log.txt          # Ignores a file named log.txt
  ```
* Wildcards:
  * `*` matches any number of characters, except `/` (i.e., for matching a string within a single directory level):
    ```bash
    abc/*.tmp     # Ignores all .tmp files in abc directory
    ```
  * `**` matches any number of characters (including `/`)
    ```bash
    **/foo.tmp    # Ignores all foo.tmp files in any directory
    ```
  * `?` matches a single character
    ```bash
    config?.yml   # Ignores config1.yml, configA.yml, etc.
    ```
  * `[abc]` matches a single character (a, b, or c)
    ```bash
    file[123].txt # Ignores file1.txt, file2.txt, file3.txt
    ```

* Directories:
  * Add a trailing `/` to match directories only.
    ```bash
    logs/          # Ignores the logs directory (and everything under it)
    ```

  * Patterns without `/` are not anchored and are matched at any directory level.
    ```bash
    *.bak          # Ignores all .bak files anywhere in the repository
    ```

  * Patterns starting with `/` are relative to the location of the `.gitignore` file.
    ```bash
    /secret.txt    # Only ignores secret.txt in the repository root
    ```

* Negation: Use `!` at the start of a line to not ignore something.
  ```bash
  *.log           # Ignores all .log files
  !important.log  # Except important.log
  ```

Example:
```bash{heading=".gitignore"}
# Ignore all log files
*.log

# Ignore node_modules folder
node_modules/

# Don’t ignore main.log
!main.log
```
{% endcall %}

<box type="info" class="d-print-none" seamless>

**`.gitignore` is a 'hidden' file!**{.text-info}

Files with a name starting with `.` (such as `.gitignore`) are considered as hidden files by macOS and Linux. It is very likely the Git tools used in Windows also marked the `.gitignore` file as a hidden file. Therefore, if the `.gitignore` files is not visible to you, you'll need to look for it among 'hidden' files.<br>
How to do that in: {{ ask_chatgpt(":fab-windows: Windows", "How to show hidden files in Windows?") }} | {{ ask_chatgpt(":fab-apple: macOS", "How to show hidden files in macOS?") }} | {{ ask_chatgpt(":fab-linux: Linux", "How to show hidden files in Linux?") }}
</box>

{% call show_hands_on_practical('Adding files to the ignore-list')  %}

{{ hp_number(hop_target) }} **Get Git to ignore some files** in a repo.

{% set manual %}
**Create a `temp.txt` file and a few `.tmp` files in a repo**. These are presumably files we do not want to include in our revision history. For example, as follows:

```bash
echo “good stuff” > keep.txt
echo “temp stuff” > temp.txt
echo “more temp stuff” > file1.tmp
echo “even more temp stuff” > file2.tmp
```
{% endset %}
{{ hp_number(hop_preparation) }}

{{ show_hop_prep('hp-ignore-file', manual_info=manual)}}

{{ hp_number ('1') }} **Configure Git to ignore those files:**

{{ show_steps_tabs('ignore-file') }}

{{ hp_number ('2') }} **Optionally, stage and commit the `.gitignore` file.**

{% endcall %} <!-- end HOP -->

**Files recommended to be omitted from version control**

* **Binary files** _generated_ when building your project %%e.g., `*.class`, `*.jar`, `*.exe`%%<br> Reasons:
  1. no need to version control these files as they can be generated again from the source code
  1. Revision control systems are optimized for tracking text-based files, not binary files.
* **Temporary files** %%e.g., log files generated while testing the product%%
* **Local files** i.e., files specific to your own computer %%e.g., local settings of your IDE (`.idea/`)%%
* **Sensitive content** i.e., files containing sensitive/personal information %%e.g., credential files, personal identification data%% (especially if there is a possibility of those files getting leaked via the revision control system).

</div>

<div id="extras">
{{ show_exercise(exercises.ignoring_somethings) }}
{{ show_detour('ignoreTrackedFiles') }}
</div>
