<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length != 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" 
      :key="index" :src="item" @load="imageLoad">
    </div>
  </div> 
</template>

<script>
  export default {
    name : 'DetailGoodsInfo',
    props: {
      detailInfo: {
        type: Object,
        defualt() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0px;
    border-bottom: 5px solid #f2f5f8;
  }

  /* 介绍 */
  .info-desc {
    padding: 0px 15px;
  }
  .info-desc .start, .info-desc .end {
    height: 1px;
    width: 90px;
    background-color: #a3a3a5;
    position: relative;
  }
   .info-desc .end {
     float: right;
   }
   .info-desc .start::before, .info-desc .end::after {
     content: '';
     width: 5px;
     height: 5px;
     position: absolute;
     bottom: 0;
     background-color: #333;
   }
   .info-desc .end::after {
     right: 0;
   }
   .info-desc .desc {
     padding: 15px 0px;
   }

   /* 图片列表 */
   .info-key {
     padding: 15px 15px;
   }
   .info-list img{
     width: 100%;
   }
</style>