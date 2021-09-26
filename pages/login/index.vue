<template>
  <van-form @submit="onSubmit">
    <van-field v-model="formData.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
    <van-field v-model="formData.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: 'adin',
        password: 'dfdf',
      }
    };
  },
  methods: {
    async onSubmit(values) {
      let params = {
        username: '18519201252',
        password: 'eea4672854753a750734ef8b914d0bad3505b1823b02f022524b8e0960813444'
      }
      const toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: 'Loading...',
      });
      setTimeout(async () => {
        let res = await this.$axios.get('/api/v1/user/login', { params: this.formData })
        toast.clear()
        if (res.message != 1000) {
          this.$toast.fail(res.detail);
        }
        console.log("res", res); return;
        let user = Object.assign({ token: 'ddfs' }, this.formData)
        console.log(this.$store);
        this.$store.commit('auth/setUser', user)
        this.$router.push({
          path: '/'
        })
      }, 2000);
    },
  },
};
</script>