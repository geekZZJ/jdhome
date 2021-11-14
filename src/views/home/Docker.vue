<template>
  <div class="docker">
    <div :class="{'docker__item':true,'docker__item--active':index===0}" v-for="(item,index) in dockerList" :key="item.text">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      {
        icon: '&#xe6f3;',
        text: '首页'
      },
      {
        icon: '&#xe7e5;',
        text: '购物车'
      },
      {
        icon: '&#xe61e;',
        text: '订单'
      },
      {
        icon: '&#xe660;',
        text: '我的'
      }
    ]
    return { dockerList }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
.docker {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  display: flex;
  padding: 0 .18rem;
  box-sizing: border-box;
  color: $content-fontcolor;
  &__item{
    flex: 1;
    text-align: center;
    .iconfont{
      font-size: .18rem;
      margin: .07rem 0 .02rem 0;
    }
    &--active{
      color: #1fa4fc;
    }
  }
  &__title{
    font-size: .2rem;
    transform: scale(.5);
    transform-origin: center top;
  }
}
</style>
