<template>
<div class="orderList">
  <h3>我的订单信息</h3>
  <table class="orderList-table">
    <tr class="table-title">
      <td>产品名称</td>
      <td>产品类型</td>
      <td>售卖地区</td>
      <td>购买数量</td>
      <td>有效时间</td>
      <td>总价</td>
    </tr>
    <tr class="table-body">
      <td>{{name1}}</td>
      <td>{{type1}}</td>
      <td>{{place1}}</td>
      <td>{{number1}}</td>
      <td>{{time1}}</td>
      <td>{{price1}}</td>
    </tr>
  </table>

  <table class="orderList-table">
    <tr class="table-title">
      <td>产品名称</td>
      <td>产品类型</td>
      <td>适用人群</td>
      <td>购买数量</td>
      <td>有效时间</td>
      <td>总价</td>
    </tr>
    <tr class="table-body">
      <td>{{name2}}</td>
      <td>{{type2}}</td>
      <td>{{people2}}</td>
      <td>{{number2}}</td>
      <td>{{time2}}</td>
      <td>{{price2}}</td>
    </tr>
  </table>

  <table class="orderList-table">
      <tr class="table-title">
        <td>产品名称</td>
        <td>购买数量</td>
        <td>适用地区</td>
        <td>有效时间</td>
        <td>总价</td>
      </tr>
      <tr class="table-body">
        <td>{{name3}}</td>
        <td>{{number3}}</td>
        <td>{{place3}}</td>
        <td>{{time3}}</td>
        <td>{{price3}}</td>
      </tr>
    </table>

    <table class="orderList-table">
          <tr class="table-title">
            <td>产品名称</td>
            <td>产品类型</td>
            <td>购买数量</td>
            <td>适用人群</td>
            <td>有效时间</td>
            <td>总价</td>
          </tr>
          <tr class="table-body">
            <td>{{name4}}</td>
            <td>{{type4}}</td>
            <td>{{number4}}</td>
            <td>{{people4}}</td>
            <td>{{time4}}</td>
            <td>{{price4}}</td>
          </tr>
        </table>
</div>
</template>

<script>
export default {
  data () {
    return {
      name1: JSON.parse(localStorage.getItem('orderList2')).name,
      type1: JSON.parse(localStorage.getItem('orderList2')).type,
      place1: JSON.parse(localStorage.getItem('orderList2')).place,
      number1: JSON.parse(localStorage.getItem('orderList2')).number,
      time1: JSON.parse(localStorage.getItem('orderList2')).time,
      price1: JSON.parse(localStorage.getItem('orderList2')).price,

      name2: JSON.parse(localStorage.getItem('orderList2')).name,
      type2: JSON.parse(localStorage.getItem('orderList2')).type,
      people2: JSON.parse(localStorage.getItem('orderList2')).people,
      number2: JSON.parse(localStorage.getItem('orderList2')).number,
      time2: JSON.parse(localStorage.getItem('orderList2')).time,
      price2: JSON.parse(localStorage.getItem('orderList2')).price,

      name3: JSON.parse(localStorage.getItem('orderList3')).name,
      number3: JSON.parse(localStorage.getItem('orderList3')).number,
      place3: JSON.parse(localStorage.getItem('orderList3')).place,
      time3: JSON.parse(localStorage.getItem('orderList3')).time,
      price3: JSON.parse(localStorage.getItem('orderList3')).price,

      name4: JSON.parse(localStorage.getItem('orderList4')).name,
      type4: JSON.parse(localStorage.getItem('orderList4')).type,
      number4: JSON.parse(localStorage.getItem('orderList4')).number,
      people4: JSON.parse(localStorage.getItem('orderList4')).people,
      time4: JSON.parse(localStorage.getItem('orderList4')).time,
      price4: JSON.parse(localStorage.getItem('orderList4')).price
    }
  }
}
</script>

<style>
.orderList {
  padding:20px 200px 30px 200px;
}
.orderList .orderList-table {
  margin:20px 0 20px 100px;
  border:1px solid #aaa;
  border-collapse:collapse;
}
.orderList .orderList-table .table-title td {
  padding:5px 15px;
  border:1px solid #aaa;
  background:#55ca93;
  text-align:center;
}
.orderList .orderList-table .table-body td {
  padding:5px 15px;
  border:1px solid #aaa;
  font-size:15px;
  text-align:center;
}
.orderList .orderList-table .table-body td:hover {
  background:#e3e3e3;
  cursor:pointer;
}
</style>
