<template>
  <div class="count">
    <div class="counter-btn" @click="decrease">-</div>
    <div class="counter-show">
      <input type="text" value="1" v-model="number"/>
    </div>
    <div class="counter-btn" @click="increase">+</div>
  </div>
</template>

<script>
export default {
  /* 默认指定最大值和最小值 */
  props: {
    max: {
      type: Number,
      default: 10
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      number: this.min
    }
  },
  methods: {
    decrease () {
      if (this.number <= this.min) {
        alert('数字范围为1--10')
      }
      this.number--
    },
    increase () {
      if (this.number >= this.max) {
        alert('数字范围为1--10')
      }
      this.number++
    }
  },
  watch: {
    number () {
      this.$emit('selectChange', this.number)
    }
  }
}
</script>

<style scoped>
.counter-show {
  float:left;
}
.counter-show input {
  width:30px;
  height:23px;
  border:none;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  text-align:center;
  line-height:23px;
}
.counter-btn {
  float:left;
  width:23px;
  height:23px;
  border:1px solid #ccc;
  text-align:center;
  line-height:23px;
  font-size:19px;
  cursor:pointer;
}
.counter-btn:hover {
  background:#eee;
}
</style>
