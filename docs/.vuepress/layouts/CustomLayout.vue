<template>
  <div class="container">
    <header>
      <h1>'Baby's First Year'</h1>
    </header>
    <main>
      <Content /> 
      <HelloVue />
    </main>
    <footer>
      <p>&copy; {{ currentYear }} Baby's First Year Guide</p>
    </footer>
  </div>
</template>

<script>
import HelloVue from '../components/HelloVue.vue'; 

export default {
  components: {
    HelloVue 
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
}
</script>
  
<style scoped>

</style>
