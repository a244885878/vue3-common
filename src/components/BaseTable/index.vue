<template>
  <el-table
    ref="table"
    v-bind="$attrs"
    :data="props.tableData"
    class="base-table-box"
  >
    <template #empty>
      <slot name="empty">
        <el-empty description="暂无数据" />
      </slot>
    </template>
    <el-table-column v-if="props.showSelection" type="selection" width="55" />
    <el-table-column
      v-bind="item"
      v-for="(item, index) in props.tableColumnData"
      :key="index"
    >
      <template #header="{ column, $index }">
        <slot name="tableColumnHeader" :data="{ column, $index }">
          <span>{{ column.label }}</span>
        </slot>
      </template>
      <template #default="{ row, $index }">
        <slot name="tableColumn" :data="{ item, row, index: $index }"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { ElTable,TableColumnInstance } from "element-plus"

interface Props {
  tableData: Record<string, any>[]
  tableColumnData: TableColumnInstance[]
  showSelection?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showSelection: false
})

const table = ref<InstanceType<typeof ElTable>>()

defineExpose({
  table
})
</script>

<style scoped lang="scss"></style>
