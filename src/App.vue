<template>
  <navigation-drawer v-if="!['resume'].includes($route.name)" />
  <router-view />
</template>

<script>
import NavigationDrawer from "./components/nav/NavigationDrawer.vue";

export default {
  name: "App",
  components: {
    NavigationDrawer,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>
