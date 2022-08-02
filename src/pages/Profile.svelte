<script lang="ts">
    
    import List, { Item, Graphic, Separator, Text } from '@smui/list';
    import Paper, { Title, Content } from '@smui/paper';
    import Card, {
      
    
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';
  import Fab, { Label, Icon } from '@smui/fab';
  
    let clicked = 'nothing yet';
  </script>
  
  <nav>

  </nav>


  <div class="drawer">
    <img class="card-img-top"src="https://grain.org/system/attachments/sources/000/005/237/med_large/Henk.png" style="margin: 30px;"   alt=""/>
    <h2>Cemal Sayer</h2>
    <h6>Yazılım Birim Müdürü</h6>
  <div>
    <List class="demo-list" dense>
      <Item >
        <span class="material-symbols-outlined">
            account_circle
            </span>
            <Text><a href="#" style="text-decoration: none; color :black;">Profil</a></Text>
      </Item>
      <Item >
        <span class="material-symbols-outlined">
            web
            </span>
            <Text><a href="#/MentorMenteePage" style="text-decoration: none; color :black;">Panel</a></Text>
      </Item>
      <Item >
        <span class="material-symbols-outlined">
            calendar_month
            </span>
            <Text><a href="#/Calender" style="text-decoration: none; color :black;">Takvim</a></Text>
      </Item>
      <Item >
        <span class="material-symbols-outlined">
            inventory_2
            </span>
            <Text><a href="#/Files" style="text-decoration: none; color :black;">Dosyalar</a></Text>
      </Item>
      <Separator />
      
      <Item  >
        <span class="material-symbols-outlined">
            settings
            </span>
            <Text><a href="#/Settings" style="text-decoration: none; color :black;">Ayarlar</a></Text>
     
        </Item>
      
    <Item >
        <span class="material-symbols-outlined">
            logout
            </span>
            <Text><a href="#" style="text-decoration: none; color :black;">Çıkış</a></Text>
         </Item>
    </List>
  </div>
  </div>


    <div class="paper-container paper-shaped-round">
        <Paper color="primary" variant="unelevated">
            <Title>Hakkımda</Title>
            <Content>
                “Adım Cemal Sayer ve yeni insanlarla tanışmaktan ve onların canlandırıcı bir deneyim yaşamalarına yardımcı olacak yollar bulmaktan keyif alıyorum. 
                Kendini işine adamış, dışa dönük ve takım oyuncusuyum. 
                İnsanlar beni, mükemmel iletişim becerilerine sahip, iyimser, kendi kendini motive eden bir takım oyuncusu olarak görüyor.
                 Son birkaç yıldır teknoloji endüstrisinde lider kalifikasyon, telefonla pazarlama ve müşteri hizmetleri alanlarında çalıştım. "
            </Content>
          </Paper>

    </div>

  <div class="card">
    <div class="card-header">
      Yaklaşan Görüşmeler
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>13.08.22 - Sektörün Son Durumu Hakkında </p>
        <footer class="blockquote-footer">Ayşe Yılmaz ile</footer>
      </blockquote>
    </div>
  </div>
  
  
  <div class="my-mentee">
    <h2>Menteelerim</h2>
    <hr>
    <div class="card-container d-flex flex-row flex-wrap">
        <Card style="width:200px; height: 200px; margin: 10px;">
          <Media class="card-media-square" aspectRatio="square">
            <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
              <p class="mdc-typography--headline6" style="margin: 0;">
                Ayşe Yılmaz
              </p>
              <p class="mdc-typography--subtitle2" style="margin: 0;">
                
              </p>
            </div>
          </Media>
        
        </Card>
    
        <div class="card-container ">
        <Card style="width:200px; height: 200px; margin:10px;">
          <Media class="card-media-square" aspectRatio="square">
            <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
              <p class="mdc-typography--headline6" style="margin: 0;">
                Kadir Ercan
              </p>
              <p class="mdc-typography--subtitle2" style="margin: 0;">
                
              </p>
            </div>
          </Media>
        </Card>
        
      </div>
    </div>
      
        
  </div>
    

  
  
  
  <style>
    /* These classes are only needed because the
      drawer is in a container on the page. */
   
      .paper-container{
        float: right;
        width: 60%;
        margin: 90px;
        margin-bottom: 50px;
        border-radius: 30px;
    }
    .drawer{
        margin-top: auto;
        margin-left: 7%;
        float: left;
        margin-right: 7%;
        margin-bottom: 80%;
        width: 200px;
        height: 200px;
        
    }

    nav{
        height: 40px;
        background-color: black;
    }

    .card{
        float: right;
        margin: 90px;
        margin-bottom: 20px;
        width: 60%;
        border-radius: 30px;
    }
 
  * :global(.card-media-square) {
    background-image: url(https://place-hold.it/100x100?text=square&fontsize=20);
    
  }

  .my-mentee{
    margin: 20px;
   
    padding-bottom: 50px;
   
    
  }
  </style>
  