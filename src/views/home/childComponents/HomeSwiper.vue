<template>
    <swiper>
        <template #default>
            <swiper-item v-for="item of banners" :key="item.link">
                <template #default>
                    <a :href="item.link">
                        <img :src="item.image" alt="">
                    </a>
                </template>
            </swiper-item>
        </template>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
        name: "HomeSwiper",
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>

</style>