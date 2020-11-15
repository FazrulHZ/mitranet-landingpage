<template>
  <div>
    <v-carousel cycle height="100%" hide-delimiters show-arrows-on-hover>
      <v-carousel-item>
        <v-sheet height="100%" color="white">
          <div class="display-3">
            <v-img
              src="@/assets/gambar/baner1.jpg"
              class="hidden-md-and-up"
            ></v-img>
            <v-row class="hidden-sm-and-down">
              <v-col align-self="center" cols="12" md="6" class="pa-5">
                <div style="margin-left:20%">
                  <h1 class="black--text">SOLVE</h1>
                  <h4 class="primary--text pt-5">YOUR PROBLEM</h4>
                  <h2 class="black--text pt-3">WITH STYLE</h2>
                  <div class="primary pa-1 mt-3"></div>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="hidden-sm-and-down">
                <v-img
                  src="@/assets/gambar/svg/programming.svg"
                  max-width="500"
                  max-height="500"
                  class="mx-auto"
                ></v-img>
              </v-col>
            </v-row>
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
