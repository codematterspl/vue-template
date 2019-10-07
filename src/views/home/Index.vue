<template>
    <div class="home">
        <Landing />
        <AboutUs />
        <Lego />
        <Banner />
        <Offer />
        <FAQ />
        <Contact />
        <Footer />
    </div>
</template>
<script>
import Landing from './Landing'
import AboutUs from './AboutUs'
import Lego from './Lego'
import Banner from './Banner'
import Offer from './Offer'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

export default {
    components: {
        Landing,
        AboutUs,
        Lego,
        Banner,
        Offer,
        FAQ,
        Contact,
        Footer,
    },
    name: 'Home',
};
</script>
<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
}
</style>
