<template>
  <div class="recommend">
    <div class="rv-item" v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div> 
</template>

<script>
  export default {
    name : 'Recommend',
    props: {
      recommends: {
        type: Array,
        default() {
          return[]
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    font-size: 13px;
    padding: 10px 0px 20px;
    border-bottom: 8px solid #eee;
  }
  .rv-item{
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 10px 8px;
  }
  img{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
</style>