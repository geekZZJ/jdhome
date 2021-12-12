<template>
  <div class="cart">
    <div class="product">
      <div class="product__header">
        <div class="product__header__all"><span class="product__header__all__icon iconfont">&#xe6f7;</span>全选</div>
        <div class="product__header__clear" @click="cleanCart">清空购物车</div>
      </div>
      <template v-for="item in list" :key="item.id">
        <div class="product__item" v-if="cartList.count">
          <div class="product__item__checked iconfont" v-html="cartList.checked?'&#xe652;':'&#xe6f7;'" @click="changeCartItemCheck"></div>
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

const useCartEffect = (list) => {
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    return cartList.count
  })
  const price = computed(() => {
    return (cartList.count * 10).toFixed(2)
  })
  const changeCartItemCheck = () => {
    store.commit('changeCartItemCheck')
  }

  const cleanCart = () => {
    console.log(list)
  }
  return { total, price, cartList, changeCartItemCheck, cleanCart }
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
    const { total, price, cartList, changeCartItemCheck, cleanCart } = useCartEffect(list)
    const { changeItemCart } = useCarEffect()
    return { total, price, list, cartList, changeItemCart, changeCartItemCheck, cleanCart }
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
    &__header{
      line-height: .52rem;
      border-bottom: 1px solid #f1f1f1;
      display: flex;
      font-size: .14rem;
      color: #333;
      &__all{
        width: .64rem;
        margin-left: .18rem;
        &__icon{
          color: #0091ff;
          font-size: .2rem;
        }
      }
      &__clear{
        flex: 1;
        text-align: right;
        margin-right: .16rem;
      }
    }
    &__item{
      position: relative;
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid $content-bgColor;
      &__checked{
        color: #0091ff;
        font-size: .2rem;
        line-height: .5rem;
        margin-right: .2rem;
      }
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
