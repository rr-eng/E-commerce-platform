<template>
<div class="selection-wrap">
  <div class="selection-title" @click="toggleDrop">
    <span> {{ selections[nowIndex].name }} </span>
    <div class="arrow"></div>
  </div>
  <div class="selection-list" v-show="isDrop">
    <ul>
      <li v-for="(item,index) in selections" @click="chooseSelection(index)">{{item.name}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    selections: Array
  },
  data () {
    return {
      nowIndex: 0,
      isDrop: false
    }
  },
  methods: {
    toggleDrop () {
      this.isDrop = !this.isDrop
    },
    chooseSelection (index) {
      this.nowIndex = index
      this.isDrop = !this.isDrop
      this.$emit('selectChange', this.selections[this.nowIndex])
    }
  }
}
</script>

<style scoped>
.selection-wrap {
  position:relative;
  display:inline-block;
}
.selection-title {
  position:relative;
  line-height:25px;
  padding:0 10px 0 10px;
  border:1px solid #ccc;
  border-radius:5px;
  display:inline-block;
  cursor:pointer;
  font-size:14px;
}
.selection-title .arrow {
  display:inline-block;
  border-top:6px solid #888;
  border-left:5px solid transparent;
  border-right:5px solid transparent;
  margin-left:12px;
  vertical-align:middle;
}
.selection-list {
  width:100%;
  background:#fff;
  border-top:1px solid #e3e3e3;
  position:absolute;
  top:25px;
  left:0;
}
.selection-list ul li {
  list-style:none;
  padding:3px 10px 3px 10px;
  border-left:1px solid #e3e3e3;
  border-right:1px solid #e3e3e3;
  border-bottom:1px solid #e3e3e3;
  font-size:14px;
}
.selection-list ul li:hover {
  background:#eee;
  cursor:pointer;
}
</style>
