<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    components: {
        Topbar,
        Footer,
    },
    name: 'App',
};

</script>
<style lang="scss">
#app {
    @import url('https://fonts.googtleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');
    font-family: 'Montserrat', sans-serif;
    position: relative;
}
</style>
