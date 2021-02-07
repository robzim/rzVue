export default {
    name: "get-request-async-await",
    data() {
      return {
        totalVuePackages: null
      };
    },
    async created() {
      // GET request using fetch with async/await
      const response = await fetch("https://api.npms.io/v2/search?q=vue");
      const data = await response.json();
      this.totalVuePackages = data.total;
    }
};
