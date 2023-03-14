<script setup>
import {onMounted} from "vue";

onMounted(() => {
})
</script>

<template>
  <div class="about">
    <router-link to="/about/1">关于1</router-link>
    <router-link to="/about/2">关于2</router-link>
    <router-view/>
  </div>
</template>