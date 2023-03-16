<template>
  <h3>这是Form Validate示例</h3>

  <el-form
      :model = "form"
      :rules="rules"
      label-width="80px"
      style="max-width: 460px"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" clearable style="width: 240px"/>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {reactive} from "vue";

let form = reactive({
  name: ''
})
const rules = {
  name: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    },
    {
      pattern: /^123$/,
      message: "请输入正确的姓名",
      trigger: "blur"
    }
  ]
}
</script>
