<script>
    import Carousel from "svelte-carousel";
    const specs = [
        {
            post_id: 1,
            title: "Tamamen Ücretsiz",
            image: "https://media.istockphoto.com/vectors/free-3d-speech-bubble-sign-vector-id1156404289?k=20&m=1156404289&s=612x612&w=0&h=jpzVSuwyf8D33nng1wyGe80GRj9B5r7RvWA2_rf2bvc=",
            description:
                "%100 ücretsiz olan bu platformda alanında uzman mentorlarımızla görüşebilirsiniz.",
        },
        {
            post_id: 2,
            title: "Alanında Uzman Mentorlar",
            image: "https://blog.hubspot.com/hubfs/characteristics-of-professional-salespeople.jpg",
            description:
                "Özel olarak seçtiğimiz uzmanlarımızla kariyer yolculuğunuza eşlik edelim.",
        },
        {
            post_id: 3,
            title: "Görüntülü Görüşebilirsiniz",
            image: "https://cdn.vox-cdn.com/thumbor/WGFkB4VXayGONz6k9Zaz5OTTEW8=/0x0:1024x652/1200x800/filters:focal(431x245:593x407)/cdn.vox-cdn.com/uploads/chorus_image/image/63362453/GVC_UI_50people_laptop_1024x652.0.png",
            description:
                "Eklediğimiz platform sayesinde görüntülü görüştüğünüz mentorlarımızla hiçbir zaman yalnız değilsiniz.",
        },
        {
            post_id: 4,
            title: "Kolay Kullanım",
            image: "https://static.vecteezy.com/system/resources/thumbnails/004/685/169/small/flat-style-design-illustration-icon-creative-technology-education-library-easy-access-information-concept-touch-screen-pad-ebook-library-books-map-pin-vector.jpg",
            description:
                "Tasarladığımız arayüz sayesinde içeriklerinize kolayca erişim imkanı",
        },
    ];
</script>

<Carousel
    autoplay
    autoplayDuration={5000}
    autoplayProgressVisible
    timingFunction="linear"
    dots={false}
    pauseOnFocus
>
    {#each specs as { title, image, description, post_id } (post_id)}
        <div class="card d-flex justify-content-center align-items-center">
            <img class="card-img-top" src={image} alt={title} />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                    {description}
                </p>
            </div>
        </div>
    {/each}
</Carousel>

<style>
    .card-img-top {
        width: 50%;
    }
</style>
