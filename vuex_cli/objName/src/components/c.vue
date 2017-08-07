 <template lang="html">
    <div>
        <div>
            C,显示count
        </div>
        <div>
            <!--{{test}}-->
            {{count}}
        </div>
    </div>


 </template>
 <script>
     import { mapGetters } from 'vuex'
     console.log(mapGetters)
     export default {
         computed:mapGetters([
             'count',
             'recentHistory'
         ])
//            ...mapGetters([
//                'count1'
//            ])

    }
 </script>
 <style scoped lang="css"></style>