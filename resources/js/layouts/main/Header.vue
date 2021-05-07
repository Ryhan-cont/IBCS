<template>
    <div class="layout--main-header" :style="{marginLeft:$store.state.menuWidthAdj+'px', height:$store.state.headerHeight+'px',width:$store.state.headeerWidth+'px'}">
        <div style="width:100%; display:flex">
            <div class="fas fa-bars btn-lg btn" @click="toggleMenu()"></div>
            <div class="" style="flex:1"></div>
            <div class="pr-2">{{$store.state.userName}}</div>
            <div class="">
                <b-dropdown right text="" size="sm" variant="outline-secondary"> 
                    <b-dropdown-item @click="logout()">Log out</b-dropdown-item>
                </b-dropdown>
            </div>

        </div>
        <div style="width:15px"></div>
    </div>
</template>

<script>
export default {
    props:[],
    data(){
        return{
        }
    },
    mounted(){
        this.width=window.innerWidth-this.$store.state.menuWidthAdj;
    },
    methods:{
        toggleMenu(){
            if(this.$store.state.toggleMenu == true){
                this.$store.commit('TOGGLE_MENU',false);
            }else{
                this.$store.commit('TOGGLE_MENU',true);
            }
        },
        async logout(){
            try{
                var req = await axios.post('/api/auth/logout')
                if(req.status == 200){
                    cookie.erase('Authorization')
                    this.$router.push('/login');
                }
            }catch(err){
                console.log(err)
            }
        }

    },
    watch:{
        '$store.state.menuWidthAdj'(){
            this.$store.commit('HEADER_WIDTH',(window.innerWidth-this.$store.state.menuWidthAdj));
        }
    }

}
</script>