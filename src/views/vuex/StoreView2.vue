<script setup>
import {ref,reactive, toRefs} from 'vue'
import store from '../../store/vuex'


let c = ref(store.state.counter)

const data = reactive({
  obj: {
    id: "10001",
    name: "zhangsan"
  }
})

const {obj} = toRefs(data)

const data2 = {id:"1", name:"lisi"}

obj.id = data2.id
obj.name = data2.name

console.log("id: "+obj.id+", name: "+obj.name)

</script>

<template>
  <h3>store2</h3>
  <div>
    counter = {{ $store.state.counter }}
  </div>
  <div>
    c = {{ c }}
  </div>
</template>