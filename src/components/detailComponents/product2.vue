<template>
<div class="sales-board">
  <!-- 头部信息 -->
  <div class="sales-board-intro">
    <h3>乐心心率手环</h3>
    <p>表达你的与众不同，懂得你对自由的追逐，一份怦然心动的约定，一次心手合一的旅程，24小时全天候，连续心率检测，GPS全球定位。</p>
  </div>
  <!-- 规格说明 -->
  <div class="sales-board-form">

    <div class="sales-board-info">
      <div class="left">产品类型：</div>
      <div class="right">
        <!-- 单选radioChoose组件 -->
        <radioChoose :selections="colorTypes"  @selectChange="onParamChange('proType', $event)"></radioChoose>
      </div>
    </div>
    <div class="sales-board-info">
      <div class="left">适用人群：</div>
        <div class="right">
          <!-- 下拉框selection组件 -->
          <selection :selections="peopleTypes"  @selectChange="onParamChange('forPeople', $event)"></selection>
        </div>
    </div>

    <div class="sales-board-info">
      <div class="left">购买数量</div>
        <div class="right">
          <!-- 购买数量组件 -->
          <count  @selectChange="onParamChange('proNumber', $event)"></count>
        </div>
    </div>

    <div class="sales-board-info">
      <div class="left">有效时间：</div>
      <div class="right">
        <p>五年</p>
      </div>
    </div>

    <div class="sales-board-info">
      <div class="left">总价：</div>
      <div class="right">
        <p>{{proNumber*700}}</p>
      </div>
    </div>

    <div class="sales-board-info">
      <button class="btn" @click="showPayDialog">立即购买</button>
    </div>
  </div>

  <!-- 产品说明信息 -->
  <div class="sales-board-description">
    <h3>产品说明</h3>
    <table class="sales-board-table">
    <tbody>
      <tr class="table-row">
        <td>安全安保</td>
        <td>办公文教</td>
        <td>彩票</td>
        <td>车辆物流</td>
        <td>成人用品</td>
        <td>出版传媒</td>
        <td>电脑硬件</td>
      </tr>
      <tr class="table-row">
        <td>电子电工</td>
        <td>房地产建筑装修</td>
        <td>分类平台</td>
        <td>服装鞋帽</td>
        <td>箱包饰品</td>
        <td>化工原料制品</td>
        <td>机械设备</td>
      </tr>
      <tr class="table-row">
        <td>家庭日用品</td>
        <td>家用电器</td>
        <td>教育培训</td>
        <td>节能环保</td>
        <td>金融服务</td>
        <td>礼品</td>
        <td>旅游住宿</td>
      </tr>
      <tr>
        <td>美容化妆</td>
        <td>母婴护理</td>
        <td>农林牧渔</td>
        <td>软件设备</td>
        <td>商务服务</td>
        <td>生活服务</td>
        <td>食品保健品</td>
      </tr>
      <tr>
        <td>手机数码</td>
        <td>通讯服务设备</td>
        <td>网络服务</td>
        <td>医疗服务</td>
        <td>游戏</td>
        <td>运动休闲娱乐</td>
        <td>招商加盟</td>
      </tr>
    </tbody>
    </table>
  </div>

  <!-- 点击立即购买弹出对话框 -->
    <myDialog :isShow="isShowPayDialog" @close="closePayDialog">
      <h3 slot="header-info">乐心心率手环支付页面</h3>
      <!-- 支付详情页面 -->
      <div slot="content-info">
        <table class="payDialog-table">
          <thead>
            <tr>
              <td>产品类型</td>
              <td>适用人群</td>
              <td>购买数量</td>
              <td>有效时间</td>
              <td>总价</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{proType.name}}</td>
              <td>{{forPeople.name}}</td>
              <td>{{proNumber}}</td>
              <td>五年</td>
              <td>{{proNumber*700}}</td>
            </tr>
          </tbody>
        </table>
        <h3>请选择银行</h3>
        <!-- 选择银行组件 -->
        <bankChoose></bankChoose>
        <button class="payDialog-btn" @click="confirmBuy">确认购买</button>
      </div>
    </myDialog>

    <!-- 支付选择状态框 -->
    <checkDialog :show-check-dialog="isShowCheckDialog" @on-close="closeCheckDialog"></checkDialog>
</div>
</template>

<script>
import RadioChoose from '../../components/detailSelectionComponents/radioChoose.vue'
import Selection from '../../components/detailSelectionComponents/Selection.vue'
import Count from '../../components/detailSelectionComponents/Count.vue'
import Dialog from '../../components/headerComponents/dialog.vue'
import BankChoose from '../../components/detailSelectionComponents/bankChoose.vue'
import CheckDialog from '../../components/detailSelectionComponents/checkDialog.vue'
export default {
  components: {
    radioChoose: RadioChoose,
    selection: Selection,
    count: Count,
    myDialog: Dialog,
    bankChoose: BankChoose,
    checkDialog: CheckDialog
  },
  data () {
    return {
      proType: {},
      forPeople: {},
      proNumber: 1,
      colorTypes: [
        {
          name: '红色版',
          value: 0
        },
        {
          name: '粉色版',
          value: 1
        },
        {
          name: '绿色版',
          value: 2
        },
        {
          name: '紫色版',
          value: 3
        }
      ],
      peopleTypes: [
        {
          name: '儿童',
          value: 0
        },
        {
          name: '少年',
          value: 1
        },
        {
          name: '青少年',
          value: 2
        },
        {
          name: '青年',
          value: 3
        },
        {
          name: '中年',
          value: 4
        },
        {
          name: '中老年',
          value: 5
        },
        {
          name: '老年',
          value: 6
        }
      ],
      isShowPayDialog: false,
      isShowCheckDialog: false
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
    },
    /* 点击立即购买显示购买对话框 */
    showPayDialog () {
      this.isShowPayDialog = true
    },
    /* 关闭购买对话框 */
    closePayDialog () {
      this.isShowPayDialog = false
    },
    /* 确认购买 */
    confirmBuy () {
      this.isShowPayDialog = false
      this.isShowCheckDialog = true
      /*  利用localStorage存储用户购买信息  */
      let data = {'name': '乐心心率手环', 'type': this.proType.name, 'people': this.forPeople.name, 'number': this.proNumber, 'time': '五年', 'price': this.proNumber * 700}
      localStorage.setItem('orderList2', JSON.stringify(data))
    },
    /* 关闭支付状态选择框 */
    closeCheckDialog () {
      this.isShowCheckDialog = false
    }
  },
  mounted () {
    this.proType = this.colorTypes[0]
    this.forPeople = this.peopleTypes[0]
    this.proNumber = 1
  }
}
</script>

<style>
</style>
