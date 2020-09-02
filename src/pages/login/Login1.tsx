import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
}
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 }
}

const Login: React.FC = (props: any) => {
	const onFinish = (values: object) => {
		console.log('Success:', values)
		console.log('props===', props)
		props.history.push('/home')
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			{...layout}
			name="login"
			className={'login-form'}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}>
			<Form.Item
				label="Username"
				name="username"
				rules={[{ required: true, message: 'Please input your username!' }]}>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}>
				<Input.Password />
			</Form.Item>

			<Form.Item {...tailLayout} name="remember" valuePropName="checked">
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default Login
