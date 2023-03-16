<template>
  <h3>这是pinia状态存储示例</h3>
  <div>
    number: {{store.number}}
  </div>
  <div>
    name: {{ store.name }}
  </div>
  <div>
    <button @click="handler">点击</button>
  </div>
  <div>
  </div>
</template>

<script setup>
import defineStore from "../../store"

const store = defineStore();

const handler = () => {
  store.number++
}
</script>