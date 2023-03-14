<script setup>
import {onMounted} from "vue";
import axios from "axios"

onMounted(()=>{
  console.log("onmounted")

  // axios.get("https://api.uomg.com/api/rand.avatar?sort=男&format=json")
  axios.get("/api/FingerUnion/list.php")
      .then(res => {
        console.log("data: "+ JSON.stringify(res))
      })
})
</script>

<template>
<h3>跨域解决方案</h3>
</template>