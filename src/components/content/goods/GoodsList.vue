<template>
    <div class="goods">
        <good-list-item
                class="item"
                v-for="item in goods" :key="item"
                :goods-item="item">
        </good-list-item>
    </div>
</template>

<script>
    import GoodListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
        components: {
          GoodListItem
        },
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-around;
    }

    .goods-list .item {
        width: 48%;
    }
</style>