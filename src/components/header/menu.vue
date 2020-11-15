<template>
  <v-app-bar color="white" height="60" elevate-on-scroll app>
    <v-img
      src="@/assets/gambar/logoheader.png"
      max-height="180"
      max-width="180"
      class="my-auto"
    ></v-img>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn text to="/home">
        HOME
      </v-btn>

      <v-btn text to="/about">
        ABOUT
      </v-btn>

      <v-btn text to="/product">
        PRODUCT
      </v-btn>

      <v-btn text to="contact">
        CONTACT
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Menu",
};
</script>
