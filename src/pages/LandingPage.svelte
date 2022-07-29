<script>
  
     import Fab, { Label, Icon } from '@smui/fab';
     import Paper, { Title, Content } from '@smui/paper';
     import Carousel from 'svelte-carousel'
     import { Input } from '@smui/textfield';

  let value = '';
 
  function doSearch() {
    alert('Search for ' + value);
  }
 
   let clicked =0;
   
</script>




<div class="header fixed-top">
  <a href="#/Profile">profil</a>
  
<img id="logo" src="https://st3.depositphotos.com/2927609/18123/v/600/depositphotos_181237302-stock-illustration-thor-hammer-icon-vector-illustration.jpg" alt="">
        MENTHOR
        
        <div class="margins ">
            <Fab color="primary"
              on:click={() => clicked++}
              href="#/RegisterPage"
              target="_blank"
              extended
            >
              <Label>Üye Ol</Label>
            </Fab>

            <Fab color="primary"
             on:click={() => clicked++}
            href="#/LoginPage"
             target="_blank"
              extended
             >
              <Label>Giriş Yap</Label>
             </Fab>

          </div>

</div>


   


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

    <h2>Alanında En İyi Mentorları Keşfedin</h2>
  <Paper class="solo-paper" elevation={6}>
    <Icon class="material-icons">search</Icon>
    <Input
      bind:value
      
      placeholder="Mentorlarımızı keşfetmek için arayın"
      class="solo-input"
    />
  </Paper>
  <Fab
    on:click={doSearch}
    disabled={value === ''}
    color="primary"
    mini
    class="solo-fab"
  >
    <Icon class="material-icons">arrow_forward</Icon>
  </Fab>
  

</div>
<div class="solo-demo-container solo-container">

   <h1>Aylık 1000'e yakın aktif kullanıcı sayısı</h1>
  <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858_960_720.jpg" alt="Card image cap">
</div>
 
</Carousel>




<Carousel
  particlesToShow={3}
  particlesToScroll={2}
>
<div class="container my-5">
  



<!--Carousel Wrapper-->
<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
<h3  > En Favori Mentorlar</h3>
<hr class="my-5">
  <!--Controls-->
  <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fas fa-chevron-right"></i></a>
  </div>
  <!--/.Controls-->

  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>

  </ol>
  <!--/.Indicators-->

  <!--Slides-->
  <div class="carousel-inner" role="listbox">

    <!--First slide-->
    <div class="carousel-item active">

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
         <img class="card-img-top"src="https://grain.org/system/attachments/sources/000/005/237/med_large/Henk.png" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Cemal Sayer</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-dark">Profili Gör</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top" src="https://grain.org/system/attachments/sources/000/005/238/med_large/Rene-e.png" alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-dark ">Profili Gör</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
               src="https://grain.org/system/attachments/sources/000/005/244/med_large/Ramon.png" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-dark">Profili Gör</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
               src="https://grain.org/system/attachments/sources/000/005/245/med_large/Larissa.png" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-dark">Profili Gör</a>
          </div>
        </div>
      </div>

    </div>
    <!--/.First slide-->
       
    <!--Second slide-->
    <div class="carousel-item">

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
               src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Profili Gör</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
               src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Profili Gör</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
               src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Profili Gör</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
               src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary" >Profili Gör</a>
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


<div class="footer">
  <footer class="py-3 my-4 sticky-bottom">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 Company, Inc</p>
  </footer>
</div>
<style >


    .margins{
        
        position: fixed;
        left: 80%;
        top: 2%;
       
    }

    .header{
    padding: 20px;
   
    background: black;
    color: white;
    font-size: 30px;
    }

    .footer{
      background-color: black;
      color: white;
    }
  
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
    
#logo{
  width: 50px;
  height: 50px;
}
   
</style>
