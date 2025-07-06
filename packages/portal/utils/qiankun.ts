import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import subApps from '../config/menu'

export const qiankunInit = () => {
  registerMicroApps(subApps, {
    beforeLoad: [
      async app => {
        console.log('beforeLoad', app)
      }
    ],
    beforeMount: [
      async app => {
        console.log('beforeLoad', app)
      }
    ],
    beforeUnmount: [
      async app => {
        console.log('beforeLoad', app)
      }
    ],
  })
  setDefaultMountApp('accounting')
  start()
}
