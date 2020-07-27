<script>
  import { url } from "@sveltech/routify";
  export let company;
  export let company_logo;
  export let company_slug;
  export let created_at;
  export let location;
  export let type;
</script>

<div class="card">
  <div class="card-header text-center">Job Specification</div>
  <div class="card-body">
    <h4>
      <center>{company}</center>
    </h4>
    <div class="text-center">
      <img src={company_logo} class="rounded company-logo" alt="Company Logo" />
    </div>
    <center>
      <a href={$url(`/company/${company_slug}`)}>
        View other job from this company
      </a>
    </center>
    <br />
    <table class="table table-hover">
      <tbody>
        <tr>
          <th scope="row">Created at</th>
          <td>{created_at}</td>
        </tr>
        <tr>
          <th scope="row">Location</th>
          <td>{location}</td>
        </tr>
        <tr>
          <th scope="row">Type</th>
          <td>{type}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
