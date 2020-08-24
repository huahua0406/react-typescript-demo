import React from 'react';
import { Typography, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
const { Text } = Typography;

interface IProps {
    id: number;
    title: string;
    completed: boolean;
    deleteItem: Function;
    changeItem: Function;
};



const TodoItem: React.FC<IProps> = (props: IProps) => {
    const {completed, title, id, deleteItem, changeItem} = props
    const handleClick = (id: number) => {
        changeItem(id)
    }
    const handleDeleteItem  = (id: number) => {
        deleteItem(id)
    }

    return(
        <div onDoubleClick={() => handleClick(id)} 
            style={{cursor: 'pointer'}}>
            <Text delete={completed}>{title}</Text>
            <Button type="primary" icon={<DeleteOutlined />} onClick={() => handleDeleteItem(id)}></Button>
        </div>
    )
}

export default TodoItem