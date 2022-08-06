<script>
    import Result from "./Result.svelte";
    import { searchMentor } from "../services/search";

    let searchResult = [];

    let filteredResults = [];

    const filterSearch = () => {
        let storageArr = [];
        if (inputValue) {
            Promise.resolve(searchMentor(inputValue))
                .then((result) => {
                    searchResult = result;
                    searchResult.forEach((item) => {
                        if (item) {
                            storageArr = [
                                ...storageArr,
                                item.name + " " + item.surname,
                            ];
                        }
                    });
                    filteredResults = storageArr;
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            filteredResults = [];
        }
    };

    let inputValue = "";

    $: if (!inputValue) {
        filteredResults = [];
        hiLiteIndex = null;
    }

    const setInputVal = (result) => {
        inputValue = result;
        filteredResults = [];
        hiLiteIndex = null;
        document.querySelector("#search-input").focus();
    };

    const submitValue = () => {
        try {
            if (inputValue) {
                console.log(inputValue);
                //Profil Sayfasına Gidilen Fonksiyon olacak
                console.log(inputValue);
            } else {
                console.log("No value");
            }
        } catch (error) {
            console.log(error);
        }
    };

    let hiLiteIndex = null;

    const navigateList = (e) => {
        if (
            e.key === "ArrowDown" &&
            hiLiteIndex <= filteredResults.length - 1
        ) {
            hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
        } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
            hiLiteIndex === 0
                ? (hiLiteIndex = filteredResults.length - 1)
                : (hiLiteIndex -= 1);
        } else if (e.key === "Enter") {
            setInputVal(filteredResults[hiLiteIndex]);
        } else {
            return;
        }
    };
</script>

<svelte:window on:keydown={navigateList} />

<form role="search" autocomplete="off" on:submit|preventDefault={submitValue}>
    <div class="autocomplete">
        <input
            id="search-input"
            bind:value={inputValue}
            on:input={filterSearch}
            class="form-control me-2 py-2"
            type="search"
            placeholder="Mentorlarınızı Arayın"
            aria-label="Search"
        />
    </div>

    <button class="btn btn-light rounded-circle" type="submit">
        <i class="bi bi-search" />
    </button>

    {#if filteredResults.length > 0}
        <ul class="px-2" id="autocomplete-items-list">
            {#each filteredResults as country, i}
                <Result
                    itemLabel={country}
                    highlighted={i === hiLiteIndex}
                    on:click={() => setInputVal(country)}
                />
            {/each}
        </ul>
    {/if}
</form>

<style>
    div.autocomplete {
        position: relative;
        display: inline-block;
        width: 500px;
    }
    input {
        border: 1px solid transparent;
        background-color: #f1f1f1;
        padding: 10px;
        font-size: 16px;
        margin: 0;
    }

    #autocomplete-items-list {
        position: absolute;
        z-index: 99;
        margin: auto;
        width: 500px;
    }
</style>
