<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="product__item__detail">
          <div class="product__item__detail__title">番茄250g/份</div>
          <div class="product__item__detail__sales">月售10件</div>
          <div class="product__item__detail__price">
            <span class="product__item__detail__yen">&yen;</span>
            <span>33.6</span>
            <span class="product__item__detail__origin">&yen;66.6</span>
          </div>
        </div>
        <div class="product__item__num">
          <span class="product__item__num__minus">-</span>
          <span>0</span>
          <span class="product__item__num__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
@import "../../style/mixins";
.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.54rem;
  bottom: .5rem;
  .category{
    width: .76rem;
    background-color: $search-bgColor;
    height: 100%;
    overflow-y: scroll;
    &__item{
      line-height: .4rem;
      text-align: center;
      font-size: .14rem;
      color: $content-fontcolor;
      &--active{
        background-color: $bg-color;
      }
    }
  }
  .product{
    flex: 1;
    overflow-y: scroll;
    &__item{
      position: relative;
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid $content-bgColor;
      &__img{
        width: .68rem;
        height: .68rem;
        margin-right: .16rem;
      }
      &__detail{
        overflow: hidden;
        &__title{
          @include ellipsis();
          line-height: .2rem;
          font-size: .14rem;
          color: $content-fontcolor;
          font-weight: bold;
        }
        &__sales{
          margin: .06rem 0;
          line-height: .16rem;
          font-size: .12rem;
          color: $content-fontcolor;
        }
        &__price{
          line-height: .2rem;
          font-size: .14rem;
          color: $highlight-fontColor;
        }
        &__yen{
          font-size: .12rem;
        }
        &__origin{
          font-size: .12rem;
          color: $light-fontColor;
          text-decoration: line-through;
          margin-left: .06rem;
        }
      }
      &__num{
        position: absolute;
        right: 0;
        bottom: .12rem;
        &__minus,&__plus{
          width: .2rem;
          height: .2rem;
          display: inline-block;
          border-radius: 50%;
          font-size: .2rem;
          text-align: center;
          line-height: .16rem;
        }
        &__minus{
          border: .01rem solid $medium-fontColor;
          color: $medium-fontColor;
          margin-right: .05rem;
        }
        &__plus{
          background-color: $btn-bgColor;
          color: $bg-color;
          margin-left: .05rem;
        }
      }
    }
  }
}
</style>
