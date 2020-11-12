<template>
  <div style="background-color: #1E88E5;">
    <div class="pt-3 pb-3 pl-8 pr-8">
      <v-row>
        <div>
          <v-img src="@/assets/gambar/logoheader.png" width="250"></v-img>
        </div>
        <v-spacer></v-spacer>
        <div class="my-auto">
          <v-btn
            rounded
            color="White"
            dark
            width="100"
            outlined
            class="mr-2 hidden-sm-and-down"
            >Login</v-btn
          >
          <v-btn
            rounded
            color="White"
            dark
            width="100"
            outlined
            class="hidden-sm-and-down"
            >Join</v-btn
          >
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>
