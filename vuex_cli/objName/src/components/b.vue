<template lang="html">
    <div>
        <div>B</div>
        <div>
            <button @click="reduce(3)">减少3</button>

        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default{
        methods: mapMutations([
            'reduce' // 映射 this.reduce() 为 this.$store.commit('reduce')
        ]),



    }
</script>
<style scoped lang="css"></style>