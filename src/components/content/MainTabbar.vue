<template>
  <TabBar>
    <TabBarItem path="/home">
      <template v-slot:item-icon><img src="~assets/img/tab-bar/home.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="~assets/img/tab-bar/home_active.svg" alt=""></template>
      <template v-slot:item-text><div>首页</div></template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:item-icon><img src="~assets/img/tab-bar/category.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="~assets/img/tab-bar/category_active.svg" alt=""></template>
      <template v-slot:item-text><div>分类</div></template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template v-slot:item-icon><img src="~assets/img/tab-bar/cart.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="~assets/img/tab-bar/cart_active.svg" alt=""></template>
      <template v-slot:item-text><div>购物车</div></template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template v-slot:item-icon><img src="~assets/img/tab-bar/profile.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="~assets/img/tab-bar/profile_active.svg" alt=""></template>
      <template v-slot:item-text><div>我的</div></template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  export default {
    name : 'MainTabBar',
    components : {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>