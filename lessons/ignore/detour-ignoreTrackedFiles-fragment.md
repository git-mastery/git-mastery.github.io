{% import "common/macros.njk" as m with context %}

**Adding a file to the `.gitignore` file is not enough if the file was already being tracked** by Git in previous commits. In such cases, you need to do both of the following:

1. **{{ m.show_git_term("Untrack") }} the file (i.e., remove the file from the staging area and stop tracking it in future)**, using the `git rm --cached <file(s)>` command.
   ```bash
   git rm --cached data/ic.txt
   ```
1. **Add it to the `.gitignore`** file, as usual.

The above steps will remove the file from the staging area but will not delete it from the working directory. If this file was included in previous commits, the next commit will show it as 'deleted' (because is no longer visible to Git).