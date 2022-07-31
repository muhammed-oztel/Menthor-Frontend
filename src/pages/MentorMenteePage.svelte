<script>
    import Button from "@smui/button";
</script>

<div class="cotainer">
    <div class="row align-items-center vh-100">
        <div class="col-6 mx-auto">
            <div class="card card-rounded shadow border-2">
                <div class="card-body flex-column-center" >
                    <div class="row">
                        <div class="col mb-3 text-muted">
                            <h1 class="card-title mb-2">Bağlantım</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 text-center">
                            <h2>Mentor</h2>
                            <img
                                class="user-img rounded-circle img-fluid"
                                src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/348.png&w=350&h=254"
                                alt="user-profile"
                            />
                        </div>

                        <div class="col-4 mx-auto mt-5">
                            <div class="row justify-content-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100"
                                    height="100"
                                    fill="currentColor"
                                    class="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100"
                                    height="100"
                                    fill="currentColor"
                                    class="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <Button
                                    color="primary"
                                    variant="raised"
                                    style="max-width: 150px; text-transform: none;"
                                    >Görüşme başlat</Button
                                >
                            </div>
                        </div>
                        <div class="col-4 text-center">
                            <h2>Mentee</h2>
                            <img
                                class="user-img rounded-circle img-fluid"
                                src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4678.png&w=350&h=254"
                                alt="user-profile"
                            />
                        </div>
                    </div>
                    <div class="row" > 
                        <div class="col mt-5 mb-3 text-muted">
                            <h2>Menteenin Yönetimi</h2>
                        </div>
                        <div class="row text-center mx-auto align-items-center">
                            <div class="col-4">
                                <img
                                    class="user-img rounded-circle img-fluid"
                                    src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4678.png&w=350&h=254"
                                    alt="user-profile"
                                />
                            </div>
                            <div class="col-4 ">
                                <Button
                                    color="primary"
                                    variant="raised"
                                    style="text-transform: none;"
                                    >Profili Görüntüle</Button
                                >
                            </div>
                            <div class="col-4">
                                <Button
                                    color="primary"
                                    variant="raised"
                                    style=" text-transform: none;"
                                    >Mentorluk Hizmetini Sonlandır</Button
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
