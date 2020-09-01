<template>
  <div class="goodListItem" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="gl-Item-Text">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div> 
</template>

<script>
  export default {
    name : 'GoodListItem',
    props : {
      goodsItem : {
        type: Object,
        default() {
          return []
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goodListItem {
    width: 48%;
    height: 10%;
    margin-bottom: 10px;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .gl-Item-Text {
    text-align: center;
    margin-top: 5px;
    padding: 0px 3px;
    font-size: 14px;
  }
  .gl-Item-Text>p{
    margin-bottom: 3px;
    text-align: center;
    /* 文本溢出后代替 */
    text-overflow:ellipsis;
    /* 文本不换行 */
    white-space:nowrap;
    /* 溢出隐藏 */
    overflow:hidden;
  }
  .gl-Item-Text .price {
    margin-right: 20px;
    color: var(--color-tint);
  }
  .gl-Item-Text .collect  {
    position: relative;
  }
  .collect::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    left: -15px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>