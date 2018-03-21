<template>
  <section class="ui stackable centered grid container">
    <div class="row">
      <div class="column center aligned">
        <app-logo/>
        <h4 class="ui header">integrated-security-system</h4>
        <p>Nuxt.js project</p>
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
      <div class="eight wide column">
        <form id="form-sign-in-out" method="post" novalidate :class="['ui', 'form', { 'loading': loading }]" @submit.prevent="singInSubmit($event)">
          <p>Введите адрес электронной почты и пароль</p>
          <div class="field">
            <label>E-mail</label>
            <input type="email" name="email" ref="email" :disabled="authenticated" :placeholder="email">
          </div>
          <div class="field">
            <label>Пароль</label>
            <input type="password" name="password" autocomplete="new-password" :disabled="authenticated">
          </div>

          <div class="ui error message"></div>

          <div class="ui negative message" v-if="error">
            <div class="header">{{ error.code }}</div>
            <p>{{ error.message }}</p>
          </div>

          <button type="submit" class="ui primary submit button" :disabled="authenticated">Войти в систему</button>
          <button type="button" class="ui yellow button" :disabled="!authenticated" @click="signOutClick($event)">Выход</button>
        </form>          
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
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
        loading: false,
        error: null
      }
    },
    computed: {
      ...mapGetters([ 'authenticated', 'email' ])
    },
    methods: {
      singInSubmit (e) {
        this.error = null

        this.loading = true

        firebase.auth().signInWithEmailAndPassword(e.target.elements.email.value, e.target.elements.password.value)
          .then(
            (user) => {
              // Sign-in successful.
              e.target.reset()

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

      this.$nextTick(
        () => { 
          if (!this.authenticated) this.$refs.email.focus()
        }  
      )
    }
  }
</script>

<style lang="scss" scoped>
  input[name='email']::placeholder {
    color: green;
  }
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
