<script setup>
import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

let msg = "abc"
let flag = ref(true)

const count = ref(0)
</script>

<template>
  <p v-if="flag">真</p>
  <p v-else>假</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
