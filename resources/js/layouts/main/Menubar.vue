<template>
    <div class="layout--main-menubar" v-if="menuStatus" :style="{right: menuFullScreen == true ? 0 : 'auto'}">

        <div class="layout--main-left-container" :style="{width:width+'px'}">
            <div class="border-bottom px-2 py-3 font-weight-bold text-truncate" :style="{height:$store.state.headerHeight+'px'}">
                IBCS-PRIMAX
            </div>
            <div class="pt-3">
                <div v-for="(item, index) in $store.state.menuList" :key="index" @click="menuClicked(item)" :class="item.name == $store.state.avtiveMenuBtn ? 'd-flex layout--menu-item-container layout--menu-item-container-active' : 'd-flex layout--menu-item-container'">
                    <i :class="`fas fa-${item.icon} layout--menu-item-icon`"></i>
                    <div class="layout--menu-item-title">{{item.name}}</div>
                </div>

            </div>
        </div>
        <div style="flex:auto; background-color:rgba(0, 0, 0, 0.1);" @click="toggleMenu()"></div>

    </div>
</template>

<script>
export default {
    props:['menuWidth','menuStatus','menuFullScreen'],
    data(){
        return{
            width:0,            
        }
    },
    mounted(){
        this.width=this.$store.state.menuWidthAdj;
    },
    methods:{
        toggleMenu(){
            if(this.$store.state.toggleMenu == true){
                this.$store.commit('TOGGLE_MENU',false);
            }else{
                this.$store.commit('TOGGLE_MENU',true);
            }
        },
        menuClicked(item){
            if(this.$route.name != item.name){
                this.$store.commit('MENU_ACTIVE',item.name);
                this.$router.push(item.url);                
            }
        }
    },
    watch:{
        '$store.state.menuWidthAdj' (val){
            this.width=this.$store.state.menuWidthAdj;
        },
        menuFullScreen(val){
            //console.log(this.menuWidth)
            if(this.menuFullScreen == true){
                this.width=this.menuWidth;
            }else{
                this.width=0;
            }
        }
    }


}
</script>