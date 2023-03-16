<script setup>
import {ref} from 'vue'
import store from '../../store/vuex'

let c = store.state.counter

const handle = ()=>{
  store.state.counter++
}

</script>

<template>
  <h3>store1</h3>
  <div>
    <button @click="handle">增加</button>
  </div>
  <div>
    counter = {{ $store.state.counter }}
  </div>
  <div>
    c = {{ c }}
  </div>
</template>