<template>
<div class="dialog">
  <div class="dialog-wrap">
    <!-- dialog-cover相当于一个遮罩层，类似于模态框效果 -->
    <div class="dialog-cover" v-show="isShow" @click="closeMyself"></div>
    <!-- 弹出对话框的动画效果 -->
    <transition name="dropDialog">
      <div class="dialog-container" v-show="isShow">
        <div class="dialog-header">
          <slot name="header-info"></slot>
          <div class="dialog-close" @click="closeMyself">x</div>
        </div>
        <div class="dialog-content">
          <slot name="content-info"></slot>
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  props: {
    isShow: false
  },
  data () {
    return {
    }
  },
  methods: {
    closeMyself () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/* 弹出对话框动画效果 */
.dropDialog-enter-active, .dropDialog-leave-active {
  transition:all ease 0.7s;
}
.dropDialog-enter {
  transform:translateY(-500px);
}
.dropDialog-leave-active {
  transform:translateY(-500px);
}
.dialog-wrap {
  width:100%;
  height:100%;
}
/* dialog-cover相当于一个遮罩层，类似于模态框效果 */
.dialog-cover {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#000;
  opacity:0.6;
}
.dialog-container {
  position:fixed;
  left:25%;
  top:15%;
  width:50%;
  background:#fff;
  border:4px solid #fffed7;
  border-radius:15px;
}
.dialog-container .dialog-header {
  width:100%;
  height:50px;
  background:#eee;
  border-radius:10px;
  line-height:50px;
  text-align:center;
}
.dialog-container .dialog-header .dialog-close {
  position:absolute;
  top:10px;
  right:25px;
  width:20px;
  height:20px;
  border:1px solid #ccc;
  text-align:center;
  line-height:15px;
  font-size:20px;
  cursor:pointer;
}
.dialog-container .dialog-header .dialog-close:hover {
  background:#f00;
}
.dialog-container .dialog-content {
  padding:15px;
}
</style>
