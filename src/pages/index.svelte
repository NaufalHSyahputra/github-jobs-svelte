<script>
  import { get } from "./../plugins/axios";
  import JobPaginator from "./../components/JobPaginator.svelte";
  import Job from "./../components/Job.svelte";
  import Filter from "./../components/Filter.svelte";

  let old_page = 1;
  let page = 1;
  let has_next_page = true;

  let desc = "";
  let location = "";
  let full_time = false;

  let promises = getData();
  let jobs = [];

  $: if (page !== old_page) {
    promises = getData();
    old_page = page;
  }

  async function getData() {
    const data = await get("/positions.json", {
      page,
      desc,
      location,
      full_time,
    });
    const checkPage = await checkNextPage();
    return data.data;
  }

  const checkNextPage = async () => {
    await get("/positions.json", {
      page: page + 1,
      desc,
      location,
      full_time,
    }).then((res) => {
      has_next_page = res.data.length > 0 ? true : false;
    });
  };

  const submitFilter = async () => {
    promises = getData();
  };
</script>

<Filter bind:desc bind:location bind:full_time on:submitFilter={submitFilter} />
<br />
{#await promises}
  <div class="d-flex justify-content-center">
    <img src="assets/img/91.gif" alt="Loading" />
  </div>
{:then jobs}
  {#if jobs.length > 0}
    <JobPaginator bind:page {has_next_page} />
    {#each jobs as job}
      <Job {job} />
    {/each}
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
