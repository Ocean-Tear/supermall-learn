<template>
  <div class="Detail">
    <DetailNavBar class="navBar"></DetailNavBar>
    <Scroll class="content" ref="bscroll">
      <DetailSwipe :TopImages="topImages"></DetailSwipe>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="Shop"></DetailShopInfo>
    </Scroll>
  </div> 
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll';
  import DetailNavBar from 'views/detail/childComps/DetailNavBar';
  import DetailSwipe from '@/views/detail/childComps/DetailSwipe';
  import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo';
  import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo';

  import {getDetail, Goods, Shop} from '@/network/detail';

  export default {
    name : 'Detail',
    data() {
      return {
        iid: null,
        topImages : [],
        goods: {},
        Shop: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwipe,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        const data = res.result
        console.log(res);
        // 获取轮播图数据
        this.topImages = data.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 获取卖家信息
        this.Shop = new Shop(data.shopInfo)
      })
    },
    mounted() {
      setTimeout(() => {
        this.$refs.bscroll.refresh()
      }, 500);
    }
  }
</script>

<style scoped>
  .Detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .navBar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100vh - 44px);
  }
</style>