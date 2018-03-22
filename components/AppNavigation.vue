<template>
  <nav class="ui top fixed stackable inverted small menu" role="navigation" aria-label="main navigation">
    <nuxt-link v-for="(value, key, index) in pages" :key="index" :to="key == 'index' ? '/' : `/${key}`" :class="['item', color[index], { 'active': $route.name == key }]"><i class="home icon" v-if="key == 'index'"></i><span v-else>{{ value }}</span></nuxt-link>
  
    <div class="right menu" v-show="authenticated">
      <div class="ui dropdown link item">
        <i class="user icon"></i> <span>{{ email ? email : 'Анонимный' }}</span> <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item">English</a>
          <a class="item">Russian</a>
          <a class="item">Spanish</a>
          <div class="divider"></div>
          <a class="item" @click.prevent="signOutClick($event)">Выход</a>
        </div>
      </div>
    </div>  
  </nav>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        color: ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey']
      }
    },
    computed: {
      ...mapGetters([ 'authenticated', 'email' ]),

      pages () {
        return Vue.pages
      }
    },
    methods: {
      signOutClick (e) {
        $('.confirm-sign-out').modal('show')
      }
    },
    mounted () {
      $('.ui.dropdown.item').dropdown({ on: 'hover', action: 'hide' })
    }
  }
</script>

<style lang="scss" scoped>
  .right.menu {
    @media screen and (min-width: 768px) {
      padding-right: 4px;
    }
  }
  
</style>