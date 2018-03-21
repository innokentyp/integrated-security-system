<template>
  <section class="ui grid container">
    <div class="row">
      <div class="column">
        <p>{{ pages[$route.name] }}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  export default {
    computed: {
      pages () {
        return Vue.pages
      }
    },
    transition (to, from) {
      return Vue.pageTransition(to, from) 
    }
  }
</script>

<style lang="scss" scoped>
  /*
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
  */
</style>