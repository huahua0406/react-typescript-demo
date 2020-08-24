import React from "react";
import Counter from './Counter'

const CounterWrap: React.FC = () => {
    return (
        <div>
            <Counter value={0}/>
        </div>
    )
}

export default CounterWrap;
