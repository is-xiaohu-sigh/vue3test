import { createApp } from 'vue'
import App from './App.vue'
import { ElementPlus } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
//遍历ElemetPlusIconsVue中的所有组件进行注册
for (const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}
app.use(ElementPlus)
app.mount('#app')
