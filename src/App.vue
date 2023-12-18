<template>
  <navigation-drawer v-if="!['resume', 'template2'].includes($route.name)" />
  <the-header-vue v-if="!['dashboard', 'template'].includes($route.name)"/>
  <router-view />
</template>

<script>
import NavigationDrawer from "./components/nav/NavigationDrawer.vue";
import TheHeaderVue from './components/nav/TheHeader.vue';
export default {
  name: "App",
  components: {
    NavigationDrawer,
    TheHeaderVue
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

.sv-icon{
  cursor: pointer;
}
</style>
