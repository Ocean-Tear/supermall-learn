<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"
  :height="195">
    <van-swipe-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img v-lazy="item.image" @load="swipeLoad">
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name : 'swiper',
    props: {
      banners : {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      swipeLoad() {
        this.$emit('swipeLoad')
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>