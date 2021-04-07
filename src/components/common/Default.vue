<template>
  <div class="wrapper">
  default component
    <header-layout></header-layout>
    <router-view></router-view>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import header from '@/components/common/Header'
import footer from '@/components/common/Footer'
export default {
  components: {
    'header-layout': header,
    'footer-layout': footer
  },
  methods: {
    
  }
}
</script>
