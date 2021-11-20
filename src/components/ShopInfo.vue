<template>
  <div class="nearby__item" v-for="item in nearbyList" :key="item.title">
    <img class="nearby__item__img" :src="item.imgUrl" alt="">
    <div :class="{'nearby__item__content':true,'nearby__item__content--border':hideBorder}">
      <div class="nearby__item__content__title">{{item.title}}</div>
      <div class="nearby__item__content__tags">
        <span class="nearby__item__content__tag" v-for="(tag,index) in item.tags" :key="index">{{tag}}</span>
      </div>
      <div class="nearby__item__content__highlight">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    nearbyList: {
      type: Array,
      default: () => []
    },
    hideBorder: {
      type: Boolean,
      defailt: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "../style/variable";

.nearby__item{
  display: flex;
  padding-top: .12rem;
  &__img{
    width: .56rem;
    height: .56rem;
    margin-right: .16rem;
  }
  &__content{
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: .01rem solid $content-bgColor;
    &--border{
      border-bottom: none;
    }
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags{
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
      margin-top: .08rem;
    }
    &__tag{
      margin-right: .16rem;
    }
    &__highlight{
      color: #e93b38;
      line-height: .18rem;
      font-size: .13rem;
      margin-top: .08rem;
    }
  }
}
</style>
