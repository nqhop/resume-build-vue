<!-- <template>
    <v-app>
      <v-app-bar color="primary" class="flex-grow-0" app dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Coding Beauty</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Learning Vuetify</v-list-item-title>
            <v-list-item-subtitle> Using Navigation drawers</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </template>
   -->

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Admin"
            subtitle="admin@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
            value="myfiles"
            @click="navigate('/dashboard')"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-sim"
            title="Template"
            value="shared"
            @click="navigate('/template')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-creation"
            title="Create new resume"
            value="starred"
            @click="navigate('/resume')"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- <v-main style="height: 80px"></v-main> -->
    </v-layout>
  </v-card>
</template>

<script>
export default {

  data: () => ({
    drawer: true,
    rail: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Account", icon: "mdi-account-box" },
      { title: "Settings", icon: "mdi-cog" },
    ],
  }),
  methods: {
    navigate(route) {
      this.$router.push(route);
      this.drawerOpen = false; // Close the navigation drawer after navigation
    },
  },
};
</script>

<style>
</style>