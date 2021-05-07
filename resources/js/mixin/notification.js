const mixin = {
    data(){
        return{
            errorData:{},
        }
    },
    methods:{
        notificationAlert(response){
            if(response.status == 422){
                if(response.data.errors){this.errorData = response.data.errors;}
                if(response.data.message){ale.fire({title: response.data.message})}
            }
            if(response.status === 401){
                this.$router.push('/login');
            }
        }
    }
}


//- export it as a plugin
export default {
    install (Vue, options) {
        Vue.mixin(mixin)
    }
}