<template>
    <div class="index">
      <header class="index-header">
        <span class="title">所有产品</span>
        <div @click="menuShow = !menuShow" class="icon-menu">
          <div v-for="n in 3" :key="n" class="line"></div>
        </div>
        </header>
      <nav class="index-nav">
        <router-link tag="a" to="/">主页</router-link>
        <router-link tag="a" to="/collection">我的收藏</router-link>
        <router-link tag="a" to="/recommend">主编推荐</router-link>
      </nav>
      <!--414px菜单-->
      <ul v-show="menuShow" @click="menuShow = false" class="mobile-nav">
        <router-link tag="li" to="/">主页</router-link>
        <router-link tag="li" to="/collection">我的收藏</router-link>
        <router-link tag="li" to="/loginOut">登出</router-link>
      </ul>
      <!--tab按钮-->
      <section class="index-content">
        <header>
          <span
            v-for="(item, index) in tabList"
            :key="index"
            @click="tabSelect = index"
            :class="{'content-tab-selected': index === tabSelect}"
            class="content-tab">
            {{ item.title }}
          </span>
        </header>
        <!--tab页-->
        <section v-show="tabSelect === 0" class="tab-content">
          <goods v-for="(item, index) in explosive" :goodInfo="item" :key="index"></goods>
        </section>
        <section v-show="tabSelect === 1" class="tab-content">
          <goods v-for="(item, index) in latest" :goodInfo="item" :key="index"></goods>
        </section>
        <section v-show="tabSelect === 2" class="tab-content">
          <goods v-for="(item, index) in recommend" :goodInfo="item" :key="index"></goods>
        </section>
      </section>
    </div>
</template>
<script>
  import goods from '../components/goods';
  import goodsData from '../../../db/products';
  export default {
    components: {
      goods
    },
    computed: {},
    data () {
        return {
          goodsData,
          menuShow: false,
          tabList: [
            {
              title: '爆款',
              name: 'explosive'
            },
            {
              title: '最新',
              name: 'latest'
            },
            {
              title: '主编推荐',
              name: 'recommend'
            }
          ],
          tabSelect: 1,
          explosive: [],
          latest: [],
          recommend: []
        };
    },
    methods: {
      // 获取商品信息
      getGoodsData () {
        if (goodsData && goodsData.length !== 0) {
          goodsData.forEach((item) => {
            if (parseInt(item.price) <= 30) {
              this.explosive.push(item);
            } else if (parseInt(item.price) > 30 && parseInt(item.price) <= 50) {
              this.latest.push(item);
            } else {
              this.recommend.push(item);
            }
          });
        }
      }
    },
    created () {
      this.getGoodsData();
    },
    mounted () {},
    watch: {}
  };
</script>
<style lang="less">
  @import "../assets/style/home1440";
  @media screen and (max-width: 414px) {
    @import "../assets/style/home414";
  }
</style>
