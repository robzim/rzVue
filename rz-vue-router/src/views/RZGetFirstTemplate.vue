<template>
  <div class="rz_first_template">
    <a href="http://localhost:3000/api/first_template"> Localhost web page from express.js </a>
    <h1>This hits localhost:3000/api/first_template, a web page.  Replace with json api endpoint.</h1>
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
            fetch('http://localhost:3000/api/first_template')
            .then(response => response.json())
            .then(json => this.results = json.results)
            .catch(err => console.log('Request Failed', err)); // Catch errors
          }
      }
      }
</script>







