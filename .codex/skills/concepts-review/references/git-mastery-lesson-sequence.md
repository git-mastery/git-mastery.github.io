# Git-Mastery Lesson Sequence

Use this map to judge whether a page assumes concepts students have not yet met. The canonical source is `common/macros.njk`; this reference summarizes the expected concept progression for review work.

## Review Heuristic

Treat a concept as "introduced" at the first lesson where it is central enough for students to use it. Earlier pages may briefly name later concepts if they explain them locally, mark them as optional, or avoid relying on them for the current task.

Detours and exercises inherit the sequence position of their parent lesson. Detours may go deeper, but should be clearly optional and should not make the main path depend on future concepts.

## Canonical Sequence and Concept Map

| Position | Lesson | Main concepts students can rely on after this point |
| --- | --- | --- |
| T1L1 | `intro`: Introduction to Revision Control | Revision control purpose; snapshots/history; collaboration motivation; Git as a revision-control system; GitHub as a hosting/collaboration platform at a high level. |
| T1L2 | `gitPrep`: Preparing to Use Git | Installing Git/Sourcetree; configuring user identity; command-line basics needed for the course; exercise folder conventions. |
| T1L3 | `init`: Putting a Folder Under Git's Control | Repository initialization; `.git` folder; working tree; repository root; tracked context at a beginner level; avoiding file-sync conflicts. |
| T1L4 | `stage`: Specifying What to Include in a Snapshot | Modified/new files; staging area/index; staging selected files; unstaging as optional detour; staged versus unstaged changes. |
| T1L5 | `commit`: Saving a Snapshot | Commit as a saved snapshot; commit message; staged changes become commit contents; deleting files and staging deletions as an optional detail. |
| T1L6 | `log`: Examining the Revision History | Commit history; commit identifiers; chronological/log views; revision graph at a basic level. |
| T2L1 | `remoteRepos`: Remote Repositories | Local versus remote repositories; cloud backup/sharing motivation; GitHub-hosted repositories. |
| T2L2 | `githubPrep`: Preparing to use GitHub | GitHub account/setup; authentication as needed by the course; GitHub UI orientation. |
| T2L3 | `createRemoteRepo`: Creating a Repo on GitHub | Creating an empty GitHub repository; repository visibility and initial remote repo state. |
| T2L4 | `setRemote`: Linking a Local Repo With a Remote Repo | Remotes; remote names such as `origin`; remote URLs; linking an existing local repo to a remote. |
| T2L5 | `push`: Updating the Remote Repo | Push; uploading local commits to a remote; local branch ahead of remote; first and subsequent pushes; pushing to multiple remotes as an optional detour. |
| T2L6 | `ignore`: Omitting Files from Revision Control | `.gitignore`; ignored versus tracked files; ignore patterns; limitations for already-tracked files. |
| T3L1 | `fork`: Duplicating a Remote Repo on the Cloud | Forking on GitHub; copy of a remote repository under another account; fork relationship at a beginner level. |
| T3L2 | `clone`: Creating a Local Copy of a Repo | Clone; local copy from remote; `origin` created by clone; local working copy from cloud-hosted project. |
| T3L3 | `pull`: Downloading Data Into a Local Repo | Fetch/pull at a practical level; downloading remote commits; local repo synchronization; pulling from multiple remotes as optional. |
| T4L1 | `show`: Examining a Commit | Inspecting a commit; commit metadata and patch; aliases as optional convenience. |
| T4L2 | `tag`: Tagging Commits | Tags as names for commits; lightweight/practical tag use; updating/deleting/pushing tags as relevant. |
| T4L3 | `diff`: Comparing Points of History | Diff between working tree, staging area, commits, and files; interpreting additions/removals. |
| T4L4 | `checkout`: Traversing to a Specific Commit | Checking out commits; detached HEAD at a practical level; restoring/traversing history; stashing/conflicting uncommitted changes as optional detours. |
| T4L5 | `reset`: Rewriting History to Start Over | Reset modes at course depth; moving branch/HEAD; discarding or preserving changes; undoing recent commits; remote-tracking reset as optional. |
| T4L6 | `revert`: Reverting a Specific Commit | Revert as a new commit that undoes earlier changes; contrast with reset for shared history. |
| T5L1 | `selectiveStage`: Controlling What Goes Into a Commit | Partial staging; staging hunks/lines; crafting focused commits. |
| T5L2 | `commitMessage`: Writing Good Commit Messages | Commit-message conventions; subject/body; explaining why a change exists. |
| T5L3 | `interactiveRebase`: Reorganising Commits | Interactive rebase; reorder/squash/reword/drop commits; amending last commit as optional detour. |
| T6L1 | `branch`: Creating Branches | Branch refs; `main`/feature branches; switching branches; HEAD and current branch; local branch versus `origin/main` revisited. |
| T6L2 | `merge`: Merging Branches | Merge; fast-forward versus merge commit; comparing branches; squash merge and undo merge as optional. |
| T6L3 | `mergeConflicts`: Resolving Merge Conflicts | Conflict causes; conflict markers; resolving and committing a merge conflict. |
| T6L4 | `branchRename`: Renaming Branches | Local branch rename and related practical consequences. |
| T6L5 | `branchDelete`: Deleting Branches | Deleting local branches; safe deletion after merge; risks of deleting unmerged work. |
| T7L1 | `syncByMerge`: Merging to Sync Branches | Keeping branches updated by merging from another branch; integration tradeoffs. |
| T7L2 | `syncByRebase`: Rebasing to Sync Branches | Rebase for synchronization; replaying commits; linear history; when not to rebase shared work. |
| T7L3 | `cherryPick`: Copying Specific Commits | Cherry-pick; copying selected commits across branches; duplicate-change implications. |
| T8L1 | `remoteBranchPush`: Pushing Branches to a Remote | Publishing local branches; upstream/tracking setup; remote branch creation. |
| T8L2 | `remoteBranchPull`: Pulling Branches from a Remote | Fetching/pulling remote branches; local branch from remote branch; tracking branch workflows. |
| T8L3 | `remoteBranchDelete`: Deleting Branches from a Remote | Deleting remote branches; pruning/remote-tracking cleanup at course depth. |
| T8L4 | `remoteBranchRename`: Renaming Branches in a Remote | Remote branch rename workflow as create-new/delete-old; updating collaborators. |
| T9L1 | `prsCreate`: Creating Pull Requests | Pull requests; source/target branch; PR from main or other branches; resolving PR conflicts as optional. |
| T9L2 | `prsReview`: Reviewing Pull Requests | Code review through PRs; comments, approvals, requested changes. |
| T9L3 | `prsMerge`: Merging Pull Requests | PR merge options; branch cleanup after PR; relationship between GitHub PR merge and Git history. |
| T10L1 | `workflows`: Git Workflows | Choosing collaboration workflows; central/shared branch approaches; tradeoffs. |
| T10L2 | `forkingWorkflow`: Forking Workflow (with Branching) | Fork-based collaboration with branches; upstream/origin roles in a fork workflow. |
| T10L3 | `otherPmFeatures`: Other Project Management Features | GitHub project-management features around issues, milestones, boards, and project coordination. |

