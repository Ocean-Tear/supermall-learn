<template>
  <div  id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name : 'tab-bar'
  }
</script>

<style scoped>
  #tab-bar {
    background-color: #f6f6f6;
    display: flex;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8;

    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
  }
</style>