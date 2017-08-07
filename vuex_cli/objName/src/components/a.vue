<template lang="html">
    <div>
        <div>
            A
        </div>
        <div>
            <button @click="increment(2)">增加2</button>
        </div>
    </div>

</template>
<script>
    import { mapMutations } from 'vuex'
    export default{
        methods: mapMutations([
                'increment' // 映射 this.increment() 为 this.$store.commit('increment')
            ])
    }
</script>
<style scoped lang="css"></style>