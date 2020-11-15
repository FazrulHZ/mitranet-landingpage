<template>
  <v-app>
    <Menu />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Menu from "@/components/header/menu";
export default {
  components: {
    Menu,
  },
};
</script>
