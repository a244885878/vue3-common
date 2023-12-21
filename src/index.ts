import { App } from 'vue'
import BaseTable from '@/components/BaseTable/index.vue'
import Paging from '@/components/Paging/index.vue'

const components = [
  BaseTable, 
  Paging
]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}

export {
  BaseTable,
  Paging
}

export default {
  install
}