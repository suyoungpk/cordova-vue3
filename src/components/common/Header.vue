<template>
  <!-- header -->
  <header>
    <p>header</p>
     <select v-model="locale" @change="onChange()">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
        {{ lang.title }}
      </option>
    </select> 
  </header>
  <!-- //header -->
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data () {
    return { 
      locale:this.$i18n.getLocale(),
      langs: [
          { title:'한국어',code: "ko"}, 
          { title:'영어',code: "en"}, 
          { title:'네덜란드어',code: "du"}, 
          { title:'프랑스어',code: "fr"}, 
          { title:'중국어',code: "cn"}, 
          { title:'이탈리아어',code: "it"}, 
          { title:'일본어',code: "ja"}, 
        ] 
    }
    
  },
  created () {
  },
  mounted () {
    // window.addEventListener("resize",this.setScreenMode) // 리사이징으로 모드 업데이트
  },
  methods: {
     onChange:function(){
      this.$i18n.setLocale(this.locale);
    }
    
  }
}
</script>