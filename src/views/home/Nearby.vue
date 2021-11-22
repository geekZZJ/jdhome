<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <ShopInfo :nearbyList="nearbyList" @jumpToDetail="jumpToDetail"></ShopInfo>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '@/utils/request'
import ShopInfo from '@/components/ShopInfo'
import { useRouter } from 'vue-router'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/recommend/desc')
    console.log(result)
    nearbyList.value = [
      {
        id: 1,
        title: '沃尔玛',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 2,
        title: '苏宁',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 3,
        title: '京东',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
  }
  return { nearbyList, getNearbyList }
}

const jumpToDetailEffect = () => {
  const router = useRouter()
  const jumpToDetail = (params) => {
    router.push({ path: `/shop/${params}` })
  }
  return { jumpToDetail }
}

export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    const { jumpToDetail } = jumpToDetailEffect()
    return { nearbyList, jumpToDetail }
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
