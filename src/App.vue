<template>
  <navbar/>
  <router-view/>
  <footercake/>
</template>

<script>
  import navbar from "@/components/NavBar.vue";
  import footercake from './components/Footer.vue';

  export default {
    name: "app",
    components: {
      navbar,
      footercake,
    },
  };
</script>
