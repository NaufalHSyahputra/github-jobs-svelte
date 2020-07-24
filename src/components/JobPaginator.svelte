<script>
  export let page;
  export let has_next_page;
</script>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    {#if page !== 1}
      <li class="page-item" on:click={() => (page -= 1)}>
        <a class="page-link" href="/#">Previous</a>
      </li>
      <li class="page-item" on:click={() => (page = 1)}>
        <a class="page-link" href="/#">1</a>
      </li>
    {/if}
    {#if page > 2}
      <li class="page-item disabled">
        <a class="page-link" href="/#">...</a>
      </li>
      <li class="page-item" on:click={() => (page -= 1)}>
        <a class="page-link" href="/#">{page - 1}</a>
      </li>
    {/if}
    <li class="page-item active">
      <a class="page-link" href="/#">{page}</a>
    </li>
    {#if has_next_page}
      <li class="page-item" on:click={() => (page += 1)}>
        <a class="page-link" href="/#">{page + 1}</a>
      </li>
      <li class="page-item" on:click={() => (page += 1)}>
        <a class="page-link" href="/#">Next</a>
      </li>
    {/if}
  </ul>
</nav>
