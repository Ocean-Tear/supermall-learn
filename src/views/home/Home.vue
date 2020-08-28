<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>
    <!-- 轮播图 -->
    <Swipe :banners="banners"></Swipe>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultidate} from '@/network/home.js';
import Swipe from 'views/home/childComps/Swipe';
import RecommendView from 'views/home/childComps/RecommendView';

  export default {
    name : 'home',
    components: {
      NavBar,
      Swipe,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultidate().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
      })
    },
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>