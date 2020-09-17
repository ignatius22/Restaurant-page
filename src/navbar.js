const content = document.getElementById('content');

const nav = `
<nav class="navbar navbar-expand-lg navbar-light navsh sticky-top">
  <a class="navbar-brand text-white" href="index.html">Tasty bite</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Menu</a>
      </li>
        <li class="nav-item">
        <a class="nav-link text-white" href="#">Contact</a>
      </li>

        <li class="nav-item">
        <a class="nav-link text-white" href="#">About</a>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0 ml-auto">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
`;

const renderNav = () => {
  content.insertAdjacentHTML('beforebegin', nav);
};

export default renderNav;