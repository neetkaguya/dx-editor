/*
 * @Description: 工具按钮
 * @Author: ldx
 * @Date: 2023-12-21 11:13:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-16 09:18:41
 */

import { Button, Dropdown, MenuProps, Tooltip } from 'antd'
import { useContext, useEffect, useState } from 'react'

import EditorContext from '@/dxEditor/context'

import File from './file'
import Edit from './edit'
import Insert from './insert'
import Format from './format'
import View from './view'
import Preferences from './preferences'
import logo from '../../icons/logo.png'
const MenuBar = () => {
  const [selectedName, setSelectedName] = useState('')
  const [tools, setTools] = useState<any[]>([])
  const editor = useContext(EditorContext)

  useEffect(() => {
    if (!editor) return
  }, [editor])

  return (
    <div className="flex-1 flex items-center h-30px py-4px">
      <div className="mr-10px">
        <img className="w-30px h-30px" src={logo} alt="dx-editor" />
      </div>
      <div>
        <File></File>
        <Edit></Edit>
        <Insert></Insert>
        <Format></Format>
        <View></View>
        {/* <Preferences></Preferences> */}
      </div>
    </div>
  )
}

export default MenuBar
