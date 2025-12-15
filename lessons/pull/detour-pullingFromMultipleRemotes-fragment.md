{% import "common/macros.njk" as m with context %}


**You can pull from any number of repos**, provided the repos involved have a shared history.
1. <trigger trigger="click" for="modal:pull-addRemoteForNormalPushing">Add the GitHub repo URL as a remote</trigger> while giving a suitable name (e.g., `upstream`, `central`, `production`, `backup` ...), if you haven't done so already.
1. Pull (or fetch) from the remote repo -- remember to select the correct remote repo when you do.

<modal large header="Git & GitHub → Push →" id="modal:pull-addRemoteForNormalPushing">
<include src="{{ baseUrl }}/lessons/setRemote/text.md#body"/>
</modal>

{% set cli %} <!-- ------ start: Git Tabs --------------->

e.g., `git pull backup master`
{% endset %}
{% set sourcetree %}

Similar to before, but remember to choose the intended remote to pull from.
{% endset %}
{{ m.show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
