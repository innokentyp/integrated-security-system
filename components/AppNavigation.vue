<template>
  <nav class="ui top fixed stackable menu" role="navigation" aria-label="main navigation">
    <nuxt-link v-for="(value, key, index) in pages" :key="index" :to="key == 'index' ? '/' : `/${key}`" :class="['item', color[index], { 'active': $route.name == key }]"><i class="home icon" v-if="key == 'index'"></i><span v-else>{{ value }}</span></nuxt-link>
  
    <div class="right menu">
      <a class="item" @click.prevent="signOutClick($event)">Выход</a>
    </div>
  </nav>
</template>

<script>
  import Vue from 'vue'
  import * as firebase from 'firebase'

  export default {
    data () {
      return {
        color: ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey']
      }
    },
    computed: {
      pages () {
        return Vue.pages
      }
    },
    methods: {
      signOutClick (e) {
        firebase.auth().signOut()
          .then(
            () => {
              // Sign-out successful.

              this.$router.push({ name: 'index' })
            }
          )
          .catch(
            (error) => {
              console.log(error)
            }
          )
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>