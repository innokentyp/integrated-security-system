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
        <form :class="['ui', 'form', { 'loading': loading }, { 'success': authenticated }, { 'error': error }]" @submit.prevent="singInSubmit($event)">
          <div class="field">
            <label>E-mail</label>
            <input placeholder="Адрес электронной почты" type="email" v-model="email" :disabled="authenticated">
          </div>
          <div class="field">
            <label>Пароль</label>
            <input type="password" v-model="password" :disabled="authenticated">
          </div>

          <div class="ui error message" v-if="error">
            <div class="header">{{ error.code }}</div>
            <p>{{ error.message }}</p>
          </div>

          <button type="submit" class="ui primary submit button" :disabled="authenticated">Войти в систему</button>
          <button type="button" class="ui button" :disabled="!authenticated" @click="signOutClick($event)">Выход</button>
        </form>          
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import * as firebase from 'firebase'

  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    },
    transition (to, from) {
      return Vue.pageTransition(to, from) 
    },
    data () {
      return {
        email: null,
        password: null,

        loading: false,
        error: null
      }
    },
    computed: {
      ...mapState ([ 'authenticated' ])
    },
    methods: {
      singInSubmit (e) {
        this.error = null
        this.loading = true

        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(
            (user) => {
              // Sign-in successful.
              this.password = null

              this.loading = false
            }
          )
          .catch(
            (error) => {
              this.error = error
              this.loading = false
            }
          )
      },
      signOutClick (e) {
        $('.confirm-sign-out').modal('show')
      }
    },
    mounted () {
      console.log('index:mounted')

      this.email = this.$store.state.email ? this.$store.state.email : 'innokentypolyakov@gmail.com'
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
