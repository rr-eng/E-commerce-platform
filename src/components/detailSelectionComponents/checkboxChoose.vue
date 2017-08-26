<template>
<div class="checkbox-component">
  <ul>
    <li v-for="(item, index) in selections" :class="{active: item.checked}" @click="toggleSelections(item,index)">
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
      nowIndexes: []
    }
  },
  methods: {
    toggleSelections (item, index) {
      if (this.nowIndexes.indexOf(index) === -1) {
        this.nowIndexes.push(index)
        item.checked = !item.checked
      } else {
        item.checked = !item.checked
      }
      this.$emit('selectChange', this.nowIndexes)
    }
  }
}
</script>

<style scoped>
.checkbox-component ul li {
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
.checkbox-component ul li.active {
  background:#55ca93;
  color:#fff;
}
</style>
