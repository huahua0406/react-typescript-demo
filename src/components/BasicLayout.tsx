import React from 'react'
import { Layout, Menu } from 'antd'
import logo from '../logo.svg'
import { renderRoutes } from 'react-router-config'

const { Header, Content, Footer } = Layout

interface IState<T> {
	menus: Array<T>
	current: string
}

class BasicLayout extends React.Component<any, IState<object>> {
	public state: IState<object> = {
		menus: [
			{
				key: '/home',
				name: 'home'
			},
			{
				key: '/counter',
				name: 'counter'
			},
			{
				key: '/todolist',
				name: 'todolist'
			}
		],
		current: ''
	}
	public componentDidMount() {
		const pathname = this.props.location.pathname
		console.log(pathname)
		this.setState({
			current: pathname
		})
	}

	public handleClick = (e: any) => {
		this.setState({ current: e.key }, () => {
			this.props.history.push(e.key)
		})
	}

	public render() {
		const { menus, current } = this.state
		const { route } = this.props
		return (
			<Layout className="my-layout">
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<div className="logo">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
					<Menu theme="dark" mode="horizontal" selectedKeys={[current]} onClick={this.handleClick}>
						{menus.map((item: any, index: number) => (
							<Menu.Item key={item.key}>{item.name}</Menu.Item>
						))}
					</Menu>
				</Header>
				<Content className="site-layout" style={{ padding: '0 50px', marginTop: 80 }}>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {/* 渲染当前路由下的子路由所对应的组件，第二个参数是给子路由传入的额外自定义的参数 */}
						{renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		)
	}
}

export default BasicLayout
