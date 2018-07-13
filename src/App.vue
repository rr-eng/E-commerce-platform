<template>
<div id="app">
  <!-- header -->
  <div class="app-header">
    <div class="app-header-inner">
      <!-- 给logo图片添加路由,点击跳转到首页 -->
      <router-link :to="{path: '/'}">
        <img class="header-img" src="./assets/logo.png" />
      </router-link>
      <ul>
        <li v-show="userName!==''">{{userName}}</li>
        <li @click="logClick" v-show="userName===''">登录</li>
        <li>|</li>
        <li v-show="userName!==''" @click="quit">退出</li>
        <li @click="regClick" v-show="userName===''">注册</li>
        <li>|</li>
        <li @click="aboutClick">关于</li>
      </ul>
    </div>
  </div>

  <!-- content -->
  <div class="app-content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

  <!-- footer -->
  <div class="app-footer">
    <p>@ By Katty Feng  at 2017</p>
  </div>

  <!-- dialog -->
  <!-- 登录dialog -->
  <myDialog :isShow="isShowLogDialog" @close="closeDialog('isShowLogDialog')">
    <h3 slot="header-info">请登录</h3>
    <!-- 登录表单组件 -->
    <logForm slot="content-info" @has-login="logSuccess"></logForm>
  </myDialog>

  <!-- 注册dialog -->
  <myDialog :isShow="isShowRegDialog" @close="closeDialog('isShowRegDialog')">
    <h3 slot="header-info">请注册</h3>
    <!-- 注册表单组件 -->
    <regForm slot="content-info" @has-reg="regSuccess"></regForm>
  </myDialog>

  <!-- 关于dialog -->
  <myDialog :isShow="isShowAboutDialog" @close="closeDialog('isShowAboutDialog')">
    <h3 slot="header-info">关于我们的详细信息</h3>
    <!-- 关于组件 -->
    <aboutInfo slot="content-info"></aboutInfo>
  </myDialog>
</div>
</template>

<script>
import Dialog from './components/headerComponents/dialog.vue'
import LogForm from './components/headerComponents/LogForm.vue'
import RegForm from './components/headerComponents/RegForm.vue'
import AboutInfo from './components/headerComponents/AboutInfo.vue'

export default {
  components: {
    myDialog: Dialog,
    logForm: LogForm,
    regForm: RegForm,
    aboutInfo: AboutInfo
  },
  data () {
    return {
      isShowLogDialog: false,
      isShowRegDialog: false,
      isShowAboutDialog: false,
      userName: ''
    }
  },
  methods: {
    /* 登录 */
    logClick () {
      this.isShowLogDialog = true
    },
    /* 注册 */
    regClick () {
      this.isShowRegDialog = true
    },
    /* 关于 */
    aboutClick () {
      this.isShowAboutDialog = true
    },
    /* 通过传参方式将弹出框统一关闭 */
    closeDialog (attr) {
      this[attr] = false
    },
    /* 登录成功 */
    logSuccess (userName) {
      this.isShowLogDialog = false
      this.userName = userName
    },
    /* 注册成功 */
    regSuccess () {
      this.isShowRegDialog = false
    },
    /* 退出函数 */
    quit () {
      this.userName = ''
    }
  }
}
</script>

<style>
/* header */
.app-header {
  width:100%;
  height:80px;
  background:#666;
}
.app-header-inner {
  width:80%;
  margin:0 auto;
}
.app-header .app-header-inner .header-img {
  width:70px;
  height:70px;
  margin-top:5px;
  border-radius:20px;
}
.app-header .app-header-inner ul {
  float:right;
}
.app-header .app-header-inner ul li{
  display:inline-block;
  line-height:80px;
  font-size:18px;
  cursor:pointer;
}
.app-header .app-header-inner ul li:hover {
  color:#f60;
}

/* content */
.app-content {
  width:100%;
  height:1000px;
  background:#f4f9f7;
}

/*footer*/
.app-footer {
  width:100%;
  height:60px;
  background:#ddd;
}
.app-footer p {
  text-align:center;
  line-height:60px;
  font-size:10px;
}
</style>
