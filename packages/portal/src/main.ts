import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { qiankunInit } from '../utils/qiankun'
import App from './App.vue'

import 'ant-design-vue/dist/reset.css';
import './style.css'

createApp(App).use(Antd).mount('#app')
qiankunInit()