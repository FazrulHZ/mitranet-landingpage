<template>
  <v-app-bar color="white" elevate-on-scroll app>
    <div class="pa-3"> 
      <v-img src="@/assets/gambar/logopanjang.png" max-width="200" @click="home()"></v-img>
    </div>

    <v-spacer></v-spacer>
    
    <div class="my-auto hidden-sm-and-down">
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
