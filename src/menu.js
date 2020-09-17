const content = document.getElementById('content');

const menu = `
<div class="jumbotron text-center shadow-lg bg">
  <h1 class="display-4">Welcome to the Tasty Bite</h1>
  <p class="lead">get the best African food at affordable price</p>
  <hr class="my-4">
  <p>we care about you stomach a lot, so we make you the best break-fast, lunch and dinner that will keep you coming for more... 😋</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>

`;

const menuItem = `
<div class="container mt-4">

<h1 class="display-6 text-center">Our Menu</h1>
  <p class="lead">What do you want to eat today? guess what!!😊 you don't even need to think you head off.We got you covered.</p>
  <hr class="my-4">
  <p class="text-center">Orders are processed at a very fast manner.</p>
  <p class="lead">
<div class="row">
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://i.pinimg.com/236x/c4/33/17/c43317ad98468ad1a420d011cfc05bb1--nigeria-food-african-recipes.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Fried yam and egg</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://allnigerianfoods.com/wp-content/uploads/breakfast-ideas.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Bread and Tea</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://live.mrf.io/statics/i/ps/i0.wp.com/www.informationnigeria.com/wp-content/uploads/2018/06/5-amazing-nigerian-breakfast-ideas.jpg?w=696&is-pending-load=1" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Moi moi and custard</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://allnigerianfoods.com/wp-content/uploads/nigerian-dinner-ideas.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Fried Rice and Chicken</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://afrotourism.com/wp-content/uploads/2018/06/ofada-sauce1.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Ofada Rice</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://cdn.thenigerianvoice.com/story/XGltYWdlc1xjb250ZW50XHU4cGN0MjFzcjRfbmlnZXJpYW5kaXNoZXMuanBnfDUwMHwzMDB8.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Pounded yam and Egusi</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://answersafrica.com/wp-content/uploads/2016/03/nigerian-rice-and-stew.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Rice and Stew</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://res.6chcdn.feednews.com/assets/v2/e1021625a9edd4db53e7fabeb15cf20c?quality=uhq&resize=720&watermark=false" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Boiled plantain</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4 ">
    <div class="card mb-3">
      <img class="card-img-top" src="https://miro.medium.com/max/2800/0*Ye-z3Cbc7XQYeJq6.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Hot Okpa</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


<hr class="my-4">
<h1 class="display-6 text-center">Special delivery</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p class="text-center">It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
<div class="row">
  <div class="col-6 ">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 " src="https://cdn.pixabay.com/photo/2016/11/21/08/32/muffins-1844458_960_720.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2018/08/15/11/17/muffin-3607780_960_720.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2014/01/27/03/16/cupcake-252805_960_720.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div class="col-6">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2014/02/16/14/11/muffins-267299_960_720.jpg">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2018/08/15/11/17/muffin-3607780_960_720.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2014/01/27/03/16/cupcake-252805_960_720.jpg" alt="Third slide">
        </div>
      </div>

    </div>
  </div>
  <div class="col-6 mt-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/27/17/49/cupcakes-1283247_960_720.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div class="col-6 mt-4">
    <div class="card mb-3">
      <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/27/17/49/cupcakes-1283247_960_720.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>





`;

const renderMenu = () => {
  content.insertAdjacentHTML('beforeend', menu);
  content.insertAdjacentHTML('beforeend', menuItem);
};

export default renderMenu;