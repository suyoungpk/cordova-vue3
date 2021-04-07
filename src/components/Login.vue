<template>
  <section class="login">
     login {{id}}
     <button type="button" @click="goBack()">뒤로가기</button>
  </section>
</template>

<script>
export default {
  name: 'Login',
  props:["id"],
  methods:{
     goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>
