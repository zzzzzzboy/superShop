<template>
    <tab-bar>
        <template #default>
            <tab-bar-item path="/home">
                <template #item-icon>
                    <img src="~assets/img/tabbar/home.svg" alt="">
                </template>
                <template #item-active-icon>
                    <img src="~assets/img/tabbar/home_active.svg" alt="">
                </template>
                <template #item-text>
                    <span>首页</span>
                </template>
                <!--<img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">-->
                <!--<img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="">-->
                <!--<span slot="item-text">首页</span>-->
            </tab-bar-item>
            <tab-bar-item path="/category">
                <template #item-icon>
                    <img src="~assets/img/tabbar/category.svg" alt="">
                </template>
                <template #item-active-icon>
                    <img src="~assets/img/tabbar/category_active.svg" alt="">
                </template>
                <template #item-text>
                    <span>分类</span>
                </template>
                <!--<img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">-->
                <!--<img slot="item-active-icon" src="~assets/img/tabbar/category_active.svg" alt="">-->
                <!--<span slot="item-text">分类</span>-->
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <template #item-icon>
                    <img src="~assets/img/tabbar/shopcart.svg" alt="">
                </template>
                <template #item-active-icon>
                    <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
                </template>
                <template #item-text>
                    <span>购物车</span>
                </template>
                <!--<img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">-->
                <!--<img slot="item-active-icon" src="~assets/img/tabbar/shopcart_active.svg" alt="">-->
                <!--<span slot="item-text">购物车</span>-->
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <template #item-icon>
                    <img src="~assets/img/tabbar/profile.svg" alt="">
                </template>
                <template #item-active-icon>
                    <img src="~assets/img/tabbar/profile_active.svg" alt="">
                </template>
                <template #item-text>
                    <span>我的</span>
                </template>
                <!--<img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">-->
                <!--<img slot="item-active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">-->
                <!--<span slot="item-text">我的</span>-->
            </tab-bar-item>
        </template>
    </tab-bar>
</template>

<script>
    import TabBar from '../../common/tabBar/TabBar'
    import TabBarItem from '../../common/tabBar/TabBarItem'
    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
    img{
        width: 24px;
        height: 24px;
        margin-top: 5px;
        vertical-align: middle;
    }
</style>