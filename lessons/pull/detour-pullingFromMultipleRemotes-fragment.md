{% import "common/macros.njk" as m with context %}


**You can pull from any number of remote repos**, as long as the repos have a shared history.
1. <trigger trigger="click" for="modal:pull-addRemoteForNormalPushing">Add the GitHub repo URL as a remote</trigger> using a suitable name, such as `upstream`, `central`, `production`, or `backup`, if you haven't done so already.
1. Pull (or fetch) from that remote, remembering to select the correct remote.

<modal large header="Git & GitHub → Push →" id="modal:pull-addRemoteForNormalPushing">
<include src="{{ baseUrl }}/lessons/setRemote/text.md#body"/>
</modal>

{% set cli %} <!-- ------ start: Git Tabs --------------->

For example, `git pull backup main`
{% endset %}
{% set sourcetree %}

Similar to before, but remember to choose the intended remote to pull from.
{% endset %}
{{ m.show_steps_tabs(cli=cli, sourcetree=sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->
