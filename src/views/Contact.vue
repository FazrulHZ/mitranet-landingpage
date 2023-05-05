<template>
  <div>
    <v-container class="pa-6" fluid style="background-color: #f5f5f5">
      <h1 class="primary--text">CONTACT US</h1>

      <v-col>
        <v-img src="@/assets/gambar/svg/contact.svg" max-width="500" max-height="500" class="mx-auto"></v-img>
      </v-col>
    </v-container>

    <v-row class="my-5 px-5">
      <v-col cols="12" md="8">
        <v-card>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d298.68035850047306!2d123.04447337811052!3d0.5457079874673217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1683298198333!5m2!1sen!2sid"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-alert border="top" colored-border color="primary" elevation="1" class="pa-10 mx-auto">
          <v-row class="pa-5">
            <span>Jl Jambura RT 02 RW II, Kel Molosipat W Kec Kota Barat Kota Gorontalo</span>
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
              <v-icon>mdi-email</v-icon>
            </div>
            <div class="my-auto">
              <span>service@mitranusa.id</span>
            </div>
          </v-row>
          <v-divider></v-divider>
          <v-row class="pa-5">
            <div class="mr-5">
              <v-icon>mdi-card-account-phone-outline</v-icon>
            </div>
            <div class="my-auto">
              <span>+62 857-1031-5228</span>
            </div>
          </v-row>
          <v-divider></v-divider>
          <v-row class="pa-5">
            <div class="mr-5">
              <v-icon>mdi-whatsapp</v-icon>
            </div>
            <div class="my-auto">
              <span>+62 857-1031-5228</span>
            </div>
          </v-row>
          <v-divider></v-divider>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>
