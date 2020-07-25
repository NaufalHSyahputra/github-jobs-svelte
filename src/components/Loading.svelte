<script>
    export let need_card;
</script>
{#if need_card}
<div class="card">
    <div class="d-flex justify-content-center">
      <img src="assets/img/91.gif" alt="Loading" />
    </div>
</div>
{:else}
<div class="d-flex justify-content-center">
    <img src="assets/img/91.gif" alt="Loading" />
</div>
{/if}