<template>
  <nav role="navigation" aria-label="main navigation">
    <nuxt-link to="/" :class="{ 'active': $route.name == 'index' }">Home</nuxt-link>
    <nuxt-link to="/video" :class="{ 'active': $route.name == 'video' }">Видеонаблюдение</nuxt-link>
    <nuxt-link to="/access-control" :class="{ 'active': $route.name == 'access-control' }">Контроль и управления доступом</nuxt-link>
    <nuxt-link to="/security-alarm" :class="{ 'active': $route.name == 'security-alarm' }">Охранная сигнализация</nuxt-link>
    <nuxt-link to="/fire-safety" :class="{ 'active': $route.name == 'fire-safety' }">Пожарная безопасность</nuxt-link>
  </nav>
</template>

<script>
  export default {
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    text-align: center;

    a {
      margin: 0 .2em;

      &.active {
        color: orange;
      }
    }
  }
</style>