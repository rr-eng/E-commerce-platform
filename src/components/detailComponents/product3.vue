<template>
<div class="sales-board">
  <!-- 头部信息 -->
  <div class="sales-board-intro">
    <h3>小米空气净化套装</h3>
    <p>此款小米净化器套装包含小米空气净化器一个，一只空气净化器滤芯替换装。新研发出的空气增压系统，
    10分钟让房间空气清新。 高效净化滤芯360°进风，经过层层净化，不放过任何有害物质。</p>
  </div>
  <!-- 规格说明 -->
  <div class="sales-board-form">
    <!-- 购买数量 -->
    <div class="sales-board-info">
      <div class="left">购买数量：</div>
      <div class="right">
        <!-- 购买数量组件 -->
        <count @selectChange="onParamChange('proNumber', $event)"></count>
      </div>
    </div>

    <div class="sales-board-info">
      <div class="left">适用地区：</div>
      <div class="right">
        <!-- 多选checkboxChoose组件 -->
        <checkboxChoose :selections="placesTypes" @selectChange="onParamChange('proPlaces', $event)"></checkboxChoose>
      </div>
    </div>

    <div class="sales-board-info">
      <div class="left">有效时间：</div>
      <div class="right">
        <p class="time">
          <p>一年</p>
        </p>
      </div>
    </div>

    <div class="sales-board-info">
      <div class="left">总价：</div>
      <div class="right">
        <p>{{proNumber*1000}}</p>
      </div>
    </div>

    <div class="sales-board-info">
      <button class="btn" @click="showPayDialog">立即购买</button>
    </div>
  </div>

  <!-- 产品说明信息 -->
  <div class="sales-board-description">
    <h3>产品说明</h3>
    <p>空气增压系统改善室内空气质量，加速空间空气流通；清洁滤芯可吸附净化环境中PM2.5、甲醛、烟尘、毛发等污染物；
    远程APP遥控开启，环境空气不良自动激活，WIFI智能控制，操作便捷。</p>
    <p>全新的核心算法，3键操作简单明了，手握防滑设计，不易脱落方便使用。实现甲醛和PM2.5同检先进技术，
    数据精度高性能稳响应速度快特点，有效降低了测试仪的成本。</p>
    <p>拥有高雅颜值的家用空气净化器，为你开启洁净的呼吸生活。触屏的操控方式，空气质量指数一目了然。
    它采用全新3D循环净化，四重过滤无残留，更有高效的负离子发生器，让你享受森林般的呼吸。</p>
  </div>

  <!-- 更多相关产品 -->
  <div class="more-products">
    <h3>更多相关产品</h3>
  </div>

  <!-- 点击立即购买弹出支付对话框 -->
  <myDialog :isShow="isShowPayDialog" @close="closePayDialog">
    <h3 slot="header-info">小米空气净化套装</h3>
    <div slot="content-info">
      <table class="payDialog-table">
        <thead>
          <tr>
            <td>购买数量</td>
            <td>适用地区</td>
            <td>有效时间</td>
            <td>总价</td>
          </tr>
        </thead>
        <tbody>
          <tr>
           <td>{{proNumber}}</td>
           <td>
             <span v-for="item in proPlaces">{{item.name}}</span>
           </td>
           <td>一年</td>
           <td>{{proNumber*1000}}</td>
          </tr>
        </tbody>
      </table>
      <h3>请选择银行</h3>
      <!-- 选择银行组件 -->
      <bankChoose></bankChoose>
      <button class="payDialog-btn" @click="confirmBuy">确认购买</button>
    </div>
  </myDialog>

  <!-- 支付状态选择框 -->
  <checkDialog :show-check-dialog="isShowCheckDialog" @on-close="closeCheckDialog"></checkDialog>
</div>
</template>

<script>
import Count from '../../components/detailSelectionComponents/Count.vue'
import CheckboxChoose from '../../components/detailSelectionComponents/checkboxChoose.vue'
import Dialog from '../../components/headerComponents/dialog.vue'
import BankChoose from '../../components/detailSelectionComponents/bankChoose.vue'
import CheckDialog from '../../components/detailSelectionComponents/checkDialog.vue'
export default {
  components: {
    count: Count,
    checkboxChoose: CheckboxChoose,
    myDialog: Dialog,
    bankChoose: BankChoose,
    checkDialog: CheckDialog
  },
  data () {
    return {
      proNumber: 1,
      proPlaces: [],
      placesTypes: [
        {
          name: '卧室',
          value: 0,
          checked: false
        },
        {
          name: '客厅',
          value: 1,
          checked: false
        },
        {
          name: '厨房',
          value: 2,
          checked: false
        },
        {
          name: '教室',
          value: 3,
          checked: false
        },
        {
          name: '实验室',
          value: 4,
          checked: false
        }
      ],
      isShowPayDialog: false,
      isShowCheckDialog: false
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
      console.log(this[attr])
    },
    showPayDialog () {
      this.isShowPayDialog = true
    },
    closePayDialog () {
      this.isShowPayDialog = false
    },
    /* 确认购买 */
    confirmBuy () {
      this.isShowPayDialog = false
      this.isShowCheckDialog = true
      /* 利用localStorage存储用户购买信息 */
      let data = {'name': '小米空气净化套装', 'number': this.proNumber, 'proPlace': this.proPlaces.name, 'time': '一年', 'price': this.proNumber * 1000}
      localStorage.setItem('orderList3', JSON.stringify(data))
    },
    /* 关闭支付选择状态框 */
    closeCheckDialog () {
      this.isShowCheckDialog = false
    }
  },
  mounted () {
    this.proNumber = 1
    this.proPlaces = [this.placesTypes[0]]
  }
}
</script>

<style>
</style>
