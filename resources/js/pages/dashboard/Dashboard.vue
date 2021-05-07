<template >

    <div class="page--layout">
        <div class="page--title">
            <div>Dashboard</div>
        </div>
        <div v-if="$store.state.userRole == 'admin'">
            <admin />
        </div>
        <div v-else>
            <user />
        </div>


    </div>

</template>

<script>
import user from './User';
import admin from './Admin';
export default {
    components:{
        admin,
        user
    },
}
</script>