## Detour Positions

| Detour | Parent lesson | Review note |
| --- | --- | --- |
| `undoRepoInit` | `init` | Should not assume later reset/checkout concepts unless locally explained. |
| `unstagingChanges` | `stage` | May introduce unstaging, but should keep the staging mental model beginner-safe. |
| `stagingFileDeletions` | `commit` | Should connect file deletion to staging and commit contents. |
| `managingRemotes` | `setRemote` | May go deeper into remote configuration, but should not require remote branches. |
| `pushToMultipleRepos` | `push` | May discuss multiple remotes; avoid relying on forks unless explained. |
| `ignoreTrackedFiles` | `ignore` | Can mention tracked files and index behavior; keep internal details light. |
| `pullingFromMultipleRemotes` | `pull` | May combine remotes and pull; avoid branch-heavy assumptions unless explained. |
| `stashingChanges` | `checkout` | Introduces stash; should be framed as temporary storage for uncommitted changes. |
| `conflictAtCheckout` | `checkout` | Conflict idea appears before merge-conflict lesson; explain locally and do not assume conflict-resolution knowledge. |
| `resetUncommitedChanges` | `reset` | Should distinguish working tree, staging area, and commits carefully. |
| `undoRecentCommits` | `reset` | Can compare reset effects; should warn about shared history. |
| `resetTrackingBranch` | `reset` | Advanced; remote-tracking branch terminology must be defined locally. |
| `updateLastCommit` | `interactiveRebase` | May discuss amend-like workflows; make history rewriting risks explicit. |
| `compareBranches` | `merge` | Branch comparison is available once branches are introduced. |
| `undoMerge` | `merge` | Can use reset/revert concepts because both have been introduced. |
| `squashMerge` | `merge` | Should define squash merge locally and distinguish it from regular merge. |
