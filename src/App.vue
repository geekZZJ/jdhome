<template>
  <div class="wrapper">
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
      <div class="icons__item" v-for="item in [1,2,3,4,5,6,7,8,9,10]" :key="item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
        <div class="icons__item__desc">超市遍历</div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item" v-for="item in [1,2,3,4]" :key="item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">起送¥0</span>
            <span class="nearby__item__content__tag">基础运费¥5</span>
          </div>
          <div class="nearby__item__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6f3;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe7e5;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe61e;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe660;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/variable";
@import "./style/mixins";
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .2rem .18rem;
  overflow-y: auto;
}
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
.nearby{
  &__title{
    margin-top: .16rem;
    margin-bottom: .02rem;
    font-size: .18rem;
    color: $content-fontcolor;
    font-weight: normal;
  }
  &__item{
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
}
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
