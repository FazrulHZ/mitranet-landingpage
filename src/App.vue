<template>
  <router-view />
</template>

<script>
export default {
  created() {
    if (this.$route.path == "/" || this.$route.path == "") {
      this.$router.push("/home");
    }
  },
};
</script>
