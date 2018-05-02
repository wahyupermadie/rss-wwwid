<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>RSS WWWID - 2018</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view> </router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text"> &copy; WAHYU PERMADI</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
