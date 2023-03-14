<script setup>
import {ref} from 'vue'
import store from '../../store'

let c = ref(store.state.counter)

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