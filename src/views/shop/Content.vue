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
      <div class="product__item" v-for="item in [1,2,3,4,5,6,7]" :key="item">
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
.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.54rem;
  bottom: .5rem;
  .category{
    width: .76rem;
    background-color: #f5f5f5;
    height: 100%;
    overflow-y: scroll;
    &__item{
      line-height: .4rem;
      text-align: center;
      font-size: .14rem;
      color: #333;
      &--active{
        background-color: #fff;
      }
    }
  }
  .product{
    flex: 1;
    overflow-y: scroll;
    &__item{
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid #f1f1f1;
      &__img{
        width: .68rem;
        height: .68rem;
        margin-right: .16rem;
      }
      &__detail{
        &__title{
          line-height: .2rem;
          font-size: .14rem;
          color: #333;
          font-weight: bold;
        }
        &__sales{
          margin: .06rem 0;
          line-height: .16rem;
          font-size: .12rem;
          color: #333;
        }
        &__price{
          line-height: .2rem;
          font-size: .14rem;
          color: #e93b3b;
        }
        &__yen{
          font-size: .12rem;
        }
        &__origin{
          font-size: .12rem;
          color: #999;
          text-decoration: line-through;
          margin-left: .06rem;
        }
      }
    }
  }
}
</style>
