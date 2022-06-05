<template>
  <div>
    <v-container class="pa-6" fluid style="background-color: #f5f5f5" v-if="$route.path == '/product'">
      <h1 class="primary--text">OUR PRODUCT</h1>
      <div class="pa-12">
        <v-row>
          <v-col cols="12" md="6">
            <v-img src="@/assets/gambar/svg/product1.svg" max-width="400" max-height="400" class="mx-auto"></v-img>
          </v-col>
          <v-col cols="12" md="6" class="my-auto">
            <v-alert border="right" colored-border color="primary" elevation="24" class="pl-10 pr-10 mx-auto rounded-lg">
              <div class="ma-3">
                <v-row>
                  <v-icon class="mr-5">mdi-lan-connect</v-icon>
                  <h4>Network</h4>
                </v-row>
              </div>
              <v-divider class="mt-3 mb-3"></v-divider>
              <div>
                <v-row>
                  <v-col cols="6">
                    <ul>
                      <li>Instalasi Local Area Network (LAN)</li>
                      <li>Network Management</li>
                    </ul>
                  </v-col>
                  <v-col cols="6">
                    <ul>
                      <li>Instalasi Wireless LAN (WiFi / Hotspot)</li>
                      <li>Network Planner</li>
                    </ul>
                  </v-col>
                </v-row>
              </div>
            </v-alert>
          </v-col>
        </v-row>
        <v-divider class="mt-10 mb-10"></v-divider>
        <v-row>
          <v-col cols="12" md="6">
            <v-alert border="left" colored-border color="primary" elevation="24" class="pl-10 pr-10 mx-auto rounded-lg">
              <div class="ma-3">
                <v-row>
                  <v-icon class="mr-5">mdi-xml</v-icon>
                  <h4>Application & Development</h4>
                </v-row>
              </div>
              <v-divider class="mt-3 mb-3"></v-divider>
              <div>
                <v-row>
                  <v-col cols="12">
                    <ul>
                      <li>Aplikasi Antar Nasi Tumis</li>
                      <li>Sistem Informasi Perjalanan Dinas (SIM-PD)</li>
                      <li>Sistem Informasi Penjualan</li>
                      <li>Sistem Informasi Kepegawaian (SIMPEG)</li>
                      <li>Sistem Informasi Kinerja Pegawai</li>
                      <li>Sistem Informasi Tunjangan Kinerja Daerah</li>
                      <li>NOC (Network Operation Center) Builder</li>
                      <li>Sistem Informasi Kinerja Pegawai</li>
                      <li>Aplikasi Absensi Karyawan (Finger Print)</li>
                    </ul>
                  </v-col>
                </v-row>
                <v-divider class="mt-3 mb-3"></v-divider>
                <v-row>
                  <v-col cols="6">
                    <ul>
                      <li>Disposisi Digital</li>
                      <li>Management Digital Signature</li>
                      <li>Repository</li>
                      <li>Server Management</li>
                    </ul>
                  </v-col>
                  <v-col cols="6">
                    <ul>
                      <li>Mobile Apps</li>
                      <li>Website</li>
                      <li>Integration Application</li>
                      <li>Data Center Planner</li>
                    </ul>
                  </v-col>
                </v-row>
              </div>
            </v-alert>
          </v-col>
          <v-col cols="12" md="6" class="my-auto">
            <v-img src="@/assets/gambar/svg/product2.svg" max-width="400" max-height="400" class="mx-auto"></v-img>
          </v-col>
        </v-row>
        <v-divider class="mt-12 mb-5"></v-divider>
        <v-row>
          <v-col cols="12" md="6">
            <v-img src="@/assets/gambar/svg/product3.svg" max-width="400" max-height="400" class="mx-auto"></v-img>
          </v-col>
          <v-col cols="12" md="6" class="my-auto">
            <v-alert border="right" colored-border color="primary" elevation="24" class="pl-10 pr-10 mx-auto rounded-lg">
              <div class="ma-3">
                <v-row>
                  <v-icon class="mr-5">mdi-cogs</v-icon>
                  <h4>Service</h4>
                </v-row>
              </div>
              <v-divider class="mt-3 mb-3"></v-divider>
              <div>
                <v-row>
                  <v-col cols="6" class="my-auto">
                    <ul>
                      <li>Server</li>
                    </ul>
                  </v-col>
                  <v-col cols="6">
                    <ul>
                      <li>Hosting</li>
                    </ul>
                  </v-col>
                </v-row>
              </div>
            </v-alert>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <div v-else>
      <v-row align="center" justify="center">
        <v-col cols="12" md="2" v-for="item in product" :key="item.id">
          <v-card class="mx-auto my-2" min-height="210" min-width="50" rounded="xl">
            <v-card-text class="py-7">
              <v-icon class="mb-5" size="75" color="primary">
                {{ item.icon }}
              </v-icon>
              <v-divider class="my-5"></v-divider>
              <h3 class="font-weight-black">{{ item.nama }}</h3>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    product: [
      {
        id: 1,
        nama: 'Whatsapp-API',
        icon: 'mdi-whatsapp',
      },
      {
        id: 2,
        nama: 'Network Management',
        icon: 'mdi-lan-connect',
      },
      {
        id: 3,
        nama: 'APP Develop',
        icon: 'mdi-xml',
      },
      {
        id: 4,
        nama: 'Service',
        icon: 'mdi-cogs',
      },
    ],
  }),
}
</script>
