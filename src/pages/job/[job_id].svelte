<script>
  import { onMount } from "svelte";
  import { get } from "../../plugins/axios";
  import {
    ApplyCard,
    DescriptionCard,
    SpecificationCard,
  } from "./../../components/SingleJob";
  import Loading from "../../components/Loading.svelte";
  export let job_id;

  let job = {};

  let promise = getData();

  async function getData() {
    const res = await get(`/positions/${job_id}.json`, {});
    job = res.data;
    job = {
      ...job,
      company_slug: job.company.replace(" ", "-"),
    };
    console.log(job);
  }
</script>

<div class="row">
  <div class="col-md-8">
    {#if Object.keys(job).length === 0}
      <Loading need_card={true} />
    {:else}
      <DescriptionCard
        title={job.title}
        description={job.description}
        company={job.company} />
    {/if}
  </div>
  <div class="col-md-4">
    {#if Object.keys(job).length === 0}
      <Loading need_card={true} />
    {:else}
      <SpecificationCard
        company_slug={job.company_slug}
        company_logo={job.company_logo}
        created_at={job.created_at}
        company={job.company}
        location={job.location}
        type={job.type} />
    {/if}
    <br />
    {#if Object.keys(job).length === 0}
      <Loading need_card={true} />
    {:else}
      <ApplyCard how_to_apply={job.how_to_apply} />
    {/if}
  </div>
</div>
