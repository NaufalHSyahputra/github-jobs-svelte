<script>
  import { onMount } from "svelte";
  import { get } from "../../plugins/axios";
  export let job_id;

  let job = {};

  let promise = getData();

  async function getData() {
    const res = await get(`/positions/${job_id}.json`, {});
    job = res.data;
  }
</script>

<div class="row">
  <div class="col-md-8">
    <div class="card">
      <div class="card-header text-center">Job Detail</div>
      <div class="card-body">
        {#if Object.keys(job).length === 0}
          <div class="d-flex justify-content-center">
            <img src="/assets/img/91.gif" alt="Loading" />
          </div>
        {:else}
          <div class="row">
            <div class="col-md-12">
              <h4>{job.title} ( {job.company} )</h4>
              <hr />
            </div>
            <div class="col-md-12">
              <p>
                {@html job.description}
              </p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header text-center">Job Specification</div>
      <div class="card-body">
        {#if Object.keys(job).length === 0}
          <div class="d-flex justify-content-center">
            <img src="/assets/img/91.gif" alt="Loading" />
          </div>
        {:else}
          <h4>
            <center>{job.company}</center>
          </h4>
          <div class="text-center">
            <img src={job.company_logo} class="rounded" alt="Company Logo" />
          </div>
          <center>
            <a href="/#">View other job from this company</a>
          </center>
          <br />
          <table class="table table-hover">
            <tbody>
              <tr>
                <th scope="row">Created at</th>
                <td>{job.created_at}</td>
              </tr>
              <tr>
                <th scope="row">Location</th>
                <td>{job.location}</td>
              </tr>
              <tr>
                <th scope="row">Type</th>
                <td>{job.type}</td>
              </tr>
            </tbody>
          </table>
        {/if}
      </div>
    </div>
    <br />
    <div class="card">
      <div class="card-header text-center">How to Apply</div>
      <div class="card-body">
        {#if Object.keys(job).length === 0}
          <div class="d-flex justify-content-center">
            <img src="/assets/img/91.gif" alt="Loading" />
          </div>
        {:else}
          {@html job.how_to_apply}
        {/if}
      </div>
    </div>
  </div>
</div>
