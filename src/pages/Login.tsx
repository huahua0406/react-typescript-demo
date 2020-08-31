import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import { login as loginAction } from '@/store/actions/user'

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
}
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 }
}

interface IState {
	username: String
	password: String
	remember: boolean
}

class Login extends React.Component<any, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			username: '',
			password: '',
			remember: false
		}
	}
	onFinish = (values: any) => {
		console.log('Success:', values)
		console.log('props===', this.props)
        const { login, history } = this.props
		login({
			username: values.username.trim(),
			password: values.password.trim()
		}).then((res: any) => {
            console.log(res, /res/)
            history.push('/home')
        }).catch((err: any) => {
            console.log(err)
        })
	}
	onFinishFailed(errorInfo: any) {
		console.log(errorInfo)
	}

	public render() {
		return (
			<Form
				{...layout}
				name="login"
				initialValues={{ remember: true }}
				onFinish={this.onFinish}
				onFinishFailed={this.onFinishFailed}>
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
						login
					</Button>
				</Form.Item>
			</Form>
		)
	}
}

// const Login: React.FC = (props: any) => {
//   const onFinish = (values: object) => {
//     console.log("Success:", values);
//     console.log("props===", props);
//     props.history.push("/home");
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <Form
//       {...layout}
//       name="login"
//       className={'login-form'}
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[{ required: true, message: "Please input your username!" }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: "Please input your password!" }]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// https://cloud.tencent.com/developer/ask/213016/answer/328574
// https://www.jianshu.com/p/caf0c3d2ebc4


const mapStateToProps = (state: any) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    login: (data: any) => dispatch(loginAction(data))
  })
export default connect(mapStateToProps, mapDispatchToProps)(Login)


// 简写
// export default connect((state: any) => state.user, { login: loginAction })(Login)