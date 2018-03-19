<template>
  <div class="app">
    <app-navigation/>
    <nuxt/>
  </div>
</template>

<script>
  import * as firebase from 'firebase'
  import AppNavigation from '~/components/AppNavigation.vue'

  export default {
    components: {
      AppNavigation
    },
    created () {
      console.log('default:created')

      // Initialize Firebase
      // TODO: Replace with your project's customized code snippet
      if (!firebase.apps.length) {
        const config = {
          apiKey: 'AIzaSyDBr5JE7eH_kCk0I3l4gbDMxt5OIVaJUOs',
          authDomain: 'integrated-security-system.firebaseapp.com',
          databaseURL: 'https://integrated-security-system.firebaseio.com',
          projectId: 'integrated-security-system',
          storageBucket: 'integrated-security-system.appspot.com',
          messagingSenderId: '782507733260'
        }
      
        firebase.initializeApp(config)

        // To apply the default browser preference instead of explicitly setting it.
        firebase.auth().useDeviceLanguage()
      }      
    }
  }
</script>

<style lang="scss" scoped>
  .app {
    padding-top: 320px;

    @media screen and (min-width: 768px) {
      padding-top: 40px;
    }    
  }

  /*
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
  */
</style>
