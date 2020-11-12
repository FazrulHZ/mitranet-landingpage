<template>
  <div>
    <v-carousel cycle height="100%" hide-delimiters show-arrows-on-hover>
      <v-carousel-item>
        <v-sheet height="100%">
          <div class="display-3">
            <v-img src="@/assets/gambar/baner1.jpg"> </v-img>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Baner",
};
</script>
