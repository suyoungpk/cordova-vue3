<template>
  <section class="login">
     login
        <p> {{$t('greeting')}}</p>
     <button type="button" @click="this.$router.push('/main')">메인으로가기</button>
     <button type="button" @click="goSign()">가입하기</button>
  </section>
</template>

<script>
export default {
  name: 'Login',
  props:["id"],
  methods:{
     goSign () {
      this.$router.push('/signup');
    }
  }
}
</script>
