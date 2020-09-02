<template>
  <div class="Detail">
    <DetailNavBar></DetailNavBar>
    <DetailSwipe :TopImages="topImages"></DetailSwipe>
  </div> 
</template>

<script>
  import DetailNavBar from 'views/detail/childComps/DetailNavBar';
  import DetailSwipe from '@/views/detail/childComps/DetailSwipe';

  import {getDetail} from '@/network/detail';

  export default {
    name : 'Detail',
    data() {
      return {
        iid: null,
        topImages : []
      }
    },
    components: {
      DetailNavBar,
      DetailSwipe
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        this.topImages = res.result.itemInfo.topImages
      })
    }
  }
</script>

<style scoped>

</style>