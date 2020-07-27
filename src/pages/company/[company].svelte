<script>
  import { get } from "../../plugins/axios";
  import { Job, JobPaginator, Loading } from "../../components/";
  export let company;
  let old_page = 1;
  let page = 1;
  let has_next_page = true;
  let promises = getData();
  $: if (page !== old_page) {
    promises = getData();
    old_page = page;
  }

  async function getData() {
    const data = await get(`/companies/${company}.json`, {
      page,
    });
    await checkNextPage();
    return data.data;
  }

  const checkNextPage = async () => {
    await get(`/companies/${company}.json`, {
      page: page + 1,
    }).then((res) => {
      has_next_page = res.data.length > 0 ? true : false;
    });
  };
</script>

<br />
{#await promises}
  <Loading />
{:then jobs}
  <h2 class="text-center">All jobs from {company.replace('-', ' ')}.</h2>
  {#if jobs.length > 0}
    <JobPaginator bind:page {has_next_page} />
    {#each jobs as job}
      <Job {job} />
    {/each}
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
