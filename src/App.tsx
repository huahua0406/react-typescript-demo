import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './App.css'
import routes from './routes'

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>{renderRoutes(routes)}</Router>
		</div>
	)
}

export default App
