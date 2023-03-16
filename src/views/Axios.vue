<template>
  <div>
    <input v-model="data.domain"  type="text" />
  </div>
  <div>
    data.domain: {{ data.domain }}
  </div>
  <div>
    data: {{ data }}
  </div>

  <div>
    <button @click="post">发起请求</button>
  </div>

</template>

<script setup>
import {reactive, ref} from "vue";
import icp from "../api/icp/icp.js"

let data = reactive({
  code: 0,
  domain: "",
  "icp": ""
})

const post = () => {
  icp.query(data.domain).then((response) => {
    console.log("data:", data)
    console.log("response:", response)
    data.domain = response.data.domain
    data.icp = response.data.icp
    console.log("data:", data)
  });
}

icp.tt()

</script>