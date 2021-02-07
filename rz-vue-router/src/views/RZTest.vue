<template>
  <div class="rztest">
    <h1>This is an rztest page with data fetched from the web </h1>
    <h3>Results = {{ results }} </h3>
    <ul v-for="item in results" :key="item">
        <li>
                  {{ item }}
        </li>
    </ul>
    <h2>  {{ results.name.title }} {{ results.name.first }}  {{ results.name.last }} </h2>
    <h3>   {{ results.location.street.number }} {{ results.location.street.name }} </h3>
    <h3>    {{ results.location.city }}  {{ results.location.state }} {{ results.location.country }}  {{ results.location.postcode }} </h3>
    <img :src="results.picture.medium">
  </div>
</template>

<script>
  module.exports = {
      data() {
        return {
          results: {}
        }
      },
      mounted() {
           {
            fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(json => this.results = json.results[0])
            .catch(err => console.log('Request Failed', err)); // Catch errors
          }
      }
      }
</script>







