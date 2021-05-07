<template>
    <div class="layout--main-body" :style="{marginLeft:$store.state.menuWidthAdj+'px', paddingTop:$store.state.headerHeight+'px'}">
        <slot />
        
    </div>
</template>

<script>
export default {
    props:[]

}
</script>