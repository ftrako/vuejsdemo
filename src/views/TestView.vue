<template>
  <div>
    data.obj.count = {{ data.obj.count  }}
  </div>
  <div>
    obj.count = {{ obj.count  }}
  </div>
  <div>
    age = {{ age  }}
  </div>
  <div>
    data.age = {{ data.age  }}
  </div>

  <div>
    <button @click="onClicked">增加</button>
  </div>
<!--  <div>-->
<!--    <button @click="onClicked2">增加data.age</button>-->
<!--  </div>-->
<!--  <div>-->
<!--    <button @click="onClicked3">增加data.obj.count</button>-->
<!--  </div>-->
<!--  <div>-->
<!--    <button @click="onClicked4">增加obj.count</button>-->
<!--  </div>-->
</template>

<script setup>
import {reactive, ref, toRef, toRefs} from "vue"
import CascaderView from "./CascaderView.vue";
import FormValidateView from "./FormValidateView.vue";


let data = reactive({
  obj: {
    id: "1001",
    name: "zhangsan",
    count: 0
  }, age: 0
})

let refData = ref({
  count: 0
})

let {age, obj} = toRefs(data)

const onClicked = ()=>{
  // console.log("data.age=",data.age)
  // console.log("age.value=",age.value)
  console.log("refData.value.count=",refData.value.count)
  console.log("refData=",refData)
  refData.value.count++
}
// const onClicked2 = ()=>{
//   console.log("data.age=",data.age)
//   console.log("age.value=",age.value)
//   console.log("data=",data)
//   data.age++
// }
// const onClicked3 = ()=>{
//   console.log("data.obj.count=",data.obj.count)
//   console.log("age.value=",age.value)
//   console.log("obj=",obj)
//   console.log("data=",data)
//   console.log("data.obj=",data.obj)
//   data.obj.count++
//   age.value++
// }
// const onClicked4 = ()=>{
//   console.log("data.obj.count=",data.obj.count)
//   console.log("age.value=",age.value)
//   console.log("data=",data)
//   console.log("data.obj=",data.obj)
//   console.log("refObj=",refObj)
//   obj.value.count++
//   age.value++
// }




</script>
