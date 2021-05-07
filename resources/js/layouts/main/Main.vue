<template>
  <div class="layout--main">
    <layout-menubar :menuWidth="menuWidth" :menuStatus="menuStatus" :menuFullScreen="menuFullScreen"  />
    <layout-body>
      <layout-header  />
      <div style="flex:auto; padding:15px">
          <router-view></router-view>
      </div>
      <layout-footer />
    </layout-body>
  </div>
</template>

<script>
import menubar from './Menubar';
import body from './Body';
import header from './Header';
import footer from './Footer';

import { setup, resizeControll, slideMenu, floatMenu, toggleMenu } from './controller.js'
export default {
  components:{
    'layout-body':body,
    'layout-header':header,
    'layout-menubar':menubar,
    'layout-footer':footer,
  },
  data(){
    return{
      menuWidth:230,
      menuFullScreen:false,
      menuStatus:null,
      menuStatusMemory:true,

      mobileBreakPoint:800,
    }
  },
  created(){
    window.addEventListener('resize', this.resizeControll);
    this.setup();
  },
  mounted(){
    this.changeRouteTitle(this.$route.meta.pageTitle);
    this.userData();
  },
  methods:{
    setup, resizeControll, slideMenu, floatMenu, toggleMenu,
    changeRouteTitle(title) {
        document.title = title || 'IBCS';
    },
    async userData(){
      try{
        var req = await axios.get('/api/layout/resource')
        //console.log(req)
        this.$store.commit('USER_NAME',req.data.name);
        this.$store.commit('MENU_LIST',req.data.menu);
        this.$store.commit('MENU_ACTIVE',this.$route.name);
        this.$store.commit('USER_ROLE',req.data.role);
      }catch(err){
        if(err.response){this.notificationAlert(err.response)}
      }
    }
  },
  watch: {
    '$store.state.toggleMenu' (val) {
      this.toggleMenu(val)
    },
    $route () {
      this.changeRouteTitle(this.$route.meta.pageTitle);
    },
  }
}
</script>
