<template>
  <div>
    <div>
      <Baner />
    </div>
    <div class="pa-10" fluid style="background-color: #F5F5F5;">
      <div class="text-center" style="margin-top: 65px; margin-bottom: 65px;">
        <h1 class="primary--text">INTRODUCTION</h1>
        <v-divider class="mb-3"></v-divider>
        <p>
          PT. MitraNet Data Nusantara adalah salah satu perusahaan IT Enterprise
          yang ada di Provinsi Gorontalo. Perusahaan ini bergerak di bidang
          Teknologi Informasi yang fokus di bidang Enterprise System IT yaitu
          Web Design, Web Programming, Analisis Sistem (System Analize),
          Computer Network dan Design Graphic.
        </p>
      </div>
    </div>
    <div class="pa-10">
      <div style="margin-top: 65px; margin-bottom: 65px;">
        <h1 class="primary--text text-center">ABOUT US</h1>
        <div class="mt-10">
          <v-row>
            <v-col>
              <v-img
                src="@/assets/gambar/svg/aboutus.svg"
                max-width="500"
                max-height="500"
                class="mx-auto"
              ></v-img>
            </v-col>
            <v-col>
              <h2>Our Mission</h2>
              <p class="mt-3">
                Eos cumque optio dolores excepturi rerum temporibus magni
                recusandae eveniet, totam omnis consectetur maxime quibusdam
                expedita dolorem dolor nobis dicta labore quaerat esse magnam
                unde, aperiam delectus! At maiores, itaque.
              </p>
              <ul class="mt-5">
                <li>Mencrerdaskan Kehidupan Bangsa</li>
                <li>Menjadi Pelangi Dimata Dunia</li>
                <li>Bekerja Untuk Mencapai Perdamaian</li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div class="pa-10" style="background-color: #F5F5F5;">
      <div style="margin-top: 65px; margin-bottom: 65px;">
        <h1 class="primary--text text-center">OUR TEAM</h1>
        <div class="mt-10">
          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="team in teams"
              :key="team.index"
              class="mb-10"
            >
              <v-card
                class="mx-auto text-center"
                max-width="300"
                elevation="24"
              >
                <v-img mx-height="250" :src="'img/team/' + team.avatar"></v-img>

                <v-card-text>
                  <h1>{{ team.nama }}</h1>
                  <v-divider class="mt-3 mb-2"></v-divider>
                  <h3 class="primary--text">{{ team.posisi }}</h3>
                </v-card-text>

                <v-card-actions class="pb-5">
                  <v-btn block depressed color="success" @click="profil(team.id)">
                    Profile
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Baner from "@/components/header/baner";
export default {
  components: {
    Baner,
  },

  mounted() {
    this.getData();
  },

  data: () => ({
    teams: [],
  }),

  methods: {
    async getData() {
      const res = await fetch("http://localhost:8080/api/teams.json");
      const data = await res.json();
      this.teams = data.teams;
    },

    profil(id){
      this.$router.push("/profile/"+ id);
    }
  },
};
</script>
