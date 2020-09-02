<template>
  <div class="shop-info" v-if="Object.keys(shop) != 0">
    <div class="shop-title">
      <img :src="shop.logo">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-detail">
      <div class="result">
        <div class="totalsell">
          {{shop.sells | parseSells}}
          <span>总销量</span>
        </div>
        <div class="totalitem">
          {{shop.goods}}
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="score">
        <div class="score-item" v-for="(item, index) in shop.score" :key="index">
          <span class="name">{{item.name}}</span>
          <span class="count" :class="{'score-better' : item.isBetter}">{{item.score}}</span>
          <span class="icon" :class="{'better-more' : item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">
        进店逛逛
      </div>
    </div>
  </div> 
</template>

<script>
  export default {
    name : 'DetailShopInfo',
    props: {
      shop : {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      parseSells: function(sells) {
        if(sells < 10000) return sells
        return (sells / 10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 10px;
    border-bottom: 5px solid rgb(246,246,246);
  }

  /* 店铺标题 */
  .shop-title {
    padding: 20px 0px;
    display: flex;
    align-items: center;
  }
  .shop-title img {
    width: 50px;
    height: 50px;
    border: 1px solid rgb(204, 200, 200);
    border-radius: 50px;
  }
  .shop-title span {
    margin-left: 10px;
  }

  /* 店铺信息 */
  .shop-detail {
    display: flex;
  }

  .shop-detail .result {
    display: flex;
    padding: 10px 0px 10px 10px;
    margin-left: 10px;
  }
  .shop-detail .result .totalsell,.shop-detail .result .totalitem {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 22px;
    margin-right: 20px;
  }
  .shop-detail .result .totalsell span, .shop-detail .result .totalitem span {
    margin-top: 10px;
    font-size: 14px;
  }
  .shop-detail .result .totalitem {
    margin-right: 0px;
    padding-right: 30px;
    border-right: 1px solid rgb(239,239,239);
  }

  .shop-detail .score {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
  }
  .shop-detail .score .score-item {
    padding: 5px;
  }
  .score .score-item span {
    margin-left: 10px;
  }
  .count {
    color: rgb(84,147,35);
  }
  .icon {
    background-color: rgb(84,147,35);
    color: white;
    border-radius: 2px;
  }
  .score-better {
    color: red;
  }
  .better-more {
    background-color: red;
  }

  /* 店铺底部 */
  .shop-bottom {
    display: flex;
    justify-content: center;
    padding: 15px 0px 30px;
  }
  .shop-bottom .enter-shop {
    padding: 10px 60px;
    border-radius: 10px;
    background-color: rgb(241,245,251);
  }
</style>