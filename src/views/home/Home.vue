<template>
  <!-- 
    @mousewheel.prevent
    禁用鼠标滚轮
  -->
  <div id="home" @mousewheel.prevent>
    <!-- 导航栏 -->
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>
    <!-- 使用滚动插件包裹内容 -->
    <Scroll class="content" ref="scroll" 
      :probeType="3" @scroll="scrolling"
      :pullUpLoad="true" @pullingUp="LoadMore"
    >
      <!-- 轮播图 -->
      <Swipe :banners="banners"></Swipe>
      <!-- 推荐栏 -->
      <RecommendView :recommends="recommends"></RecommendView>
      <!-- 周推栏 -->
      <FeatureView></FeatureView>
      <!-- 切换栏 -->
      <TapControl class="tab-control" :titles="titles" @tabClick="tabClick"></TapControl>
      <!-- 商品显示栏 -->
      <GoodList :goods="showGoods"></GoodList>
    </Scroll>
    <BackToTop v-show="isShow" class="back-to-top" @click.native="backClick"></BackToTop>
  </div>
</template>
<script>
  // 公共组件
  import NavBar from 'components/common/navbar/NavBar';
  import TapControl from 'components/content/tapControl/TapControl';
  import Scroll from 'components/common/scroll/Scroll';
  
  // 业务组件
  import Swipe from 'views/home/childComps/Swipe';
  import RecommendView from 'views/home/childComps/RecommendView';
  import FeatureView from 'views/home/childComps/FeatureView';
  import GoodList from '@/components/content/goods/GoodList';
  import BackToTop from '@/components/content/backTop/BackToTop';

  // 数据接口
  import {getHomeMultidate, getHomeGoods} from '@/network/home.js';
  import BScroll from 'better-scroll';

  export default {
    name : 'home',
    components: {
      NavBar,
      Swipe,
      RecommendView,
      FeatureView,
      TapControl,
      GoodList,
      Scroll,
      BackToTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop' : {page: 0, list: []},
          'new' : {page: 0, list: []},
          'sell' : {page: 0, list: []},
        },
        currentType: 'pop',
        isShow: false
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidate()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      
    },
    updated() {
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh()
      })
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      },
    },
    methods: {
      /*  
       * 事件监听相关   
       */
      tabClick(index) {
        // 通过keys方法获取对应index的键，将其放入currentType
        this.currentType = Object.keys(this.goods)[index]
      },
      backClick() {
        // 获取Scroll里面的scroll对象，调用scrollTo方法返回顶部
        this.$refs.scroll.scrollTo()
      },
      scrolling(position) {
        this.isShow = (-position.y) > 1000
      },
      LoadMore() {
        this.getHomeGoods(this.currentType)
      },
      /* 
       * 网络相关请求
       */
      getHomeMultidate() {
        getHomeMultidate().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = page

          this.$refs.scroll.finishPullUp()
        })
      },
    },
  }
</script>

<style scoped>
  #home{
    height: calc(100vh - 93px);
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  
  .tab-control {
    z-index: 9;
  }

  .content {
    margin-top: 44px;
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>