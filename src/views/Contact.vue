<template>
  <div>
    <v-container class="pa-6" fluid style="background-color: #F5F5F5;">
      <h1 class="primary--text">CONTACT US</h1>

      <v-col>
        <v-img src="@/assets/gambar/svg/contact.svg" max-width="500" max-height="500" class="mx-auto"></v-img>
      </v-col>
    </v-container>

    <div class="pa-12">
      <v-alert border="top" colored-border color="primary" elevation="24" class="pa-10 mx-auto" max-width="500">
        <v-row class="pa-5">
          <div class="mr-5">
            <v-icon>mdi-map-marker-radius-outline</v-icon>
          </div>
          <div class="my-auto">
            <span>Jalan DR H. Umar Sidiki</span>
          </div>
        </v-row>
        <v-divider></v-divider>
        <v-row class="pa-5">
          <div class="mr-5">
            <v-icon>mdi-gmail</v-icon>
          </div>
          <div class="my-auto">
            <span>mitranetdatanusantara@gmail.com</span>
          </div>
        </v-row>
        <v-divider></v-divider>
        <v-row class="pa-5">
          <div class="mr-5">
            <v-icon>mdi-card-account-phone-outline</v-icon>
          </div>
          <div class="my-auto">
            <span>+62 811-4330-4719</span>
          </div>
        </v-row>
        <v-divider></v-divider>
        <v-row class="pa-5">
          <div class="mr-5">
            <v-icon>mdi-whatsapp</v-icon>
          </div>
          <div class="my-auto">
            <span>+62 851-5540-9973</span>
          </div>
        </v-row>
        <v-divider></v-divider>
      </v-alert>
    </div>
  </div>
</template>
