<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.title">
      <img class="nearby__item__img" :src="item.imgUrl" alt="">
      <div class="nearby__item__content">
        <div class="nearby__item__content__title">{{item.title}}</div>
        <div class="nearby__item__content__tags">
          <span class="nearby__item__content__tag" v-for="(tag,index) in item.tags" :key="index">{{tag}}</span>
        </div>
        <div class="nearby__item__content__highlight">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        title: '沃尔玛',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        title: '苏宁',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        title: '京东',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { nearbyList }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
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
</style>
