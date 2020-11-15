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
            <v-alert colored-border color="blue" elevation="2" border="left" v-if="this.getID == 2">
              <div class="ml-5 mr-5">
                <v-row>
                  <div class="mr-2">
                    <v-icon>
                      mdi-chart-box-outline
                    </v-icon>
                  </div>
                  <div>
                    <h4>SKILL</h4>
                  </div>
                </v-row>
              </div>
              <v-divider class="mt-2 mb-2"></v-divider>
              <div class="ma-2">
                <div class="mb-5">
                  <span>PHP</span>
                  <v-progress-linear color="light-blue" height="25" value="90" striped>
                    <template>
                      <strong class="white--text">90%</strong>
                    </template>
                  </v-progress-linear>
                </div>
                <div class="mb-5">
                  <span>Javascript</span>
                  <v-progress-linear color="light-blue" height="25" value="75" striped>
                    <template>
                      <strong class="white--text">75%</strong>
                    </template>
                  </v-progress-linear>
                </div>
                <div class="mb-5">
                  <span>HTML</span>
                  <v-progress-linear color="light-blue" height="25" value="100" striped>
                    <template>
                      <strong class="white--text">100%</strong>
                    </template>
                  </v-progress-linear>
                </div>
                <div class="mb-5">
                  <span>CSS</span>
                  <v-progress-linear color="light-blue" height="25" value="90" striped>
                    <template>
                      <strong class="white--text">90%</strong>
                    </template>
                  </v-progress-linear>
                </div>
                <v-divider></v-divider>
                <div class="mt-3">
                  <span><b>Framework</b></span>
                  <v-row>
                    <v-col cols="4">
                      <ul>
                        <li>Codeigniter</li>
                        <li>Laravel</li>
                      </ul>
                    </v-col>
                    <v-col cols="4">
                      <ul>
                        <li>Express.js</li>
                        <li>Vue.js</li>
                      </ul>
                    </v-col>
                    <v-col cols="4">
                      <ul>
                        <li>Bootstrap</li>
                        <li>Vuetify</li>
                      </ul>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-alert>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
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
