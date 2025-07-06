import { createRouter, createWebHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []
const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/accounting' : '/',
  ),
  routes,
})

export default router