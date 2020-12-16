<template>
  <div class="login-input">
    <div class="content-right">
      <div class="input-head">Blog登录</div>
      <el-input type="text" placeholder="输入账号" v-model="account" maxlength="30"></el-input>
      <el-input type="password" placeholder="输入密码" v-model="password"  style="margin-top: 10px;"></el-input>
      <el-switch v-model="isRemember"  active-text="记住账号"  active-color="#13ce66" inactive-color="#ff4949" style="margin-top: 10px;width: 100%;"></el-switch>
      <el-button type="primary" class="login-submit" @click="created">登录</el-button>
    </div>
  </div>
</template>

<script>

import Qs from 'qs'

export default {
  name: 'login-input',

  data () {
    return {
      account: "",
      password: "",
      isRemember: false
    }
  },

  methods: {
  created:function(){
                var account = this.account;
                var password = this.password;
                let result = {"account":account,"password":password};
                console.log(result);
                this.$axios
                .post('/login.do', Qs.stringify(result))
                .then(successResponse => {
                  console.log(successResponse)
                  this.responseResult = JSON.stringify(successResponse.data)
                  if (successResponse.data.code === 200) {
                    this.$router.push("/books")
                    this.$notify({
                      title: '成功',
                      message: successResponse.data.message,
                      type: 'success'
                    });
                  }else{
                    this.$notify({
                      title:"失败",
                      message:successResponse.data.message,
                      type:'error'
                    })
                  }
                })
                .catch(failResponse => {})
              },
  }
}
</script>

<style scoped>
  .login-input{
    width: 100%;
    height: 100%;
  }
  .login-input .content-right{
    width:320px;
    height: 100%;
  }
  .login-input .content-right .input-head{
    font-size: 18px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .login-input .content-right .login-submit{
    width: 100%;
    margin-top: 10px;
  }
</style>
