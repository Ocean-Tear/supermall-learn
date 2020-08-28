<template>
  <div class="tap-control">
    <div class="tc-item"  v-for="(item, index) in titles"
     :key="index" :class="{active : index == currentIndex}"
     @click="changeIndex(index)">
      <span>{{item}}</span>
    </div>
  </div> 
</template>

<script>
  export default {
    name : 'TapControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 1
      }
    },
    methods: {
      changeIndex(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tap-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: white;
  }

  .tc-item {
    flex: 1;
    height: 40px;
  }

  .active span {
    padding: 0px 5px 5px 5px;
    border-bottom: 2px solid var(--color-tint);
    color:  var(--color-tint);
  }
</style>