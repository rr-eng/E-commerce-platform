<template>
<div class="bankChoose">
  <div class="banks">
    <ul>
      <li v-for="(item, index) in banks" :class="[item.class, {active: index === nowIndex}]" @click="chooseSelection(index)">
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      nowIndex: 0,
      banks: [
        {
          id: 101,
          name: '中国邮政储蓄银行',
          class: 'youzheng'
        },
        {
          id: 102,
          name: '中国建设银行',
          class: 'jianshe'
        },
        {
          id: 103,
          name: '中国农业银行',
          class: 'nongye'
        },
        {
          id: 104,
          name: '中国银行',
          class: 'chinabank'
        },
        {
          id: 105,
          name: '中国工商银行',
          class: 'gongshang'
        },
        {
          id: 106,
          name: '交通银行',
          class: 'jiaotong'
        },
        {
          id: 107,
          name: '中信银行',
          class: 'zhongxin'
        },
        {
          id: 108,
          name: '支付宝',
          class: 'zhifubao'
        }
      ]
    }
  },
  methods: {
    chooseSelection (index) {
      this.nowIndex = index
      /* 将银行的id传出去 */
      this.$emit('change', this.banks[index])
    }
  }
}
</script>

<style>
.banks ul li {
  list-style:none;
  display:inline-block;
  width:120px;
  height:35px;
  border:1px solid #aaa;
  background-image:url(../../assets/banks/banks.png);
  background-position:no-repeat;
  cursor:pointer;
  margin:5px;
}
.banks ul li.active {
  border:2px solid #55ca93;
}
.youzheng {
  background-position:-120px 0;
}
.jianshe {
  background-position:-720px 0;
}
.nongye {
  background-position:-1680px 0;
}
.zhanshang {
  background-position:-2160px 0;
}
.chinabank {
  background-position:-2520px 0;
}
.gongshang {
  background-position:-2640px 0;
}
.jiaotong {
  background-position:360px 0;
}
.zhongxin {
  background-position:-480px 0;
}
.zhifubao {
  background-position:-1920px 0;
}
</style>
