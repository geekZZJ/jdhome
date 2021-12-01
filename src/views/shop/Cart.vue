<template>
  <div class="cart">
    <div class="product">
      <template v-for="item in list" :key="item.id">
        <div class="product__item" v-if="cartList.count">
          <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          <div class="product__item__detail">
            <div class="product__item__detail__title">{{item.title}}</div>
            <div class="product__item__detail__price">
              <span class="product__item__detail__yen">&yen;</span>
              <span>{{item.price}}</span>
              <span class="product__item__detail__origin">&yen;{{item.origin}}</span>
            </div>
          </div>
          <div class="product__item__num">
            <span class="product__item__num__minus" @click="changeItemCart(-1)">-</span>
            <span>{{cartList.count}}</span>
            <span class="product__item__num__plus" @click="changeItemCart(1)">+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="" class="check__icon__img">
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总结：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

const useCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    return cartList.count
  })
  const price = computed(() => {
    return (cartList.count * 10).toFixed(2)
  })
  return { total, price, cartList }
}

const useCarEffect = () => {
  const store = useStore()
  const changeItemCart = (num) => {
    store.commit('changeItemToCart', num)
  }
  return { changeItemCart }
}

export default {
  name: 'Cart',
  setup () {
    const list = [
      {
        id: 1,
        title: '番茄250g/份',
        sales: 10,
        price: '33.6',
        origin: '66.6'
      },
      {
        id: 2,
        title: '茄子250g/份',
        sales: 11,
        price: '33.6',
        origin: '66.6'
      },
      {
        id: 3,
        title: '香肠250g/份',
        sales: 12,
        price: '33.6',
        origin: '66.6'
      }
    ]
    const { total, price, cartList } = useCartEffect()
    const { changeItemCart } = useCarEffect()
    return { total, price, list, cartList, changeItemCart }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
@import "../../style/mixins";
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .check{
    display: flex;
    height: .49rem;
    border-top: .01rem solid $content-bgColor;
    &__icon{
      width: .84rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &__img{
        width: .28rem;
        height: .26rem;
      }
      &__tag{
        position: absolute;
        width: .2rem;
        height: .2rem;
        line-height: .2rem;
        background-color: $highlight-fontColor;
        border-radius: 50%;
        font-size: .12rem;
        text-align: center;
        right: .2rem;
        top: .04rem;
        color: $bg-color;
        transform: scale(.5);
      }
    }
    &__info{
      flex: 1;
      color: $content-fontcolor;
      font-size: .12rem;
      display: flex;
      align-items: center;
      &__price{
        color: $highlight-fontColor;
        font-size: .18rem;
      }
    }
    &__btn{
      width: .98rem;
      background-color: #4fb0f9;
      color: $bg-color;
      font-size: .14rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .product{
    flex: 1;
    overflow-y: scroll;
    background-color: #fff;
    &__item{
      position: relative;
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid $content-bgColor;
      &__img{
        width: .46rem;
        height: .46rem;
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
        &__price{
          line-height: .2rem;
          font-size: .14rem;
          color: $highlight-fontColor;
          margin-top: .06rem;
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
