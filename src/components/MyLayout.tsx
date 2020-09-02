import React from 'react'
import { Layout, Menu } from 'antd'
import logo from '../logo.svg';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '@/pages/Home'
import Test from '@/pages/Test'
import TodoList from '@/pages/TodoList'

const { Header, Content, Footer } = Layout

interface IState<T> {
	menus: Array<T>
	current: string
}

class MyLayout extends React.Component<any, IState<object>> {
	public state: IState<object> = {
		menus: [
            {
                key:'/home',
                name:'home'
            },
            {
                key:'/test',
                name:'test'
            },
            {
                key:'/todolist',
                name:'todolist'
            }
        ],
		current: ''
    }
    public componentDidMount(){
        const pathname = this.props.location.pathname
        console.log(pathname);
        this.setState({
            current: pathname
        })
    }

    public handleClick = (e: any) => {
        this.setState({ current: e.key },() => {
            this.props.history.push(e.key)
        });
    }

	public render() {
        const { menus, current  } = this.state;
		return (
			<Layout className="my-layout">
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<div className="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
					<Menu theme="dark" mode="horizontal" selectedKeys={[current]} onClick={this.handleClick}>
                        {
                            menus.map((item: any, index: number) => (<Menu.Item key={item.key}>{item.name}</Menu.Item>))
                        }
					</Menu>
				</Header>
				<Content className="site-layout" style={{ padding: '0 50px', marginTop: 80 }}>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Switch>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/test" component={Test}></Route>
                            <Route path="/todolist" component={TodoList}></Route>
                            <Route path="*" render={() => <Redirect to="/404" />}/>
                        </Switch>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		)
	}
}

export default MyLayout
