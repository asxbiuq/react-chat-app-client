import { useNavigate } from 'react-router-dom'
import Store from '@/store/store'
import { Button, Checkbox, Form, Input } from 'antd'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Modal from '../Modal'
export default () => {
  const navigate = useNavigate()
  let [isOpen, setIsOpen] = useState(true)
  
  const onFinish = (values: any) => {
    console.log('Success:', values)
    const {name,room,remember}=values
    Store.setName(name)
    Store.setRoom(room)
    navigate('/chat', { replace: true })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
        <Modal>
          <div className='grid place-content-center'>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="用户名"
                name="name"
                rules={[{ required: true, message: '请输入您的用户名！' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="房间号"
                name="room"
                rules={[{ required: true, message: '请输入您要进入的房间号！' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 1, span: 15 }}
              >
                <Checkbox>记住当前设置</Checkbox>
              </Form.Item>

  
              <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button type="primary" htmlType="submit" block>
                  进入
                </Button>
              </Form.Item>

            </Form>
          </div>
        </Modal>
  )
}
