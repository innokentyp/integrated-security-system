<template>
  <nav class="ui top fixed inverted stackable menu" role="navigation" aria-label="main navigation">
    <nuxt-link v-for="(value, key, index) in pages" :key="index" :to="key == 'index' ? '/' : `/${key}`" :class="['item', color[index], { 'active': $route.name == key }]"><i class="home icon" v-if="key == 'index'"></i><span v-else>{{ value }}</span></nuxt-link>
  </nav>
</template>

<script>
  import Vue from 'vue'

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
    }
  }
</script>

<style lang="scss" scoped>
  
</style>