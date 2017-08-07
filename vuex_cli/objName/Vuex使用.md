###        安装vuex

    cnpm install vuex --save

###  引入和使用
    在main.js中
    import Vuex from "vuex";
    Vue.use(Vuex);



概念:
1、vuex是基于vue.js的状态管理模式
2、它用来统一维护各组件之间的通用的一些数据状态。
3、vuex有一个数据容器叫Store，Store里面有一个状态叫state，这些状态要想操作、更新他们我们只能使用mutations
----------------------
### 基本操作
    const store = new Vuex.Store({
         //状态仓库
        state: {
            count: 0
        },
        //同步修改的方法库
        mutations: {
            increment (state) {
                state.count++
            },
            reduce(state,num){//num是自定义的参数
             state.count -= num;
            }
        }
    });
    //通过commit方法可以调用mutation中的方法来修改 状态
    store.commit("increment");

    store.commit("reduce",6);

    console.log(store.state.count) // -> 1


#### getter 你可以把它理解为 vuex 的 computed(计算属性)
