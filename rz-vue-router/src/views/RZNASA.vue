<template>
  <div class="rznasa">
    <h1>Data from NASA API</h1>
    <table class="table table-primary">
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in results" :key='index'>
            <td>
                {{ item.name }}   
            </td>
            <td> {{ item.absolute_magnitude_h }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  module.exports = {
      data() {
        return {
          results: "Loading ....."
        }
      },
      mounted() {
           {
            var apiKey = 'yszygBPVHYv1Lnt7vPbx66hQz0Ea4gNuEJkhogYp';
            var url = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + apiKey;
            fetch(url)
            .then(response => response.json())
            .then(json => this.results = json.near_earth_objects.slice(1, 20).filter(function (el) {
              return el != null;
            }))
            .then(console.log(this.results))
            .catch(err => console.log('Request Failed', err)); // Catch errors
          }
      }
      }
</script>







