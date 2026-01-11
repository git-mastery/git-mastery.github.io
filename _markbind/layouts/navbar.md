<navbar placement="top" type="dark">
<a slot="brand" href="{{ baseUrl }}/index.html" title="Git-Mastery Home" class="navbar-brand"><md>****Git-Mastery****</md></a>
  <li><a href="{{baseUrl}}/index.html" class="nav-link"><md>**Home**</md></a></li>
  <li><a href="{{baseUrl}}/lessons/index.html" class="nav-link"><md>**Lessons**</md></a></li>
  <li><a href="{{baseUrl}}/exercises-directory/index.html" class="nav-link"><md>**Exercises**</md></a></li>
  <li><a href="https://git-mastery.github.io/progress-dashboard/" class="nav-link"><md>**Progress**</md></a></li>
  <li><a href="{{baseUrl}}/companion-app/index.html" class="nav-link"><md>**App**</md></a></li>
  <li><a href="https://git-mastery.github.io/developers/" class="nav-link"><md>**Dev Docs**</md></a></li>
  <li><a href="{{baseUrl}}/faq/index.html" class="nav-link"><md>**FAQ**</md></a></li>
  <li><a href="{{baseUrl}}/about/index.html" class="nav-link"><md>**About**</md></a></li>
  <li><a href="https://github.com/git-mastery" class="nav-link"><md>:fab-github:</md></a></li>
  <li slot="right" class="nav-link">
    <form class="navbar-form">
      <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback" menu-align-right ></searchbar>
    </form>
  </li>
</navbar>
