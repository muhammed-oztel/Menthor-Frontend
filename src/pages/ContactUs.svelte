<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import Button, { Label } from '@smui/button';
    import HelperText from '@smui/textfield/helper-text';
    import Textfield from '@smui/textfield';
    import CharacterCounter from '@smui/textfield/character-counter';
    import Navbar from "../components/Navbar.svelte";
    import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
    import Check from "svelte-material-icons/Check.svelte";
    let value = '';
    let NameValue="";
    let EmailValue="";
    let SubjectValue="";
    let clicked=0;
</script>


<Navbar />
    <div class="container">
        <div class="columns-margins" style="float: left; width: 50%; padding-left: 80px">
            <h1>Bizimle İletişime Geç</h1>
            <Textfield
            class="shaped-outlined"
            variant="outlined"
            bind:value={NameValue}
            label="İsim">
                <HelperText slot="helper">İsminizi Giriniz</HelperText>
            </Textfield>
            <Textfield
            class="shaped-outlined"
            variant="outlined"
            bind:value={EmailValue}
            label="E-posta">
                <HelperText slot="helper">E-postanızı Giriniz</HelperText>
            </Textfield>
            <Textfield
            class="shaped-outlined"
            variant="outlined"
            bind:value={SubjectValue}
            label="Konu">
                <HelperText slot="helper">Konu</HelperText>
            </Textfield>
            <Textfield class= "shaped-outlined" textarea input$maxlength={100} bind:value label="Açıklama">
            <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
            </Textfield>
            <br>
            <br>
            <div>
                <Button
                on:click={() => clicked++}
                variant="outlined"
                class="button-shaped-round"
                style=" border-radius: 25px; padding: 20px;"
                >
                    <Label>Gönder</Label>
                </Button>
            </div>
        </div>
        <div class="Right" style="margin-top: 50px;" >
            <List threeLine nonInteractive>
              <Item>
                <span class="material-symbols-outlined" style="width: 10%; float: left; padding-bottom: 20px">pin_drop</span>
                <Text style="float: right;">
                  <PrimaryText>Adres</PrimaryText>
                  <SecondaryText>Ankara</SecondaryText>
                </Text>
              </Item>
              <Item>
                <span class="material-symbols-outlined" style="width: 10%; float: left; padding-bottom: 15px">mail</span>
                <Text style="float: right;">
                  <PrimaryText> 
                  E-posta</PrimaryText>
                  <SecondaryText>menthor@conctactus.com</SecondaryText>
                </Text>
              </Item>
              <Item>
                <span class="material-symbols-outlined" style="width: 10%; float: left; padding-bottom: 15px">call</span>
                <Text style="float: right;">
                  <PrimaryText>Telefon</PrimaryText>
                  <SecondaryText>320 900 18</SecondaryText>
                </Text>
      
              </Item>
            </List>
        </div>
</div>



<style>
    .container{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .container .Right{
        
        border-radius: 25px;
        padding: 20px;
        width: 250px;
        height: 350px;
        background-color: rgba(100, 94, 94, 0.76);
        float: left; 
        width: 40%;
        border-radius: 30px;
        box-shadow: rgba(54, 48, 52, 0.4) 5px 5px, rgba(36, 30, 34, 0.3) 10px 10px, rgba(41, 33, 38, 0.2) 15px 15px, rgba(27, 11, 21, 0.1) 20px 20px, rgba(17, 4, 13, 0.05) 25px 25px;
    }
   
    *
      :global(.shaped-outlined
        .mdc-notched-outline
        .mdc-notched-outline__leading) {
      border-radius: 28px 0 0 28px;
      width: 28px;
    }
    *
      :global(.shaped-outlined
        .mdc-notched-outline
        .mdc-notched-outline__trailing) {
      border-radius: 0 28px 28px 0;
    }
    * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
      max-width: calc(100% - 28px * 2);
    }
    *
      :global(.shaped-outlined.mdc-text-field--with-leading-icon:not(.mdc-text-field--label-floating)
        .mdc-floating-label) {
      left: 16px;
    }
    * :global(.shaped-outlined + .mdc-text-field-helper-line) {
      padding-left: 32px;
      padding-right: 28px;
    }
  </style>



