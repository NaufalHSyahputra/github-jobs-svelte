<script>
    export let title;
    export let company;
    export let description;
</script>
<div class="card">
    <div class="card-header text-center">Job Detail</div>
    <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <h4>{title} ( {company} )</h4>
            <hr />
          </div>
          <div class="col-md-12">
            <p>
              {@html description}
            </p>
          </div>
        </div>
    </div>
  </div>