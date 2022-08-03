<script lang="ts">
    import Textfield from '@smui/textfield';
    import CharacterCounter from '@smui/textfield/character-counter';
    let value = '';
  </script>

<div class="contact-us">

    <h2>Bizimle İletişime Geç</h2>
    <p>Bize iletmek istediğiniz bilgileri giriniz.</p> <br/><br/>

    <Textfield textarea input$maxlength={100} bind:value label="Detaylar">
        <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
      </Textfield>
    
    <!--
    <Form on:submit={handleSubmit}>

        <FormGroup>
            <TextInput labelText="İsim" name="name" 
                on:change={handleChange} bind:value={$form.name}/>
        </FormGroup>
    
        <FormGroup>
            <TextInput labelText="Email" name="email" type="email" 
            on:change={handleChange} bind:value={$form.email}/>
        </FormGroup>
    
        
        <FormGroup>
            <TextArea labelText="Mesajınız" name="message" type="textarea"
            on:change={handleChange} bind:value={$form.message}/>
        </FormGroup>
  
        <Button type="submit" disabled={$isSubmitting}>Kaydet</Button>
    </Form>
    -->
</div>

