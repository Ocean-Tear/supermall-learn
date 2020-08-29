<template>
  <div class="wrapper" ref="warapper">
    <div class="content">
      <slot></slot>
    </div>
  </div> 
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name : 'Scroll',
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.warapper, {
        pullUpLoad: true,
        click: true,
        probeType: this.probeType
      })

      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    },
    methods: {
      scrollTo(x = 0, y = 0, time = 800) {
        this.scroll.scrollTo(x, y, time)
      },
    }
  }
</script>

<style scoped>

</style>