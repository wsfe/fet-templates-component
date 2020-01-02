import {{ componentName }} from './components/{{ componentName }}'
import { version } from '../package.json'

// 定义 install 方法
const install = function (Vue) {
  Vue.component('{{ componentName }}', {{ componentName }})
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default  Object.assign({{ componentName }}, {
  // 版本信息
  version,
  // 导出 install 方法用于支持插件
  install
})

