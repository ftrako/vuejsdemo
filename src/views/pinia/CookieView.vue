<template>
  <h3>这是cookie存储示例</h3>
  <div>
    token: {{ tokenStore.token }}
  </div>
  <div>
    count: {{ tokenStore.count }}
  </div>
  <div>
    <button @click="handler">点击</button>
  </div>
</template>

<script setup>
import tokenStore from "../../store/modules/token.js";
import {onMounted} from "vue"

const handler = () => {
  console.log("tokenStore:", tokenStore)
  console.log("token:", tokenStore.token)
  tokenStore.token = new Date().toString()
  tokenStore.count++
}

onMounted(() => {
  tokenStore.printToken()
})
</script>