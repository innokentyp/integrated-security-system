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
    <div class="row">    
      <div class="column">
        <div class="ui segment">
          <form class="ui form" @submit.prevent="singOutSubmit($event)" v-if="authenticated">
            <h4 class="ui dividing header">Завершение работы с системой</h4>
            <button type="submit" class="ui submit button">Submit</button>
          </form>

          <form class="ui form" @submit.prevent="singInSubmit($event)" v-else>
            <h4 class="ui dividing header">Вход в систему</h4>
            <div class="field">
              <label>E-mail</label>
              <input placeholder="Адрес электронной почты" type="email" v-model="email">
            </div>
            <div class="field">
              <label>Пароль</label>
              <input type="password" v-model="password">
            </div>
           
            <button type="submit" class="ui submit button">Submit</button>
          </form>          
        </div>

        <div class="ui negative message" v-if="error">
          <i class="close icon"></i>
          <div class="header">{{ error.code }}</div>
          <p>{{ error.message }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import * as firebase from 'firebase'

  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    },
    transition (to, from) {
      return Vue.pageTransition(to, from) 
    },
    props: ['test'],
    data () {
      return {
        email: 'innokentypolyakov@gmail.com',
        password: '123456',
        error: null,

        authenticated: false 
      }
    },
    computed: {
      currentUser () {
        return this.$store.state.user
      }
    },
    methods: {
      singInSubmit (e) {
        this.error = null

        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(
            (user) => {
              // Sign-in successful.
            }
          )
          .catch(
            (error) => {
              this.error = error
            }
          )
      },
      singOutSubmit (e) {
        this.error = null

        firebase.auth().signOut()
          .then(
            () => {
              // Sign-out successful.
            }
          )
          .catch(
            (error) => {
              this.error = error
            }
          )
      }
    },
    created () {
      console.log('index:created')

      // Get the currently signed-in user
      firebase.auth().onAuthStateChanged(
        (user) => {
          console.log(`${performance.now()} firebase:onAuthStateChanged`)

          this.authenticated = !!user
        }
      )
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
