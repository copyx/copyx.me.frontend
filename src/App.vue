<template>
  <div id="app">
    <button v-on:click="requestTestToExpress">Express 요청 테스트</button><br>
    <pre>{{ content }}</pre>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
      return {
          content: 'Result:\n'
      }
  },
  components: {
  },
  methods: {
    requestTestToExpress: async function () {
      const res = await this.$http.get('/');
      this.content += '\n' + res.data;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
