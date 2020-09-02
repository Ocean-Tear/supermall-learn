<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"
  :height="195" @change="onChange">
    <van-swipe-item class="swipe-item" v-for="(item, index) in TopImages" :key="index">
      <img v-lazy="item" >
    </van-swipe-item>
    <template v-slot:indicator>
      <div class="custom-indicator">
        <span class="ind-item" 
        v-for="index in TopImages.length" :key="index"
        :class="{active : current == index}"
        ></span>
      </div>
    </template>
  </van-swipe>
</template>

<script>
  export default {
    name : 'detailSwiper',
    props: {
      TopImages : {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        current: 0
      }
    },
    methods: {
      onChange(index) {
        this.current = index + 1;
      },
    },
    mounted() {
      this.onChange(0)
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }

  .my-swipe {
    height: 340px;
  }

  .swipe-item {
    height: 340px;
    overflow: hidden;
  }

  .custom-indicator {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
  }
  
  .ind-item {
    width: 11px;
    height: 11px;
    background-color: white;
    border-radius: 11px;
    float: left;
    margin-left: 10px;
  }

  .active {
    background-color: red;
  }
</style>