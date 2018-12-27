<template>
  <div class="goods">
    <figure class="goods-picture">
      <img :src="goodInfo.picture" alt="">
    </figure>
    <div class="goods-info">
      <header class="goods-info-title">
        <span>{{goodInfo.name}}</span>
        <span class="goods-info-price">￥{{goodInfo.price}}</span>
      </header>
      <section class="goods-info-desc" :title="goodInfo.description">
        {{goodInfo.description}}
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['goodInfo'],
    components: {},
    computed: {},
    data () {
        return {};
    },
    methods: {},
    created () {},
    mounted () {},
    watch: {}
  };
</script>
<style lang="less" scoped>
  @import (reference) "../assets/style/dynamic";
  .goods {
    display: inline-block;
    padding: 80px 0 0 97px;
    font-size: 14px;
    color: @fontColor1;
    .goods-picture, .goods-info {
      display: inline-block;
    }
    .goods-picture {
      width: 327px;
      height: 195px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .goods-info {
      width: 636px;
      margin-left: 56px;
      .goods-info-title {
        margin-bottom: 63px;
      }
      .goods-info-desc {
        height: 96px;
        text-align: justify;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
    }
  }
</style>
