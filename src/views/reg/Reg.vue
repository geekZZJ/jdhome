<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手机号" v-model="mobile">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="确认密码" v-model="checkPwd">
    </div>
    <div class="wrapper__reg-button" @click="handleReg">注册</div>
    <div class="wrapper__reg-link" @click="handleLogin">已有账号去登录</div>
    <Toast v-if="show" :message="toastMsg"></Toast>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast'

// 注册相关逻辑
const useRegEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    mobile: '',
    password: '',
    checkPwd: ''
  })
  const handleReg = async () => {
    try {
      const result = await post('/recommend/desc', {
        username: data.mobile,
        password: data.password
      })
      console.log(result)
      router.push({ name: 'Login' })
    } catch (e) {
      showToast('请求失败')
      console.log(e)
    }
  }
  const { mobile, password, checkPwd } = toRefs(data)
  return {
    mobile, password, checkPwd, handleReg
  }
}

const useLoginEffect = () => {
  const router = useRouter()
  const handleLogin = () => {
    router.push({ name: 'Login' })
  }
  return {
    handleLogin
  }
}

export default {
  name: 'Reg',
  components: { Toast },
  setup () {
    const { handleLogin } = useLoginEffect()
    const { showToast, show, toastMsg } = useToastEffect()
    const { mobile, password, checkPwd, handleReg } = useRegEffect(showToast)

    return {
      handleLogin, mobile, password, checkPwd, handleReg, show, toastMsg
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img{
    width: .66rem;
    height: .66rem;
    display: block;
    margin: 0 auto .4rem auto;
  }
  &__input{
    box-sizing: border-box;
    padding: 0 .16rem;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background-color: #f9f9f9;
    border: .01rem solid rgba(0,0,0,.1);
    border-radius: .06rem;
    &__content{
      width: 100%;
      border: none;
      line-height: .48rem;
      background-color: transparent;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      outline: none;
      padding: 0;
      &::placeholder{
        color: $content-notice-fontcolor;
      }
    }
  }
  &__reg-button{
    background-color: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,.32);
    border-radius: .04rem;
    color: #fff;
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
  }
  &__reg-link{
    font-size: .14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
