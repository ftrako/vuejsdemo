import {defineStore} from "pinia";

const tokenStore = defineStore("main", {
    state: () => {
        return {
            token: "", // 永久存储
            count: 0,  // 临时变量
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {storage: localStorage, paths: ["token"]}
        ]
    },
    actions: {
        printToken() {
            console.log("token:", this.token)
        }
    }
})();

export default tokenStore;