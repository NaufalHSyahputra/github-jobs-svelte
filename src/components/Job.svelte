<script>
  import { goto } from '@sveltech/routify'
  export let job;
</script>

<div class="card text-white bg-secondary" on:click={$goto(`/job/${job.id}`)} style="cursor: pointer;">
  <div class="card-body">
    <h5 class="card-title">
      {job.title} - {job.company}
      <img
        src={job.company_logo}
        alt="Company Logo"
        class="rounded float-right"
        height="50" />
    </h5>
    <h6 class="card-subtitle text-muted mb-2">{job.created_at}</h6>
    <p class="card-text">
      <span class="badge badge-primary">{job.type}</span>
      <span class="badge badge-primary mr-2">{job.location}</span>
    </p>
  </div>
</div>
<br />
