import React from 'react'
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import './App.css'
import BasicLayout from '@/components/BasicLayout'
import Login from '@/pages/Login'
import NoMatch from '@/pages/NoMatch'

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact render={() => <Redirect to="/home" />}></Route>
					<Route path="/login" component={Login} />
                    <Route path="/404" component={NoMatch}/>
					<Route path="/" component={BasicLayout} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
