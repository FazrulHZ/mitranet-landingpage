<template>
  <div>
    <Menu />

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import Menu from '@/layout/Menu'
export default {
  components: {
    Menu,
  },

  data: () => ({}),

  // mounted() {
  //   console.log(this.$route.path);
  //   if (this.$route.path == '/') {
  //     this.$router.push('/home').catch(() => {})
  //   }
  // },

  created() {
    if (this.$route.path == '/' || this.$route.path == '') {
      this.$router.push('/home')
    }
  },
}
</script>
