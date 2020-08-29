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
    <FeatureView></FeatureView>
    <TapControl class="tab-control" :titles="titles" @tabClick="tabClick"></TapControl>
    <GoodList :goods="showGoods"></GoodList>
    <ul>
      <li>1列表</li>
      <li>2列表</li>
      <li>3列表</li>
      <li>4列表</li>
      <li>5列表</li>
      <li>6列表</li>
      <li>7列表</li>
      <li>8列表</li>
      <li>9列表</li>
      <li>10列表</li>
      <li>11列表</li>
      <li>12列表</li>
      <li>13列表</li>
      <li>14列表</li>
      <li>15列表</li>
      <li>16列表</li>
      <li>17列表</li>
      <li>18列表</li>
      <li>19列表</li>
      <li>20列表</li>
      <li>21列表</li>
      <li>22列表</li>
      <li>23列表</li>
      <li>24列表</li>
      <li>25列表</li>
      <li>26列表</li>
      <li>27列表</li>
      <li>28列表</li>
      <li>29列表</li>
      <li>30列表</li>
      <li>31列表</li>
      <li>32列表</li>
      <li>33列表</li>
      <li>34列表</li>
      <li>35列表</li>
      <li>36列表</li>
      <li>37列表</li>
      <li>38列表</li>
      <li>39列表</li>
      <li>40列表</li>
      <li>41列表</li>
      <li>42列表</li>
      <li>43列表</li>
      <li>44列表</li>
      <li>45列表</li>
      <li>46列表</li>
      <li>47列表</li>
      <li>48列表</li>
      <li>49列表</li>
      <li>50列表</li>
    </ul>
  </div>
</template>
<script>
  // 公共组件
  import NavBar from 'components/common/navbar/NavBar';
  import TapControl from 'components/content/tapControl/TapControl';
  
  // 业务组件
  import Swipe from 'views/home/childComps/Swipe';
  import RecommendView from 'views/home/childComps/RecommendView';
  import FeatureView from 'views/home/childComps/FeatureView';
  import GoodList from '@/components/content/goods/GoodList';

  // 数据接口
  import {getHomeMultidate, getHomeGoods} from '@/network/home.js';

  export default {
    name : 'home',
    components: {
      NavBar,
      Swipe,
      RecommendView,
      FeatureView,
      TapControl,
      GoodList
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
        currentType: 'pop'
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidate()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /*  
       * 事件监听相关   
       */
      tabClick(index) {
        // 通过keys方法获取对应index的键，将其放入currentType
        this.currentType = Object.keys(this.goods)[index]
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
        })
      },
    }
  }
</script>

<style scoped>
  #home{
    padding: 44px 0px 49px 0px;
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
    position: sticky;
    top: 44px;
  }
</style>