<template>
<div class="logForm">
  <div class="login">
    <div class="login-info">
      <label>用户名</label>
      <input class="input" type="text" placeholder="请输入你的用户名" v-model="userName"/>
      <span class="errorInfo">{{userNameError.errorInfo}}</span>
    </div>
    <div class="login-info">
      <label>密&nbsp&nbsp&nbsp码</label>
      <input class="input" type="password" placeholder="请输入你的密码" v-model="passWord" />
      <span class="errorInfo">{{passWordError.errorInfo}}</span>
    </div>
    <div class="login-info">
      <button @click="login">登录</button>
    </div>
    <p class="errorText">{{errorText}}</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      passWord: '',
      errorText: ''
    }
  },
  computed: {
    /* 利用正则表达式进行表单验证 */
    userNameError () {
      let reg = /^[a-zA-Z0-9]{4,12}$/
      let errorInfo, status
      if (!reg.test(this.userName)) {
        status = false
        errorInfo = '用户名长度为4--16位，且只能是数字或字母'
      } else {
        status = true
        errorInfo = ''
      }
      /* 第一次进入错误信息不提示 */
      if (!this.userNameFlag) {
        errorInfo = ''
        this.userNameFlag = true
      }
      return {
        status,
        errorInfo
      }
    },
    passWordError () {
      let reg = /^\w{6,12}$/
      let errorInfo, status
      if (!reg.test(this.passWord)) {
        status = false
        errorInfo = '密码长度为6--12位'
      } else {
        status = true
        errorInfo = ''
      }
      /* 第一次进入错误信息不提示 */
      if (!this.passWordFlag) {
        errorInfo = ''
        this.passWordFlag = true
      }
      return {
        status,
        errorInfo
      }
    }
  },
  methods: {
    login () {
      if (!this.userNameError.status || !this.passWordError.status) {
        this.errorText = '请重新检查你的输入'
      } else {
        this.errorText = ''
        this.$emit('has-login', this.userName)
      }
    }
  }
}
</script>

<style scoped>
.login {
  margin:10px 0 0 30px;
}
.login-info {
  margin:5px 0 25px 0;
}
.login-info label {
  color:#36adde;
}
.login-info input {
  width:200px;
  height:30px;
  border:1px solid #ddd;
  border-radius:5px;
  margin-left:20px;
  text-indent:7px;
}
.login-info button {
  width:80px;
  height:35px;
  border:1px solid #69b5ff;
  border-radius:7px;
  background:#69b5ff;
  font-size:16px;
  letter-spacing:4px;
  margin-left:90px;
  cursor:pointer;
}
.login-info .errorInfo {
  font-size:14px;
  color:#f00;
}
.errorText {
  font-size:14px;
  color:#f00;
  margin-left:60px;
}
</style>
