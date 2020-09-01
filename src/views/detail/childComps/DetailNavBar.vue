<template>
  <div class="detailNavBar">
    <NavBar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div class="title-item" 
              v-for="(item, index) in titles" @click="navClick(index)"
              :key="index" :class="{active : index == currentIndex}">{{item}}</div>
        </div>
      </template>
    </NavBar>
  </div> 
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar';

  export default {
    name : 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      navClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 14px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-tint);
  }

  .back img{
    margin-top: 10px;
  }
</style>