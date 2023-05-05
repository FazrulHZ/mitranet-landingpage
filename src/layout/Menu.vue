<template>
  <v-app-bar color="white" height="60" elevate-on-scroll app>
    <v-img src="@/assets/gambar/logoheader.png" max-height="120" max-width="120" class="my-auto" @click="home()"></v-img>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn text to="/home"> HOME </v-btn>

      <v-btn text to="/about"> ABOUT </v-btn>

      <v-btn text to="/product"> PRODUCT </v-btn>
    </div>
    
    <v-btn text to="contact"> CONTACT </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Menu',

  methods: {
    home() {
      this.$router.push('/home').catch(() => {})
    },
  },
}
</script>
