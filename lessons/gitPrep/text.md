{% from "common/macros.njk" import trail, ask_chatgpt, bold_number, callout, exercises, hp_number, label, show_commit, os_tabs_marker, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_prep, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can prepare the computer to use Git locally</span>

<span id="title">{{ trail.recordingFolderHistory.lessons.gitPrep.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Before you start learning Git, **you need to install some tools** on your computer.
{% endcall %}

##### Installing Git

**Git is a free and open source software used for revision control.** To use Git, you need to install Git on your computer.

{% call show_prep("Install Git", "install-git") %}
{{ os_tabs_marker('windows') }}

**Download the Git installer** from the [official Git website](https://git-scm.com/downloads/win).<br>
**Run the installer** and make sure to **select the option to install Git Bash** when prompted.

<box type="info" seamless>
<panel type="seamless" header="Screenshots given below provide some guidance on the dialogs you might encounter when installing Git. In other cases, go with the default option." peek>
<pic src="images/selectGitBash.png" /><br>
<pic src="images/chooseTextEditor.png" /><br>
<pic src="images/chooseCheckoutStyle.png" /><br>
<pic src="images/choosePullBehaviour.png" />
<pic src="images/chooseGitCredentialManager.png" /><br>
</panel>
</box>

<cv-toggle toggle-id="windows-only">

<box type="warning" seamless>

When running Git commands, we recommend Windows users to **use the Git Bash terminal** that comes with Git. To open Git Bash terminal, hit the <kbd>:fab-windows:</kbd> key and type `git-bash`.

{{ icon_tip }} It may be possible that the installation didn't add a shortcut to the Start Menu.
You can navigate to the directory where `git-bash.exe` is (most likely `C:\Program Files\Git\git-bash.exe`), double click `git-bash.exe` to open Git Bash.<br>
You can also right-click it and choose `Pin to Start` or `Pin to taskbar`.
</box>
</cv-toggle>


{% call show_sidebar("Git Bash Terminal") %}
**Git Bash is a terminal application that lets you use Git from the command line on Windows.** Since Git was originally developed for Unix-like systems (like Linux and MacOS), Windows does not come with a native shell that supports all the commands and utilities commonly used with Git.

<pic src="images/gitBashWindow.png" />

**Git Bash provides a Unix-like command-line environment on Windows.** It includes:
- A Bash shell (Bash stands for *Bourne Again SHell*), which is a widely used command-line interpreter on Linux and MacOS.
- Common Unix tools and commands (like `ls`, `cat`, `ssh`, etc.) that are useful when working with Git and scripting.

<box type="tip" seamless>

**When copy-pasting text onto a Git Bash terminal**, you will not be able to use the familiar <kbd>Ctrl</kbd>+<kbd>V</kbd> key combo to paste. Instead, use <kbd>Shift</kbd>+<kbd>Insert</kbd>, or, right-click on the terminal and use the `Paste` menu option.
</box>
{% endcall %} <!-- show_sidebar -->

<box type="important" seamless icon=":fab-windows:">

**On Windows**, you might need to close and open the terminal again for it to recognise changes done elsewhere in the computer (e.g., newly-installed software, changes to system variables, etc.).
</box>

{{ os_tabs_marker('mac') }}

**Install [homebrew](https://brew.sh/)** if you don't already have it, and then, **run `brew install git`**

{{ os_tabs_marker('linux') }}

**Use your Linux distribution's package manager to install Git.** Examples:

* Debian/Ubuntu, run `sudo apt-get update` and then `sudo apt-get install git`.
* Fedora: run `sudo dnf update` and then `sudo dnf install git`.

{{ os_tabs_marker('end') }}

**Verify Git is installed**, by running the following command in a terminal.
```bash{.no-line-numbers}
git --version
```
{% call show_output() %}
```bash{.no-line-numbers}
git version 2._._
```
The output should display the version number.
{% endcall %} <!-- show_output -->


{% endcall %} <!-- show_prep -->

##### Configuring `user.name` and `user.email`

**Git needs to know _who you are_ to record changes properly.** When you save a snapshot of your work in Git, it records your name and email as the author of that change. This ensures everyone working on the project can see who made which changes. **Accordingly, you should set the config settings `user.name` and `user.email` before you start Git for revision control.**

{% call show_prep("Set `user.name` and `user.email`", "set-user") %}

**To set the two config settings**, run the following commands in your terminal window:
```bash{.no-line-numbers}
git config --global user.name "<your-name>"
git config --global user.email "<your-email@example.com>"
```
Example:
```bash{.no-line-numbers}
git config --global user.name "John Doe"
git config --global user.email "john.doe@example.com"
```

**To check if they are set as intended**, you can use the following two commands:
```bash{.no-line-numbers}
git config --global user.name
git config --global user.email
```
{% endcall %} <!-- show_prep -->

##### Configuring `init.defaultBranch`

**Git has a property named `init.defaultBranch` that specifies a _branch_ name** that it uses for a couple of things (you'll learn more about Git branches in later lessons). Git uses the default value `master` for this but these days it is more common to use `main` instead. Git-Mastery uses `main` too. To make your Git behaviour match our lessons better, you should set this property to `main`, as described in the panel below:

{% call show_prep("Set `init.defaultBranch` to `main`", "set-default-branch") %}

**To set `init.defaultBranch` config property to `main`**, run the following command in your terminal window:
```bash{.no-line-numbers}
git config --global init.defaultBranch main
```

**To verify**, run the following command:
```bash{.no-line-numbers}
git config --global init.defaultBranch
```
{% call show_output() %}
```bash
main
```
{% endcall %}

{{ icon_info }} If you wish to set this property back to `master` at a later time, simply use the command `git config --global init.defaultBranch master`.

{% endcall %} <!-- show_prep -->


##### Interacting with Git: CLI vs GUI
**Git is fundamentally a command-line tool.** You primarily interact with it through its <tooltip content="Command-Line Interface">CLI</tooltip> by typing commands. This gives you full control over its features and helps you understand what’s really happening under the hood.

**<tooltip content="Graphical User Interface">GUI</tooltip> clients for Git also exist,** such as Sourcetree, GitKraken, and the built-in Git support in editors like Intellij IDEA and VS Code. These tools provide a more visual way to perform some Git operations.

**If you're new to Git, it's best to learn the CLI first.** The CLI is universal, always available (even on servers), and helps you build a solid understanding of Git’s concepts. You can use GUI clients as a supplement — for example, to visualise complex history structures.

**Mastering the CLI gives you confidence and flexibility, while GUI tools can serve as helpful companions.**

{% call show_prep("[Optional] Install a GUI client", "install-gui") %}
**Optionally, you can install a Git GUI client.**
e.g., Sourcetree ([installation instructions](https://se-education.org/guides/tutorials/sourcetree.html)).

Our Git lessons show how to perform Git operations in Git CLI, and in Sourcetree -- the latter just to illustrate how Git GUIs work. It is perfectly fine for you to learn the CLI only.

<pic src="images/sourcetreeUi.png" /><br>
<sub>%%[image credit: https://www.sourcetreeapp.com]%%</sub>

{% endcall %} <!-- show_prep -->

<div class="d-print-none" tags="git-mastery">

##### Installing the Git-Mastery App

**In these lessons, we will be using a companion app called Git-Mastery** that we have developed to help Git learners. In particular, it provides exercises that you can do to self-test your Git knowledge, and also verifies if your solution is correct.

**If you are new to Git, we ==strongly recommend that you install and use the Git-Mastery app==.**

{% call show_prep("[Recommended] Install and Configure the Git-Mastery App", "install-git-mastery")  %}

**1. Install the Git-Mastery App**

{{ os_tabs_marker('windows') }}

* Download the `gitmastery.exe` file from [the latest release](https://github.com/git-mastery/app/releases/latest).<br>
  Put it in a suitable location (ensure the file name remains `gitmastery.exe`).{{ numbers_abcd }}
* Add the folder containing the `gitmastery.exe` to your Windows System Variable `PATH`, by following [this guide](https://www.wikihow.com/Change-the-PATH-Environment-Variable-on-Windows).<br>
  E.g. If the file location is `C:\Users\Jane\Tools\gitmastery.exe`, you should add `C:\Users\Jane\Tools` to your `PATH`.
* Close and reopen the Git Bash terminal (for the updated `PATH` to take effect).

<panel header="**++:far-face-surprise: :fas-virus-covid: Windows Defender says gitmastery.exe is a virus?++**{.badge .bg-warning .text-dark}" icon=":fas-face-surprise:"  peek>

**In some cases, Windows Defender virus scanner can incorrectly block gitmastery.exe** as a virus. The Git-Mastery team is currently working on getting the app white-listed. In the meantime, it is safe to override the warning/blockade, either by choosing `Run anyway` option (if given) or using the following steps.

1. Open `Windows Security` → `Virus & threat protection`.
1. Click `Protection history`.
1. Find the blocked `gitmastery.exe` and click it.
1. Choose `Actions` → `Allow on device` (or `Restore`).<br>
   After this step, you may need to re-download the file if it was removed previously.

Alternatively, refer to [this page](https://support.microsoft.com/en-us/windows/virus-and-threat-protection-in-the-windows-security-app-1362f4cd-d71a-b52a-0b66-c2820032b65e) to see how to exclude a file from Windows virus scanner (look for the section named 'Exclusions').
</panel>
{{ os_tabs_marker('mac') }}

```bash{.no-line-numbers}
brew tap git-mastery/gitmastery
brew install gitmastery
```
{{ os_tabs_marker('linux') }}

<tabs>
  <tab header="Debian/Ubuntu">

Ensure you are running `libc` version 2.38 or newer (you can use the `ldd --version` command to check the current version).

Then install the app by running the following commands:

```bash
echo "deb [trusted=yes] https://git-mastery.github.io/gitmastery-apt-repo any main" | \
  sudo tee /etc/apt/sources.list.d/gitmastery.list > /dev/null
sudo apt install software-properties-common
sudo add-apt-repository "deb https://git-mastery.github.io/gitmastery-apt-repo any main"
sudo apt update
sudo apt-get install gitmastery
```

  </tab>
  <tab header="Arch">

Use an [AUR helper](https://wiki.archlinux.org/title/AUR_helpers) to install `gitmastery-bin`. For example using [yay](https://github.com/Jguer/yay):

```bash
yay -S gitmastery-bin
```

Alternatively, you can build the `PKGBUILD` yourself following the [instructions on the Arch wiki](https://wiki.archlinux.org/title/Arch_User_Repository#Installing_and_upgrading_packages).

  </tab>
  <tab header="Others">

If you are using a Linux distribution that is not yet supported by Git-Mastery, please download the right binary for your architecture from [the latest release.](https://github.com/git-mastery/app/releases/latest)

Install it to `/usr/bin` to access the binary, the following using version `3.3.0` as an example.

```bash
install -D -m 0755 gitmastery-3.3.0-linux-arm64 /usr/bin/gitmastery
```
  </tab>
</tabs> <!-- linux versions -->

{{ os_tabs_marker('end') }}

**2. To verify the installation**, run the `gitmastery --help` command from a couple of different folder locations. An example given below (IMPORTANT: change the `cd` command to match your folders):

```bash{.no-line-numbers highlight-lines="2['../my-projects']"}
gitmastery --help
cd ../my-projects  # navigate to a different folder
gitmastery --help
```
{{ ask_chatgpt("Explanation of `cd ../my-projects` command", "I'm new to using the bash terminal. Explain to me how the  `cd ../my-projects` command works. Also explain the `..` notation used in this command.") }}

<box type="info" seamless>

The current version of #r#the app takes about 3-5 seconds to respond to a command##. This is because the app comes with a bundled Python runtime (so that users don't need to install Python first) which needs to load first before the command can be executed.
</box>

**3. Trigger the initial setup** by running the `gitmastery setup` command in a suitable folder (the app will create files/folders inside this folder).

```bash{.no-line-numbers}
mkdir gitmastery-home
cd gitmastery-home
gitmastery setup
```
{{ ask_chatgpt("Explanation of `mkdir gitmastery-home` command", "I'm new to using the bash terminal. Explain to me how the `mkdir gitmastery-home` command works.") }}

The `gitmastery setup` command will perform the following tasks:
* Checks if Git is installed. {{ numbers_abcd }}
* Checks if `user.name` and `user.email` are set.
* Prompts you to specify a name for the **git-mastery** {{ show_git_term("exercises directory") }} (sometimes called the {{ show_git_term("git-mastery root") }} directory).
  * Recommended: accept the default (i.e., `gitmastery-exercises`) by pressing <kbd>Enter</kbd>.
  * If you choose to specify a different name for that folder, remember to use that name instead whenever our instructions refer to the `gitmastery-exercises` folder.
  * Caution: do not rename or move this folder later, as doing so can affect the app's functionality.
* Sets up a mechanism to locally track the progress of your exercises.

Notes:
* If the command failed due to checks (a) or (b) failing, you can rectify the problem and run the command again.
* If you wish to check the Git set up again at a later time, you can run the `gitmastery check git` command.

--- {.dotted .border-dark}
<div id="app-commands">

##### **Git-Mastery App: Commands**{.text-info}

{% set run_at_root %}<small>{{ icon_info }} This command needs to be run **in the Git-Mastery's _exercises directory_** (default name: `gitmastery-exercises`).</small>{% endset %}
{% set run_in_exercise %}<small>{{ icon_info }} This command needs to be run **inside the folder containing the exercise** in concern.</small>{% endset %}

Command|Run from ...|What it does|
-------|---|--------|
`gitmastery --help`|%%anywhere%%|Prints a brief message on how to use the app.|
`gitmastery <command> --help`|%%anywhere%%|Prints a brief explanation of the `<command>`.<br>e.g., `gitmastery download --help`|
`gitmastery version`|%%anywhere%%|Gets the current version of the Git-Mastery app on your machine.|
`gitmastery setup`|%%anywhere%%|Sets up Git-Mastery for your local machine.|
`gitmastery check git`|%%anywhere%%|Verifies that you have setup Git for Git-Mastery.|
`gitmastery check github`|%%anywhere%%|Verifies that you have setup GitHub and GitHub CLI for Git-Mastery.|
`gitmastery download <exercise name>`|#g#git-mastery root##| Sets up the sandbox for the specified [exercise]({{ baseUrl }}/exercises-directory/index.html).|
`gitmastery download <hands-on-practical name>`|#g#git-mastery root##|Sets up the specified hands-on practical in your computer.|
`gitmastery verify`|#m#inside exercise##|Verifies your exercise attempt. Saves the progress made.|
`gitmastery progress reset`|<span class="text-warning">exercise root</span>|Resets the progress of the current exercise.|
`gitmastery progress show`|#g#git-mastery root##|Shows a summary of your progress of exercises.|
`gitmastery progress sync on`|#g#git-mastery root##|Enables remote progress tracking of exercises.|
`gitmastery progress sync off`|#g#git-mastery root##|Disables remote progress tracking of exercises.|
</box>

Explanation of 'Run from ...' options:

* **#g#git-mastery root##**: Run the command from the directory where Git-Mastery exercises are located, aka _exercises directory_ (default name of folder: `gitmastery-exercises`).
* **<span class="text-warning">exercise root</span>**: Run the command in the sandbox folder containing the exercise.
* **#m#inside exercise##**: Run the command from the sandbox folder containing the exercise, or any sub folder of it.
</div>

--- {.dotted .border-dark}

<div id="updating-app">

##### **Updating the Git-Mastery App**{.text-info}

As the Git-Mastery app is under active development, it is likely to get updated frequently. When you run a `gitmastery <command>`, the output will warn you if there is a new version, in which case you should update the app immediately, by following the instructions in that message.

{{ os_tabs_marker('windows') }}

Replace your current `gitmastery.exe` with the latest version from [the latest release](https://github.com/git-mastery/app/releases/latest) and restart your terminal.

{{ os_tabs_marker('mac') }}

```bash{.no-line-numbers}
brew update
brew upgrade gitmastery
```
{{ os_tabs_marker('linux') }}

<tabs>
  <tab header="Debian/Ubuntu">

```bash
sudo apt-get install --only-upgrade gitmastery

```

  </tab>
  <tab header="Arch">

```bash
sudo pacman -S gitmastery-bin

```
  </tab>
</tabs> <!-- linux versions -->

{{ os_tabs_marker('end') }}

</div><!-- div id="updating-app" -->
{% endcall %} <!-- show_prep -->
</div>

</div>
<div id="extras">
</div>
