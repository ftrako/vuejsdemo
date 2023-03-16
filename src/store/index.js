import {defineStore} from "pinia";

export default defineStore("main", {
    state: () => {
        return {
            number: 1,
            name: "cdj"
        }
    },
})