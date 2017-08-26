<template>
<div class="checkDialog">
  <!-- 支付状态选择框 -->
  <myDialog1 :isShow="showCheckDialog" @close="closeCheckDialog">
    <h3 slot="header-info">请确认您的支付状态</h3>
    <div slot="content-info">
      <span @click="paySuccess">支付成功</span>
      <span @click="payFailed">支付失败</span>
    </div>
  </myDialog1>

  <!-- 支付成功 -->
  <myDialog1 :isShow="isShowPaySuccess" @close="toOrderList">
    <h3 slot="header-info">您的购买状态</h3>
    <p slot="content-info">购买成功</p>
  </myDialog1>

  <!-- 支付失败 -->
  <myDialog1 :isShow="isShowPayFailed" @close="closeFailed">
    <h3 slot="header-info">您的购买状态</h3>
    <p slot="content-info">购买失败</p>
  </myDialog1>
</div>
</template>

<script>
import Dialog from '../../components/headerComponents/dialog.vue'
export default {
  props: {
    showCheckDialog: {
      type: Boolean,
      default: false
    }
  },
  components: {
    myDialog1: Dialog
  },
  data () {
    return {
      isShowPaySuccess: false,
      isShowPayFailed: false
    }
  },
  methods: {
    /* 关闭支付状态选择框 */
    closeCheckDialog () {
      this.showCheckDialog = false
    },
    /* 点击支付成功 */
    paySuccess () {
      this.isShowPaySuccess = true
      this.$emit('on-close')
    },
    /* 点击支付失败 */
    payFailed () {
      /* showCheckDialog是从父级获取过来的数据，在子组件中一般
       不修改，所以触发事件on-close来关闭支付状态选择框 */
      this.$emit('on-close')
      this.isShowPayFailed = true
    },
    /* 关闭购买失败 */
    closeFailed () {
      this.isShowPayFailed = false
    },
    /* 订单详情页 */
    toOrderList () {
      this.$router.push({path: '/orderList'})
      this.isShowPaySuccess = false
    }
  }
}
</script>

<style scoped>
span {
  border:1px solid #ccc;
  padding:7px 9px;
  background:#55ca93;
  margin:5px 8px 5px 30px;
  cursor:pointer;
}
</style>
