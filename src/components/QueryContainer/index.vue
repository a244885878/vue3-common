<template>
  <div class="query-container-box">
    <div class="lf-box">
      <slot />
    </div>
    <div class="rl-box">
      <div
        class="pack-up-box"
        @click="handlePackUp()"
        :style="{ visibility: props.needPackUp ? 'visible' : 'hidden' }"
      >
        <span>{{ packUp ? "收起" : "展开" }}</span>
        <ArrowDown
          class="arrow-down"
          :class="packUp ? 'arrow-down-pack-up' : ''"
        ></ArrowDown>
      </div>
      <div class="button-box">
        <el-button type="primary" @click="query()" :loading="props.loading"
          >查询</el-button
        >
        <el-button @click="reset()">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { ArrowDown } from "@element-plus/icons-vue"

const emit = defineEmits(["query", "reset", "handlePackUp"])

interface Props {
  loading?: boolean
  needPackUp?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  needPackUp: true
})

const packUp = ref<boolean>(true)

const handlePackUp = () => {
  packUp.value = !packUp.value
  emit("handlePackUp", packUp.value)
}

const query = () => {
  emit("query")
}

const reset = () => {
  emit("reset")
}
</script>

<style scoped lang="scss">
.query-container-box {
  width: 100%;
  padding: 20px 30px 0 30px;
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  box-sizing: border-box;
  display: flex;

  .lf-box {
    width: calc(100% - 212px);
    height: 100%;
  }

  .rl-box {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;

    .pack-up-box {
      font-size: 12px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      color: #a8abb2;
      cursor: pointer;

      .arrow-down {
        width: 10px;
        height: 10px;
        margin-left: 4px;
        transition: all 0.2s linear;
      }

      .arrow-down-pack-up {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
