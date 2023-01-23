<template>
  <div class="bg">
    <div class="content">
      <header class="logo">
            <img :src="logoImage" class="logo__image" alt="Learn planet logo">
        </header>
      <pl-main-wrapper></pl-main-wrapper>
    </div>
  </div>
  
</template>

<script>
import plMainWrapper from './components/pl-main-wrapper.vue';
import logoImage from './assets/media/images/logo-min.png'


export default {
  name: 'App',
  components: {
    plMainWrapper,
  },
  data() {
    return {
      logoImage
    }
  }
}
</script>

<style lang="scss">
  
</style>
