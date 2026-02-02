<!-- =============================================================== -->
<div id="faq-dashboardIncorrect-Q">Why is the dashboard not showing my latest progress?</div>
<div id="faq-dashboardIncorrect-A">

For example, the dashboard is showing an exercise that you expected to see as `completed`.

**Follow these steps to troubleshoot**, in the given order.

1. Run `gitmastery progress show` to view your local progress. This should show the current progress accurately.
   * If this too is not showing the exercise that you expected to see as `completed`, run the `gitmastery verify` command for that exercise, and ensure your solution is accepted as correct.
1. Note that ==there is a slight delay in your progress reaching our online dashboard== via GitHub. Refresh the dashboard after about 5 minutes to check again.
1. Check your progress repo (at `https://github.com/{YOUR_USERNAME}/{YOUR_USERNAME}-gitmastery-progress` e.g.,`https://github.com/[[username: JohnDoe]]/[[username: JohnDoe]]-gitmastery-progress`) to confirm that the latest commit in there has a timestamp after you completed the latest exercise.<br>
   If this is not the case, your progress is not correctly being pushed to our online dashboard. Run the `gitmastery progress sync on` command to enable remote progress tracking again. Check the dashboard again after about 5 minutes.
1. If none of the above resolves the issue, file a help request through [our issue tracker](https://github.com/git-mastery/git-mastery/issues).


</div>
<!-- =============================================================== -->
