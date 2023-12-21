<template>
  <div class="table-container-box">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.table-container-box {
  margin-top: 16px;
  width: 100%;
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
