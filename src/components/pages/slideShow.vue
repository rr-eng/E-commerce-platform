<template>
<div class="slideShow" @mouseover="clear" @mouseout="scroll">
  <div class="slide-img">
    <a :href="slides[nowIndex].href">
      <img :src="slides[nowIndex].src" />
    </a>
  </div>
  <div class="slide-info">
    <p>{{slides[nowIndex].description}}</p>
    <ul>
      <li @click="goto(preIndex)">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{ 'active' : index === nowIndex}" href="javascript:;">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    slides: Array,
    interval: Number
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true,
      timer: null
    }
  },
  computed: {
    preIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    /* 手动控制轮播方法 */
    goto (index) {
      this.nowIndex = index
    },
    /* 自动轮播 */
    scroll () {
      this.timer = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.interval)
    },
    /* 鼠标移出清除计时器 */
    clear () {
      clearInterval(this.timer)
    }
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style scoped>
/* 实现动画效果 */
.slideShow {
  position:relative;
  width:900px;
  height:500px;
  margin:0 0 15px 20px;
}
.slide-img {
  width:100%;
}
.slide-img img {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:500px;
}
.slide-info {
  position:absolute;
  bottom:0;
  width:100%;
  height:50px;
  line-height:50px;
  background:#000;
  opacity:0.5;
  color:#fff;
}
.slide-info p {
  float:left;
  margin-left:30px;
}
.slide-info ul {
  float:right;
  margin-right:30px;
}
.slide-info ul li {
  list-style:none;
  display:inline-block;
  width:20px;
  height:10px;
  cursor:pointer;
}
.slide-info ul li a {
  text-decoration:none;
  color:#fff;
}
.slide-info .active {
  font-size:18px;
  color:#f60;
}
</style>
