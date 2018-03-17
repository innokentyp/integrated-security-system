<template>
  <section class="ui grid container">
    <div class="row">
      <div class="column center aligned">
        <app-logo/>
        <h1 class="ui header">integrated-security-system</h1>
        <h2 class="ui header">Nuxt.js project</h2>
        <div class="ui compact menu">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="item">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="item">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    },
    transition (to, from) {
      return Vue.pageTransition(to, from) 
    },
    mounted () {

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
