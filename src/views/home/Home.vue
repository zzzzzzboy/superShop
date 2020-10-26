<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template #center>
                购物街
            </template>
        </nav-bar>

        <HomeSwiper :banners="banners"></HomeSwiper>

        <RecommendView :recommends="recommends"></RecommendView>
    </div>
</template>

<script>
    import NavBar from "components/common/navBar/NavBar"
    import HomeSwiper from "./childComponents/HomeSwiper"
    import RecommendView from "./childComponents/RecommendView"
    import {getHomeMultidata} from "network/home";

    export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            RecommendView
        },
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        created() {
            // 1.请求多个数据
            getHomeMultidata().then(res => {
                console.log(res);
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: #ff5777;
        color: white;
    }
</style>