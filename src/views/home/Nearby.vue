<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <ShopInfo :nearbyList="nearbyList"></ShopInfo>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '@/utils/request'
import ShopInfo from '@/components/ShopInfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/recommend/desc')
    console.log(result)
    nearbyList.value = [
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
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
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
}
</style>
