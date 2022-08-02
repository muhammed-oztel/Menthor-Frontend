<script>

  import Carousel from "svelte-carousel";
  
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";

  
</script>

<Navbar />
<Carousel
  autoplay
  autoplayDuration={5000}
  autoplayProgressVisible
  timingFunction="linear"
  dots={false}
  arrows={false}
  swiping={false}
  pauseOnFocus
>
 
  <div class="solo-demo-container solo-container">
    <h1>Aylık 1000'e yakın aktif kullanıcı sayısı</h1>
    <img
      class="card-img-top"
      src="https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858_960_720.jpg"
      alt="card-img-cap"
    />
  </div>
</Carousel>

<Carousel particlesToShow={3} particlesToScroll={2}>
  <div class="container my-5">
    <!--Carousel Wrapper-->
    <div
      id="multi-item-example"
      class="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      <h3>En Favori Mentorlar</h3>
      <hr class="my-5" />
      <!--Controls-->
      <div class="controls-top">
        <a class="btn-floating" href="#multi-item-example" data-slide="prev"
          ><i class="fas fa-chevron-left" /></a
        >
        <a class="btn-floating" href="#multi-item-example" data-slide="next"
          ><i class="fas fa-chevron-right" /></a
        >
      </div>
      <!--/.Controls-->

      <!--Indicators-->
      <ol class="carousel-indicators">
        <li
          data-target="#multi-item-example"
          data-slide-to="0"
          class="active"
        />
        <li data-target="#multi-item-example" data-slide-to="1" />
      </ol>
      <!--/.Indicators-->

      <!--Slides-->
      <div class="carousel-inner" role="listbox">
        <!--First slide-->
        <div class="carousel-item active">
          <div class="col-md-3" style="float:left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="https://grain.org/system/attachments/sources/000/005/237/med_large/Henk.png"
                alt=""
              />
              <div class="card-body">
                <h4 class="card-title">Cemal Sayer</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-dark">Profili Gör</a>
              </div>
            </div>
          </div>

          <div class="col-md-3" style="float:left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="https://grain.org/system/attachments/sources/000/005/238/med_large/Rene-e.png"
                alt="card-img-cap"
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-dark ">Profili Gör</a>
              </div>
            </div>
          </div>

          <div class="col-md-3" style="float:left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="https://grain.org/system/attachments/sources/000/005/244/med_large/Ramon.png"
                alt="card-img-cap"
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-dark">Profili Gör</a>
              </div>
            </div>
          </div>

          <div class="col-md-3" style="float:left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="https://grain.org/system/attachments/sources/000/005/245/med_large/Larissa.png"
                alt="card-img-cap"
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-dark">Profili Gör</a>
              </div>
            </div>
          </div>
        </div>
        <!--/.First slide-->

        <!--Second slide-->
        <div class="carousel-item">
          <div class="col-md-3" style="float:left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                alt="card-img-cap"
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-primary">Profili Gör</a>
              </div>
            </div>
          </div>

          <div class="col-md-3" style="float:left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                alt="card-img-cap"
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-primary">Profili Gör</a>
              </div>
            </div>
          </div>

          <div class="col-md-3" style="float:left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                alt="card-img-cap"
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-primary">Profili Gör</a>
              </div>
            </div>
          </div>

          <div class="col-md-3" style="float:left">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                alt="card-img-cap"
              />
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-primary">Profili Gör</a>
              </div>
            </div>
          </div>
        </div>
        <!--/.Second slide-->
      </div>
      <!--/.Slides-->
    </div>
    <!--/.Carousel Wrapper-->
  </div>
</Carousel>

<Footer />

<style>
  .solo-demo-container {
    padding: 70px 70px;
    background-color: var(--mdc-theme-background, #f8f8f8);
    background-image: url("https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858_960_720.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }

  .solo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 600px;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
    color: var(--mdc-theme-on-surface, #000);
  }
  * :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface, #000);
    opacity: 0.6;
  }
  * :global(.solo-fab) {
    flex-shrink: 0;
  }
</style>
