<template>
  <div class="Detail">
    <DetailNavBar></DetailNavBar>
  </div> 
</template>

<script>
  import DetailNavBar from 'views/detail/childComps/DetailNavBar';

  export default {
    name : 'Detail',
    data() {
      return {
        iid: null
      }
    },
    components: {
      DetailNavBar
    },
    created() {
      this.iid = this.$route.params.iid
    }
  }
</script>

<style scoped>

</style>