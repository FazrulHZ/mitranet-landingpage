<template>
  <div>
    <v-container class="pa-6" fluid style="background-color: #F5F5F5;">
      <div>
        <h1 class="primary--text">PROFILE</h1>
      </div>
      <v-divider></v-divider>
      <div class="pa-10">
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <div class="text-center pa-5">
                <v-avatar class="mx-auto" size="200">
                  <v-img :src="isUndefined(HasilFilter[0]) ? 'asd' : 'http://localhost:8080/img/team/' + HasilFilter[0].avatar" alt="..."></v-img>
                </v-avatar>
              </div>
              <div class="pl-5 pr-5 pb-5">
                <v-card outlined>
                  <v-card-text>
                    <div class="pa-2">
                      <b>Nama</b><br />
                      <span>
                        {{ HasilFilter.length === 0 ? '' : HasilFilter[0].nama }}
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <div class="pa-2">
                      <b>Email</b> <br />
                      <span>
                        {{ HasilFilter.length === 0 ? '' : HasilFilter[0].email }}
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <div class="pa-2">
                      <b>Divisi</b><br />
                      <span>
                        {{ HasilFilter.length === 0 ? '' : HasilFilter[0].divisi }}
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <div class="pa-2">
                      <b>Keahlian</b><br />
                      <span>
                        {{ HasilFilter.length === 0 ? '' : HasilFilter[0].keahlian }}
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <div class="text-center pa-2">
                      <v-btn class="mx-2" fab dark small color="primary" depressed :href="isUndefined(HasilFilter[0]) ? '' : HasilFilter[0].facebook" target="_blank">
                        <v-icon dark>
                          mdi-facebook
                        </v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab dark small color="error" depressed :href="isUndefined(HasilFilter[0]) ? '' : HasilFilter[0].instagram" target="_blank">
                        <v-icon dark>
                          mdi-instagram
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <div v-if="this.getID == 2">
              <SkillCard />
            </div>
            <div>
              <RiwayatCard />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import SkillCard from '@/components/skill'
import RiwayatCard from '@/components/riwayat'
export default {
  components: {
    SkillCard,
    RiwayatCard
  },

  mounted() {
    this.getID = this.$route.params.id
    this.getData()
  },

  data: () => ({
    getID: '',
    teams: [],
    HasilFilter: []
  }),

  methods: {
    async getData() {
      const res = await fetch('http://localhost:8080/api/teams.json')
      const data = await res.json()
      this.teams = data.teams
      this.filterArray()
    },

    isUndefined(value) {
      return value === undefined
    },

    filterArray() {
      this.HasilFilter = this.teams.filter(item => {
        return item.id == this.getID
      })
    }
  }
}
</script>
