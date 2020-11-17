<template>
  <div>
    <v-alert colored-border color="blue" elevation="2" border="left">
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
  </div>
</template>

<script>
export default {
    name : "Skill"
}
</script>
