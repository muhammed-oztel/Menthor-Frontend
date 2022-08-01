<script>
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";
    let panel1Open = false;
    let panel2Open = false;
    let panel3Open = false;
    let panel4Open = false;
</script>

<h1>Sıkça Sorulan Sorular</h1>
<div class="mb-3 mt-3">
    <Accordion>
        <Panel bind:open={panel1Open}>
            <Header>
                <h5>Mentor Nedir?</h5>
                <IconButton slot="icon" toggle pressed={panel1Open}>
                    <Icon class="material-icons" on>expand_less</Icon>
                    <Icon class="material-icons">expand_more</Icon>
                </IconButton>
            </Header>
            <Content>
                Mentor, kendisinden daha az deneyimi olan bireylere danışmanlık
                yapan ve motivasyon sağlayan kişidir. Fransızca kökenli olan
                mentor kelimesinin Türkçe karşılığı Türk Dil Kurumu (TDK)
                tarafından “yönder” olarak belirlenmiştir. Mentor kelimesinin
                yerine akıl hocası ve danışman kelimeleri de kullanılabilir.
            </Content>
        </Panel>
    </Accordion>
</div>
<div class="mb-3">
    <Accordion>
        <Panel bind:open={panel2Open}>
            <Header>
                <h5>Mentee Nedir?</h5>
                <IconButton slot="icon" toggle pressed={panel1Open}>
                    <Icon class="material-icons" on>expand_less</Icon>
                    <Icon class="material-icons">expand_more</Icon>
                </IconButton>
            </Header>
            <Content>
                Yeni girdiği sektörle ilgili bilgi, beceri ve tavır geliştirmek
                isteyen, ya da halihazırda bulunduğu konumda bir problemle
                karşılaşıp en verimli şekilde nasıl giderebileceğini merak eden,
                veya yeni aldığı bir kararla ilgili olası sonuçları hesaplayıp
                en başından oluşabilecek problemleri engellemek isteyen, bunun
                için bir mentora başvuran kişiye mentee (menti) denir.
            </Content>
        </Panel>
    </Accordion>
</div>
<div class="mb-3">
    <Accordion>
        <Panel bind:open={panel3Open}>
            <Header>
                <h5>Mentorluk hizmeti nasıl alınır?</h5>
                <IconButton slot="icon" toggle pressed={panel1Open}>
                    <Icon class="material-icons" on>expand_less</Icon>
                    <Icon class="material-icons">expand_more</Icon>
                </IconButton>
            </Header>
            <Content>
                Sistemimize kayıt olduktan sonra yönlendirildiğin ekranda yapmış
                olduğun seçimler doğrultusunda ilgili alanlara sahip bir mentor
                ile sistem tarafından eşleştirme yapılacaktır.
            </Content>
        </Panel>
    </Accordion>
</div>
<div class="mb-3">
    <Accordion>
        <Panel bind:open={panel4Open}>
            <Header>
                <h5>Neden Başvurmalıyım?</h5>
                <IconButton slot="icon" toggle pressed={panel1Open}>
                    <Icon class="material-icons" on>expand_less</Icon>
                    <Icon class="material-icons">expand_more</Icon>
                </IconButton>
            </Header>
            <Content>
                Sistemimize kayıt olduktan sonra yönlendirildiğin ekranda yapmış
                olduğun seçimler doğrultusunda ilgili alanlara sahip bir mentor
                ile sistem tarafından eşleştirme yapılacaktır.
            </Content>
        </Panel>
    </Accordion>
</div>

<style>
</style>
