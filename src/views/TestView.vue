<template>
  <div>
    id={{ obj.id }}
  </div>
  <div>
    name={{ obj.name }}
  </div>

  <div>
    <button @click="change">修改</button>
  </div>

  <cascader-view />
</template>

<script setup>
import {reactive, ref, toRefs} from "vue"
import CascaderView from "./CascaderView.vue";

let data = reactive({
  obj: {
    id: "1001",
    name: "zhangsan"
  }, age: "13"
})

let {obj, age} = toRefs(data)

const change = () => {
  obj.value.id = "2002"
  obj.value.name = "lisi"

  console.log("obj:", obj)
  console.log("obj.value:", obj.value)
  console.log("data", data)
  console.log("data.value:", data.value)
}
</script>
