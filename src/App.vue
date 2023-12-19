<template>
  <navigation-drawer v-if="!['resume', 'template2'].includes($route.name)" />
  <the-header-vue v-if="!['dashboard', 'template'].includes($route.name)" />
  <router-view />
</template>

<script>
import NavigationDrawer from "./components/nav/NavigationDrawer.vue";
import TheHeaderVue from "./components/nav/TheHeader.vue";
export default {
  name: "App",
  components: {
    NavigationDrawer,
    TheHeaderVue,
  },
};
console.warn("A sample warning message!");
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.sv-icon {
  cursor: pointer;
}
.month-picker__container {
  z-index: 1;
}
</style>
