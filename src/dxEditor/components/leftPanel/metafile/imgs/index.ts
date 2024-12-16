/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-12-06 10:57:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-13 09:11:40
 */
import mods from './mods'

export type Children = {
  name: string
  url: string
  id: number
}
const imgs = [
  {
    name: '元件',
    children: mods as Children[]
  },

]

export default imgs
