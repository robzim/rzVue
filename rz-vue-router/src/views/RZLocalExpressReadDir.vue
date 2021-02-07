<template>
  <div class="rzlocalexpressreaddirsync">
    <h1>This is data fetched from the localhost port 30000</h1>
    <!-- <h3>Results = {{ results }} </h3> -->
    <ul v-for="item in results" :key="item">
        <li>
                  {{ item }}
        </li>
    </ul>
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
            fetch('http://localhost:3000/api/ls')
            .then(response => response.json())
            .then(json => this.results = json.results)
            .catch(err => console.log('Request Failed', err)); // Catch errors
          }
      }
      }
</script>







