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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.warapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })

      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', position => {
          this.$emit('pullingUp', position)
        })
      }
    },
    methods: {
      scrollTo(x = 0, y = 0, time = 800) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    },
  }
</script>

<style scoped>

</style>