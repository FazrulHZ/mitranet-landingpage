<template>
  <div>
    <v-row align="center" justify="center">
      <v-card v-for="team in teams" :key="team.index" class="mx-auto my-2" max-height="422" max-width="300" @click="profil(team.id)">
        <v-img :src="'img/team/' + team.avatar"></v-img>

        <v-card-text class="py-7">
          <h2 class="font-weight-black">{{ team.nama }}</h2>
          <h4 class="font-weight-regular text--secondary mt-2">{{ team.posisi }}</h4>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import getRef from '@/helper/getRef.js'

export default {
  mounted() {
    this.getData()
  },

  data: () => ({
    teams: [],
  }),

  methods: {
    async getData() {
      const res = await getRef.Teams()
      this.teams = res
    },

    profil(id) {
      this.$router.push('/profile/' + id).catch(() => {})
    },
  },
}
</script>