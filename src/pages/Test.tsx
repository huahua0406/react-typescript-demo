import React from "react";
import Counter from '@/components/Counter'

// interface IProps {
//   children: React.ReactNode;
// }

// const Test: React.FC<IProps> = ({ children }) => {
//   return <div>{children}</div>;
// };

const Test: React.FC = () => {
    return (
        <div>
            <Counter value={0}/>
        </div>
    )
}

export default Test;
