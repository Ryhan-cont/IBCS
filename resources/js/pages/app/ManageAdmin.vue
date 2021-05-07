<template >
    <div class="page--layout">
        <div class="page--title">
            <div>Manage Admin</div>
        </div>
        <div>
            Login info for admin<br>
            User/Email: {{login.uname}}<br>
            Password: {{login.pass}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            login:{
                uname:null,
                pass:null
            }
        }
    },
    mounted(){
        this.loadData();
    },
    methods:{
        async loadData(){
            try{
                var req = await axios.get('/api/user/create-admin')

                this.login.uname = req.data.email;
                this.login.pass = req.data.password;

            }catch(err){
                console.log(err)
            }
        },
    }
}
</script>