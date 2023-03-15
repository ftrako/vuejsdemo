<template>
  <h3>这是ElementUI Plus示例</h3>

  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>

  <div>
    <el-icon :size="30" color="red">
      <Edit/>
    </el-icon>
    <el-icon :size="30" color="blue"><Setting /></el-icon>
  </div>
</template>