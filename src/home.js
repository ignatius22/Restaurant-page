const content = document.getElementById('content');

const slider = `
<div
id="carouselExampleControls"
class="carousel slide"
data-ride="carousel"
>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2016/02/19/11/30/shrimp-1209744_960_720.jpg" alt="Parfait" />
    <div class="carousel-caption d-none d-md-block d-lg-block">
      <h5>Fried Rice</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img
      class="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/05/13/16/37/muffin-1390368_960_720.jpg"
      alt="Muffin "
    />
    <div class="carousel-caption d-none d-md-block d-lg-block">
      <h5>Banana Bread</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img
      class="d-block w-100"
      src="https://cdn.pixabay.com/photo/2019/11/28/18/15/jollof-4659747_960_720.jpg"
      alt="Beef Sauce"
    />
    <div class="carousel-caption d-none d-md-block d-lg-block">
      <h5>Jollof Rice</h5>
    </div>
  </div>
</div>
<a
  class="carousel-control-prev"
  href="#carouselExampleControls"
  role="button"
  data-slide="prev"
>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a
  class="carousel-control-next"
  href="#carouselExampleControls"
  role="button"
  data-slide="next"
>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
`;

const aboutInfo = `
<div class="container p-2">
<div class="row mt-5">
    <h1 class="border-bottom">About</h1>
  <p class="lead">
    Hi there! Welcome to Exquisite Kitchen where I share my passion for
    cooking with the world. Cooking is meant to be fun and not boring, so,
    I would be sharing with you easy and healthy recipes you can try out.
    Hey! I’m not here to turn you to a perfect cook but to help you
    navigate the kitchen and make food everyone will love.
  </p>
  <p class="lead">
    For anyone who shares the same passion as me and would love to watch
    and learn more, do well to subscribe (so you will be the first to be
    notified when I upload a new video), share and give my videos a thumbs
    up. Checkout my <a href="https://www.youtube.com/channel/UCNRhWLhBFVZFrPiC5T2xCQA/videos" target="_blank">YouTube Channel</a> 
  </p>
</div>
<div class ="row">
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xl-6 mb-4">
    <div class="card bg-dark text-white">
      <img class="card-img" src="https://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Pounded-Yam1.jpg">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>

  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xl-6">
    <div class="card bg-dark text-white">
      <img class="card-img" src="https://i.pinimg.com/originals/31/da/cd/31dacdcf8f679d857cfa7658e1607454.png" alt="Card image">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>
</div>

<div class ="row">
  <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 col-xl-4 mb-4">
    <div class="card bg-dark text-white">
      <img class="card-img" src="https://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Pounded-Yam1.jpg">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 col-xl-4">
    <div class="card bg-dark text-white">
      <img class="card-img" src="https://i.pinimg.com/originals/31/da/cd/31dacdcf8f679d857cfa7658e1607454.png" alt="Card image">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>
   <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 col-xl-4">
    <div class="card bg-dark text-white">
      <img class="card-img" src="https://i.pinimg.com/originals/31/da/cd/31dacdcf8f679d857cfa7658e1607454.png" alt="Card image">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>
</div>
</div>


`;

const renderHome = () => {
  content.insertAdjacentHTML('beforeend', slider);
  content.insertAdjacentHTML('beforeend', aboutInfo);
};

export default renderHome;