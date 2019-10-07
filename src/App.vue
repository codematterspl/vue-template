<template>
    <div id="app">
        <Topbar />
        <Home />
    </div>
</template>
<script>
import Topbar from '@/components/Topbar'
import Home from '@/views/home/Index'

export default {
    name: 'App',
    components: {
        Topbar,
        Home,
    },
};

</script>
<style lang="scss">
#app {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600,700,800,900&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');
    font-family: 'Roboto', sans-serif;
    position: relative;
}
</style>
