<template>
  <div class="container">
    <div>

      <div class="links">
        <van-button type="primary" @click="handleLogout">
          退出登录
        </van-button>
        <van-button url="https://github.com/nuxt/nuxt.js">
          GitHub
        </van-button>
        <van-button url="https://vant-contrib.gitee.io/vant">
          Vant UI
        </van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {

    }
  },
  methods: {
    handleLogout() {
      this.$store.commit('auth/setUser', null)
      this.$router.push({
        path: '/login'
      })
    }
  },
}
</script>
 