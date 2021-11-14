<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe619;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe60b;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe62d;</span>
    山姆会员商店优惠商品
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item in iconList" :key="item.text">
      <img class="icons__item__img" :src="item.icon" alt="">
      <div class="icons__item__desc">{{item.text}}</div>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '超市便利'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '菜市场'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '水果店'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '鲜花绿植'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '医药健康'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '家具时尚'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '烘焙蛋糕'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '签到'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '大牌免运'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '红包套餐'
      }
    ]
    return { iconList }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
@import "../../style/mixins";
.position{
  color: $content-fontcolor;
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon{
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice{
    position: absolute;
    font-size: .2rem;
    right: 0;
    top: .17rem;
  }
}
.search{
  margin-bottom: .12rem;
  line-height: .32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: .16rem;
  font-size: .14rem;
  .iconfont{
    font-size: .16rem;
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
  }
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
.icons{
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__img{
      width: .4rem;
      height: .4rem;
    }
    &__desc{
      margin-top: .06rem;
      margin-bottom: .16rem;
      color: $content-fontcolor;
    }
  }
}
.gap{
  height: .1rem;
  background-color: $content-bgColor;
  margin: 0 -.18rem;
}
</style>
