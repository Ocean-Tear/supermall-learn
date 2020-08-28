<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img v-lazy="item.image">
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name : 'swiper',
    props: {
      banners : Array
    },
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>