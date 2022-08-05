<script>
    export let itemLabel;
    export let highlighted;
</script>

<li
    class="autocomplete-items text-dark"
    class:autocomplete-active={highlighted}
    on:click
>
    {@html itemLabel}
</li>

<style>
    li.autocomplete-items {
        list-style: none;
        border-bottom: 1px solid #d4d4d4;
        z-index: -1;
        /*position the autocomplete items to be the same width as the container:*/
        top: 100%;
        left: 0;
        right: 0;
        padding: 10px;
        cursor: pointer;
        background-color: #fff;
    }
    li.autocomplete-items:hover {
        background-color: dodgerblue;
    }
    li.autocomplete-items:active {
        /*when navigating through the items using the arrow keys:*/
        background-color: DodgerBlue !important;
        color: #ffffff;
    }

    .autocomplete-active {
        /*when navigating through the items using the arrow keys:*/
        background-color: DodgerBlue !important;
        color: #ffffff;
    }
</style>
