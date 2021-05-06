<template>
  <main>
       <p> main</p>
    <div>
      현재 스크린 모드 : {{this.screenMode}}
    </div>
    <div>
      현재 기기 OS : {{bodyclass}}
    </div>
    <p>
    {{this.uAgent}}
    </p>
    <button type="button" @click="goBack()" class="btn">뒤로가기</button>
  </main>
</template>

<script>

export default {
  name: 'Main',
   components: {  },
  data () {
    return {
      bodyclass:''
    }
  },
  created () {
    this.bodyclass = document.body.classList;
  },
  mounted(){
  },
  methods: {
  }
}
</script>
