import { createApp } from 'vue'
import './style.css'
import AppELe from './App.vue'
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'

import type { App } from 'vue'

let app: App

const render = (container?: HTMLElement | undefined) => {
  app = createApp(AppELe)
  app.mount(container?.querySelector('#app') || '#app')
}
const initQiankun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props
      render(container)
    },
    bootstrap() {

    },
    update() {

    },
    unmount() {
      app.unmount()
    },
  })
}
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQiankun() : render()