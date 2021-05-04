<template>
  <main>
       <p> main</p>
    {{this.screenMode}}
    <button type="button" @click="goBack()">뒤로가기</button>
  </main>
</template>

<script>

export default {
  name: 'Main',
   components: {  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted(){
  },
  methods: {
  }
}
</script>
