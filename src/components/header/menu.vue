<template>
  <v-app-bar color="white" light dense height="60">
    <v-img
      src="@/assets/gambar/logoheader.png"
      max-height="180"
      max-width="180"
      class="my-auto"
    ></v-img>
    <v-spacer></v-spacer>
    <v-btn text to="/home">
      HOME
    </v-btn>

    <v-btn text to="/about">
      ABOUT
    </v-btn>

    <v-btn text to="/location">
      LOCATION
    </v-btn>

    <v-btn text to="contact">
      CONTACT
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Menu",
};
</script>
