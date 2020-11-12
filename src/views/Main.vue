<template>
  <v-app>
    <Menu />
    <Baner />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "@/components/header/menu";
import Baner from "@/components/header/baner";
export default {
  components: {
    Menu,
    Baner,
  },
};
</script>
