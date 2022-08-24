import { observer } from 'mobx-react-lite'
import { ChangeEventHandler } from 'react'

interface GenericInput {
  getValue: Function
  onChange: Function
}

export const GenericInput = observer(({ getValue, onChange }: GenericInput) => (
  <input
    className="input"
    type="text"
    placeholder="请输入消息"
    value={getValue()}
    onChange={onChange()}
  />
))
