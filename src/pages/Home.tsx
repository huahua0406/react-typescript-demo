import React from 'react'
import { Button, Table, Modal, Form, Input, Radio } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import * as Api from '@/api'

interface Values {
	title: string
	description: string
	modifier: string
}

interface User {
	id: number
	name: string
	phone: string
	website: string
}

interface IProps {
	visible: boolean
	onCreate: (values: Values) => void
	onCancel: () => void
}

interface IState {
	list: User[]
	visible: boolean
}

const columns: ColumnsType<User> = [
	{
		key: 'id',
		title: 'ID',
		dataIndex: 'id'
	},
	{
		key: 'name',
		title: 'Name',
		dataIndex: 'name'
	},
	{
		key: 'phone',
		title: '手机',
		dataIndex: 'phone'
	},
	{
		key: 'website',
		title: '网站',
		dataIndex: 'website'
	}
]

const CreateForm: React.FC<IProps> = ({ visible, onCreate, onCancel }) => {
	const [form] = Form.useForm()
	const handleSubmit = () => {
		form.validateFields()
			.then((values: any) => {
				onCreate(values)
			})
			.catch((info: any) => {
				console.log('Validate Failed:', info)
			})
	}

	const handleCancel = () => {
		form.resetFields()
		onCancel()
	}
	return (
		<Modal
			visible={visible}
			title="新增用户"
			okText="Create"
			cancelText="Cancel"
			onCancel={handleCancel}
			onOk={handleSubmit}>
			<Form form={form} layout="vertical" name="form_in_modal" initialValues={{ modifier: 'public' }}>
				<Form.Item
					name="title"
					label="Title"
					rules={[{ required: true, message: 'Please input the title of collection!' }]}>
					<Input />
				</Form.Item>
				<Form.Item name="description" label="Description">
					<Input type="textarea" />
				</Form.Item>
				<Form.Item name="modifier" className="collection-create-form_last-form-item">
					<Radio.Group>
						<Radio value="public">Public</Radio>
						<Radio value="private">Private</Radio>
					</Radio.Group>
				</Form.Item>
			</Form>
		</Modal>
	)
}

@(withRouter as any)
class Home extends React.Component<any, IState> {
	public state = {
		list: [],
		visible: false
	}

	public onCreate = (values: any) => {
		console.log('Received values of form: ', values)
		this.setState({ visible: true })
	}

	public onCancel = () => {
		this.setState({ visible: false })
	}

	public handleOpen = () => {
		this.setState({ visible: true })
	}

	public componentDidMount() {
		Api.getUserList().then((res: any) => {
			console.log(res)
			this.setState({ list: res.data })
		})
	}
	public render() {
		const { list, visible } = this.state
		return (
			<DocumentTitle title={'首页'}>
				<div>
					<Button type="primary" onClick={this.handleOpen}>
						新增用户
					</Button>
					<Table
						bordered
						pagination={false}
						dataSource={list}
						columns={columns}
						rowKey={(record: any) => record.id}
					/>

					{/* <Table<User> columns={columns} dataSource={list} /> */}

					<CreateForm visible={visible} onCreate={this.onCreate} onCancel={this.onCancel} />
				</div>
			</DocumentTitle>
		)
	}
}

export default Home
