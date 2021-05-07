<template>
  <div class="layout--full-page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted(){
    this.changeRouteTitle(this.$route.meta.pageTitle);
  },
  methods:{
    changeRouteTitle(title) {
        document.title = title || 'IBCS';
    },
  },
  watch: {
    $route () {
      this.changeRouteTitle(this.$route.meta.pageTitle);
    },
  }
}
</script>
