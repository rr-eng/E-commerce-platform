<template>
<div class="sales-board">
  <!-- 头部信息 -->
  <div class="sales-board-intro">
    <h3>华为智能运动手表</h3>
    <p>这一款智能运动手表，外观设计成休闲手表的造型，经典的圆形表盘可显示传统指针画面，
也能显示APP与运动数据，侧面的按键能够一键进入运动模式，操作方便。</p>
  </div>
  <!-- 规格说明 -->
  <div class="sales-board-form">

    <div class="sales-board-info">
      <div class="left">产品类型：</div>
      <div class="right">
        <!-- 单选radioChoose组件 -->
        <radioChoose :selections="colorTypes" @selectChange="onParamChange('proType', $event)"></radioChoose>
      </div>
    </div>

    <div class="sales-board-info">
      <div class="left">售卖地区：</div>
      <div class="right">
        <!-- 下拉框selection组件 -->
        <selection :selections='districts' @selectChange="onParamChange('proPlaces', $event)"></selection>
      </div>
    </div>

    <div class="sales-board-info">
      <div class="left">购买数量</div>
      <div class="right">
        <!-- 购买数量组件 -->
        <count @selectChange="onParamChange('proNumber', $event)"></count>
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
        <p>{{proNumber*500}}元</p>
      </div>
    </div>

    <div class="sales-board-info">
      <button class="btn" @click="showPayDialog">立即购买</button>
    </div>
  </div>

  <!-- 产品说明信息 -->
  <div class="sales-board-description">
    <h3>产品说明</h3>
    <p>这款华为智能手表可通过蓝牙连接手机，满足通话、消息通知的需要。同时支持快捷支付、自动识别运动状态等功能，
    为您的生活带来很大的便利。个性时尚的外观，更为您整体增添一份别样的韵味。</p>
    <p>全新升级，同步手表数据到手机，记录全天的步数、距离、热量和爬高等数据，轨迹一键分享到朋友圈，科学规划跑步计划，
    同步计划到手机，运动中实时指导，逐步提高跑步成绩。</p>
    <p>连接手机蓝牙，即可使用通话功能，特设来电提醒和拒接功能通讯管理，即时消息同志，在手腕上即可完成查看和回复。
    可识别运动状态，进行实时健康监测， 1.5H磁吸快充。 </p>
  </div>

  <!-- 更多相关产品 -->
  <div class="more-products">
    <h3>更多相关产品</h3>
  </div>

  <!-- 点击立即购买弹出对话框 -->
  <myDialog :isShow="isShowPayDialog" @close="closePayDialog">
    <h3 slot="header-info">华为智能运动手表支付页面</h3>
    <!-- 支付详情页面 -->
    <div slot="content-info">
      <table class="payDialog-table">
        <thead>
          <tr>
            <td>产品类型</td>
            <td>售卖地区</td>
            <td>购买数量</td>
            <td>有效时间</td>
            <td>总价</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{proType.name}}</td>
            <td>{{proPlaces.name}}</td>
            <td>{{proNumber}}</td>
            <td>五年</td>
            <td>{{proNumber*500}}</td>
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
      proPlaces: {},
      proNumber: 1,
      colorTypes: [
        {
          name: '黑色版',
          value: 0
        },
        {
          name: '灰色版',
          value: 1
        },
        {
          name: '白色版',
          value: 2
        }
      ],
      districts: [
        {
          name: '北京',
          value: 0
        },
        {
          name: '上海',
          value: 1
        },
        {
          name: '广州',
          value: 2
        },
        {
          name: '深圳',
          value: 3
        },
        {
          name: '武汉',
          value: 4
        },
        {
          name: '重庆',
          value: 5
        }
      ],
      isShowPayDialog: false,
      /* bankId开始为null */
      bankId: null,
      isShowCheckDialog: false,
      isShowOrderList: false
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
    },
    /* 点击立即购买显示购买对话框 */
    showPayDialog () {
      this.isShowPayDialog = true
      /* 产生bug 修改后添加的代码 */
      this.isShowCheckDialog = false
    },
    /* 关闭购买对话框 */
    closePayDialog () {
      this.isShowPayDialog = false
    },
    /* 确认购买 */
    confirmBuy () {
      this.isShowPayDialog = false
      this.isShowCheckDialog = true
      /* 利用localStorage存储用户购买信息 */
      let data = {'name': '华为智能运动手表', 'type': this.proType.name, 'place': this.proPlaces.name, 'number': this.proNumber, 'time': '五年', 'price': this.proNumber * 500}
      localStorage.setItem('orderList1', JSON.stringify(data))
    },
    /* 关闭支付状态选择框 */
    closeCheckDialog () {
      this.isShowCheckDialog = false
    }
  },
  mounted () {
    this.proType = this.colorTypes[0]
    this.proPlaces = this.districts[0]
    this.proNumber = 1
  }
}
</script>

<style>
.payDialog-table {
  width:100%;
  margin-bottom:10px;
  border-collapse:collapse;
}
.payDialog-table thead tr td {
  border:1px solid #e3e3e3;
  padding:3px 5px;
  background:#55c396;
  text-align:center;
}
.payDialog-table tbody tr td  {
   border:1px solid #e3e3e3;
   padding:3px 5px;
   text-align:center;
   font-size:14px;
}
.payDialog-btn {
  width:80px;
  height:40px;
  border:1px solid #eee;
  border-radius:7px;
  background:#55ca93;
  font-size:15px;
  color:#fff;
  cursor:pointer;
}
</style>
