<template>
    <div class="background--image">
        <div style="flex:1"></div>
        <div class="contents">
            <div class="login-image"><img src="/images/login.png" alt="login" style="width:100%;"></div>
            <div class="login-detail">
                <div>
                    <div style="font-size:22px; font-weight:bold">Login</div>
                    <div style="font-size:12px">Welcome back, please login to your account.</div>
                </div>
                <div style="padding-top:20px">
                    <div class="inp-box-cont">
                        <div class="inp-box-label">Email</div>
                        <b-form-input v-model="email" placeholder="email"></b-form-input>
                        <div v-if="errorData.email" class="error-msg">{{errorData.email[0]}}</div>
                    </div>
                    <div class="inp-box-cont">
                        <div class="inp-box-label">Password</div>
                        <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
                        <div v-if="errorData.password" class="error-msg">{{errorData.password[0]}}</div>
                    </div>
                    <div v-if="errorData.fail" class="error-msg">{{errorData.fail[0]}}</div>
                    <div align="right" style="padding-top:15px">
                        <b-button @click="login()" :disabled="validateForm" variant="primary">Login</b-button>
                    </div>
                    <div class="d-flex pt-2">
                        <div class="form--error-msg col">{{msg}}</div>
                        <div><b-button @click="$router.push('/manage-admin')" variant="primary" size="sm">Create Admin</b-button></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div style="flex:1"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showPass: false,
                email: "",
                password: "",
                remember: false,

                errorData: [],

                msg:null,
            }
        },
        computed: {
            validateForm() {
                return this.email == '' || this.password == '' || !/\S+@\S+\.\S+/.test(this.email);
            },
        },
        methods: {
            async login() {
                this.msg = '';
                let data = {
                    email: this.email,
                    password: this.password,
                }
                try{
                    var req = await axios.post('/api/auth/login', data);
                    if(req.status == 200){
                        cookie.set('Authorization', 'Bearer '+req.data.access_token, 24*60*365)
                        window.axios.defaults.headers.common['Authorization'] = cookie.get('Authorization');
                        this.$router.push('/dashboard');
                    }
                }catch(err){
                    this.msg = 'Login failed'
                    console.log(err);
                }
            }
        },
    }
</script>

<style lang="scss">
    .background--image{
        background-image: url('/images/background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height:100vh;
        width:100vw;
        display: flex;
    }
    .contents{
        align-self: center;
        justify-content:  space-between;
        display: flex;
        box-shadow:0px 0px 5px 0px rgba(0, 0, 0, 0.3);
        background-color: #EFF2F7;
    }
    .login-image{
        padding: 20px;
        align-self: center;
        width:300px;
    }
    .login-detail{
        padding: 40px 30px;
        background-color: rgb(255, 255, 255);
        width:400px;
    }
    .error-msg{
        padding: 5px 0px;
        color: rgb(226, 23, 23);
        font-size: 12px;
    }
    .inp-box-cont{
        padding-top: 12px;
    }
    .inp-box-label{
        color: rgb(71, 71, 71);
        font-size: 12px;
        padding: 5px;
    }
    @media (max-width:800px ){
        .login-image{display:none;}
    }
    @media (max-width:500px ){
        .login-detail{
            width:auto;
        }
    }
</style>
