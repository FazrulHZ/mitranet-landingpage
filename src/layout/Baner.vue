<template>
  <div>
    <v-parallax src="@/assets/gambar/bg-5.jpg">
      <div style="background-color: rgba(255, 255, 255, 0.5); position: absolute; top: 0; left: 0; width: 100%; height: 100%">
        <v-container fill-height>
          <v-row align="center" justify="center" v-if="$vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'xs'">
            <div class="text-center">
              <h1 style="font-size: 40px" class="font-weight-black mb-n4 black--text">WELCOME TO</h1>
              <h1 style="font-size: 40px" class="font-weight-black mb-n2 black--text"><span class="primary--text">MITRANET</span></h1>
              <span class="font-weight-bold text--secondary">Solve Your Problem With Style</span>
            </div>
          </v-row>

          <v-row v-else>
            <div>
              <h1 style="font-size: 55px" class="font-weight-black mb-n4 black--text">Welcome to <span class="primary--text">Mitranet</span></h1>
              <span style="font-size: 25px" class="font-weight-bold text--secondary">Solve Your Problem With Style</span>
            </div>
          </v-row>
        </v-container>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'Baner',
}
</script>
