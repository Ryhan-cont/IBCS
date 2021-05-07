<template>
    <div class="background--image">
        <div style="flex:1"></div>
        <div class="contents" align="center">
            <img src="/images/404.png" alt="graphic-404" style="width:100%">
            <h1 class="not-found-msg">404 - Page Not Found!</h1>
            <p class="">The page you are looking for might not be here</p>
            <div style="cursor:pointer" @click="goHome()">Back to Home</div>
        </div>
        <div style="flex:1"></div>
    </div>
</template>
<script>
export default {
    mounted(){
        
    },
    methods:{
        goHome(){
            this.$router.push('/')
        }
    }

}
</script>

<style>
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
        padding:20px;
    }
    .not-found-msg{
        font-size: 25px;
    }
</style>

