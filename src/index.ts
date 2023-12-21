import { App } from 'vue'
import BaseTable from '@/components/BaseTable/index.vue'
import Paging from '@/components/Paging/index.vue'
import QueryContainer from '@/components/QueryContainer/index.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import TableContainer from '@/components/TableContainer/index.vue'
import Video from '@/components/Video/index.vue'

const components = [
  BaseTable, 
  Paging,
  QueryContainer,
  SvgIcon,
  TableContainer,
  Video
]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}

export {
  BaseTable, 
  Paging,
  QueryContainer,
  SvgIcon,
  TableContainer,
  Video
}

export default {
  install
}