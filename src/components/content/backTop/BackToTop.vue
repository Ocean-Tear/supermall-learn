<template>
  <div class="back-to-top">
    <img src="~assets/img/common/top.png" alt="回到顶部">
  </div>
</template>

<script>
  export default {
    name : 'BackToTop',
  }

</script>

<style scoped>
  .back-to-top {
    position: fixed;
    z-index: 9;
    right: 10px;
    bottom: 55px;
  }
  
  .back-to-top img {
    width: 43px;
    height: 43px;
  }
</style>