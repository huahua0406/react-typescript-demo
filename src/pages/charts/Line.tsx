import React from 'react'

interface IProps {
	children: React.ReactNode
}

const Line: React.FC<IProps> = ({ children }) => {
	return <div>{children}</div>
}

export default Line
