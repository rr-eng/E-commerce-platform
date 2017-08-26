<template>
  <div class="radioChoose-wrap">
    <ul>
      <li v-for="(item, index) in selections" :class="{active:index===nowIndex}" @click="chooseSelection(index)">
      {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selections: Array
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    chooseSelection (index) {
      this.nowIndex = index
      this.$emit('selectChange', this.selections[index])
    }
  }
}
</script>

<style>
.radioChoose-wrap ul li {
   list-style:none;
   display:inline-block;
   padding:0 10px;
   line-height:25px;
   border:1px solid #ccc;
   border-radius:5px;
   margin-right:10px;
   font-size:14px;
   cursor:pointer;
}
.radioChoose-wrap ul li.active {
  background:#55ca93;
  color:#fff;
}
</style>
