/*
 * @Description: 
 * @Author: ldx
 * @Date: 2024-08-20 14:33:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-11 08:47:55
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@/css/reset.css'
import '@/css/common.scss'
import 'uno.css'
import { ConfigProvider } from 'antd'

const theme = {
  components: {
    // Slider: {
    //   dotActiveBorderColor:'red',
    //   dotBorderColor:'#ffff00',
    //   dotSize:6,
    // },
  },
}
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  // </StrictMode>,
)
