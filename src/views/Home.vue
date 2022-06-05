<template>
  <div>
    <div>
      <CBaner />
    </div>

    <div class="pa-10">
      <div class="text-center" style="margin-top: 65px; margin-bottom: 65px">
        <h1 class="primary--text">INTRODUCTION</h1>
        <v-divider class="mb-3"></v-divider>
        <div>
          <CIntro />
        </div>
      </div>
    </div>

    <div class="pa-10" style="background-color: #f5f5f5">
      <div style="margin-top: 65px; margin-bottom: 65px">
        <h1 class="primary--text text-center mb-10">ABOUT US</h1>
        <div>
          <CAbout />
        </div>
      </div>
    </div>

    <div class="pa-10">
      <div class="text-center" style="margin-top: 65px; margin-bottom: 65px">
        <h1 class="primary--text text-center mb-10">OUR PRODUCT</h1>
        <div>
          <CProduct />
        </div>
      </div>
    </div>

    <div class="pa-10" style="background-color: #f5f5f5">
      <div style="margin-top: 65px; margin-bottom: 65px">
        <h1 class="primary--text text-center mb-10">OUR TEAM</h1>
        <div>
          <CTeam />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CBaner from '@/layout/Baner'
import CIntro from '@/views/Intro'
import CAbout from '@/views/About'
import CTeam from '@/views/Team'
import CProduct from '@/views/Product'

export default {
  components: {
    CBaner,
    CIntro,
    CAbout,
    CTeam,
    CProduct
  },

  mounted() {},

  data: () => ({}),

  methods: {},
}
</script>
