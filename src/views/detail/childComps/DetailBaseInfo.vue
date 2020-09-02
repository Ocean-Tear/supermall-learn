<template>
  <div v-if="Object.keys(goods).length != 0" class="base-info">
    <div class="inf-title">
      <h3>{{goods.title}}</h3>
    </div>
    <div class="inf-Price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="inf-about">
      <span class="column">{{goods.columns[0]}}</span>
      <span class="column">{{goods.columns[1]}}</span>
      <span class="column">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="inf-services">
      <div v-for="index in goods.services.length-1" :key="index">
        <img class="ser-icon" :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div> 
</template>

<script>
  export default {
    name : 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        defualt() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    padding: 10px;
    padding-bottom: 0px;
    border-bottom: 5px solid rgb(246,246,246);
  }

  /* 标题 */
  .inf-title {
    margin-bottom: 10px;
  }
  .inf-title h3{
    font-weight: 500;
    color: black;
    font-size: 18px;
  }

  /* 价格 */
  .inf-Price {
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
  }
  .inf-Price .newPrice {
    color: var(--color-tint);
    font-size: 20px;
    margin-right: 5px;
  }
  .inf-Price .oldPrice {
    font-size: 12px;
    text-decoration: line-through;
    margin-right: 5px;
    margin-bottom: 2px;
  }
  .inf-Price .discount {
    background-color: var(--color-tint);
    color: white;
    padding: 2px 5px;
    border-radius: 10px;
    font-size: 12px;
    margin-bottom: 7px;
  }

  /* 字条 */
  .inf-about {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 3px double rgb(242,244,243);
  }

  .inf-about .column {
    font-size: 12px;
    color: gray;
  }

  /* 服务 */
  .inf-services {
    padding: 20px 0px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
  .inf-services .ser-icon{
    width: 13px;
    height: 13px;
  }
</style>