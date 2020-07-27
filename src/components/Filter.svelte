<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function submitFilter() {
    dispatch("submitFilter");
  }

  function resetFilter() {
    dispatch("resetFilter");
  }
  export let desc;
  export let location;
  export let full_time;
</script>

<div class="card">
  <div class="card-header">Filter Jobs</div>
  <div class="card-body">
    <div class="form-row align-items-center">
      <div class="col-sm-5 my-1">
        <label for="inlineFormInputName">Job Description</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-briefcase" />
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Filter by title, benefits, companies, expertise"
            bind:value={desc} />
        </div>
      </div>
      <div class="col-sm-5 my-1">
        <label for="inlineFormInputGroupUsername">Location</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-map-marked-alt" />
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Filter by city, state, zip code or country"
            bind:value={location} />
        </div>
      </div>
      <div class="col-sm-2 my-1 mt-4">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={full_time} />
          <label class="form-check-label">Full Time Only</label>
        </div>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <div class="row float-right">
      <div class="col-md-6">
        <button class="btn btn-secondary float-right" on:click={resetFilter}>
          Reset
        </button>
      </div>
      <div class="col-md-6">
        <button class="btn btn-success float-right" on:click={submitFilter}>
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
