import {createApp} from 'vue'

import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts'
import 'vxe-table/lib/style.css'
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';
import DevUI from 'vue-devui';

import App from './App.vue'

ThemeServiceInit({ infinityTheme }, 'infinityTheme');


const app = createApp(App)

app.use(DevUI)
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$echarts = echarts

app.mount('#app')