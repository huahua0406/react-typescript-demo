import React from 'react'
import Counter from './Counter'

const CounterWrapper: React.FC = (props: any) => {
	console.log('props: ', props)
	return (
		<div>
			<Counter value={0} />
		</div>
	)
}

export default CounterWrapper
