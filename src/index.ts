import { App, defineComponent } from 'vue';
import QueryContainer from "@/components/QueryContainer/index.vue"
import TableContainer from "@/components/TableContainer/index.vue"
import Paging from "@/components/Paging/index.vue"
import SvgIcon from "@/components/SvgIcon/index.vue"
import BaseTable from "@/components/BaseTable/index.vue"
import Video from "@/components/Video/index.vue"

export const componentsList: Record<string, ReturnType<typeof defineComponent>> = {
  QueryContainer,
  TableContainer,
  Paging,
  SvgIcon,
  BaseTable,
  Video
}

const components = {
  install: function (Vue: App) {
    Object.keys(componentsList).forEach(key => {
      // 注册所有自定义指令
      Vue.component(key, componentsList[key])
    })
  }
}

export default components