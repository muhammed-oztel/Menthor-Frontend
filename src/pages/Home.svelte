<script>
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";
    import Splide from "../components/Splide.svelte";
    import TypeWriter from "../components/TypeWriter.svelte";
    let mentors = [
        {
            id: 1,
            name: "John Doe",
            title: "Web Developer",
            image: "https://i.pravatar.cc/150?img=3",
        },
        {
            id: 2,
            name: "Jane Doe",
            title: "Web Designer",
            image: "https://i.pravatar.cc/150?img=4",
        },
        {
            id: 3,
            name: "Jack Doe",
            title: "Web Designer",
            image: "https://i.pravatar.cc/150?img=5",
        },
        {
            id: 4,
            name: "Jill Doe",
            title: "Web Developer",
            image: "https://i.pravatar.cc/150?img=6",
        },
        {
            id: 5,
            name: "John Doe",
            title: "Web Developer",
            image: "https://i.pravatar.cc/150?img=7",
        },
        {
            id: 6,
            name: "Jane Doe",
            title: "Web Designer",
            image: "https://i.pravatar.cc/150?img=8",
        },
        {
            id: 7,
            name: "Jack Doe",
            title: "Web Designer",
            image: "https://i.pravatar.cc/150?img=9",
        },
        {
            id: 8,
            name: "Jill Doe",
            title: "Web Developer",
            image: "https://i.pravatar.cc/150?img=10",
        },
        {
            id: 9,
            name: "John Doe",
            title: "Web Developer",
            image: "https://i.pravatar.cc/150?img=11",
        },
    ];
</script>

<Navbar />
<div class="mb-6" />
<main>
    <div class="container">
        <div
            class="d-flex flex-row mb-3 justify-content-between align-items-center"
        >
            <div class="row">
                <h1 class="display-2 fw-bold">
                    Sektörün ileri gelen mentorları sizlere yardım etmek için
                    bekliyor
                </h1>
                <p class="display-6 text-muted">
                    Mentorunla <b>birebir</b> görüşme şansını yakala
                </p>
                <p class="display-6 text-muted">
                    Önde gelen bir çok sektörde mentorluk desteği sizleri
                    bekliyor
                </p>
                <p class="display-6 text-muted">
                    <TypeWriter />
                </p>
            </div>
            <div class="mb-3 me-3">
                <Splide {mentors} interval={3000} />
            </div>
            <div class="mb-3 me-3">
                <Splide {mentors} interval={4000} />
            </div>
            <div class="mb-3">
                <Splide {mentors} interval={5000} />
            </div>
        </div>
    </div>
</main>
<Footer />

<style>
    main {
        width: 100%;
        height: 100%;
    }
    .mb-6 {
        margin-bottom: 10rem;
    }
</style>
