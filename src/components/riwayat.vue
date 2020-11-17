<template>
  <div>
    <v-alert color="primary" colored-border border="left" elevation="2" class="pl-md-10 pr-md-10">
      <div class="mr-5 ml-5">
        <v-row>
          <v-icon class="mr-3">mdi-history</v-icon>
          <span class="my-auto">Riwayat Pekerjaan dan Pendidikan</span>
        </v-row>
      </div>
      <v-divider class="mt-3 mb-3"></v-divider>
      <div>
        <b>{{ HasilFilter.length === 0 ? '' : HasilFilter[0].nama_lengkap }}</b>
      </div>
      <v-divider class="mt-3 mb-3"></v-divider>
      <v-row>
        <v-col cols="12" md="6" v-for="item in Pendidikans" :key="item.index">
          <v-card outlined height="170">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  {{ item.tingkat }}
                </div>
                <v-list-item-title class="title mb-1">
                  {{ item.nama }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ item.jurusan }}</v-list-item-subtitle>
                <v-list-item-title class="title mb-1"> Lulus - {{ item.thn_lulus }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-card outlined>
        <v-card-text>
          <h3>LANGUAGE AND SKILLS</h3>
          <div class="mt-2">
            <v-row>
              <v-col cols="12" md="4" v-for="item in Bahasas" :key="item.index">
                <v-card outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline">
                        Bahasa Yang Dikuasai
                      </div>
                      <v-list-item-title class="title mb-1">
                        {{ item.nama }}
                      </v-list-item-title>
                      <v-list-item-subtitle>{{ item.kemampuan }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <div class="mt-2">
            <v-row>
              <v-col>
                <v-card outlined>
                  <div class="overline ml-4">
                    Keahlian Yang Dimiliki
                  </div>
                  <v-list-item v-for="item in Kemampuans" :key="item.index" class="mt-2">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.nama_skill }}</v-list-item-title>
                      <v-divider class="mt-3"></v-divider>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
      <v-card class="mt-5" color="primary">
        <v-card-text>
          <h3 class="white--text">RIWAYAT PEKERJAAN</h3>
        </v-card-text>
      </v-card>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="item in Pekerjaans" :key="item.index">
          <span slot="opposite">{{ item.thn_kerja }}</span>
          <v-card class="elevation-2">
            <v-card-text>
              {{ item.nama_kerja }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Riwayat',
  mounted() {
    this.getID = this.$route.params.id
    this.getData()
  },

  data: () => ({
    getID: '',
    teams: [],
    HasilFilter: [],
    Pendidikans: [],
    Bahasas: [],
    Kemampuans: [],
    Pekerjaans: []
  }),

  methods: {
    async getData() {
      const res = await fetch('http://localhost:8080/api/teams.json')
      const data = await res.json()
      this.teams = data.teams
      this.filterArray()
      this.showData()
    },

    isUndefined(value) {
      return value === undefined
    },

    filterArray() {
      this.HasilFilter = this.teams.filter(item => {
        return item.id == this.getID
      })
    },

    showData() {
      this.Pendidikans = this.HasilFilter[0].pendidikan
      this.Bahasas = this.HasilFilter[0].skill.bahasa
      this.Kemampuans = this.HasilFilter[0].skill.lainnya
      this.Pekerjaans = this.HasilFilter[0].riwayat_kerja
    }
  }
}
</script>
