/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'element-plus/dist/locale/zh-cn.mjs'

declare module 'vue3-common' {
  import { DefineComponent } from 'vue'
  export const BaseTable: DefineComponent
  export const Paging: DefineComponent
}
