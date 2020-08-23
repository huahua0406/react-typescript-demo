import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { List, Typography, Button, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
const { Text } = Typography;
const { Search } = Input;

interface IProps {
    title?: string
};


// type TodoItem = {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// };

// or

interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


// const Todos: TodoItem[] = [];
// or
const Todos: Array<TodoItem> = []



function TodoItem(props: any){
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



const TodoList: React.FC<IProps> = (props: IProps) => {
    const [data, setData] = useState<TodoItem[]>(Todos);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
		// 更优雅的方式
		const fetchData = async () => {
			const result = await axios('http://jsonplaceholder.typicode.com/todos')
			setData(result.data.slice(0, 10))
		}
		fetchData()
    }, [])
    const handleDelete = (id: number) => {
        const newData = [...data];
        let deleteIndex = newData.findIndex(item => item.id === id)
        newData.splice(deleteIndex, 1)
        setData(newData)
    }
    const handleClick = (id: number) =>{
        const newData = [...data];
        let changeIndex = newData.findIndex(item => item.id === id)
        newData[changeIndex].completed = !newData[changeIndex].completed
        setData(newData)
    }

    function addTodo(title: string) {
        const newData = [...data];
        newData.push({
          userId: Date.now(),
          title,
          completed: false,
          id: 22
        });
        setData(newData);
        setInputValue("");
    }

    return (
        
        <List
            bordered
            size="small"
            dataSource={data}
            header={<div>
                <Search
                placeholder="今天完成什么计划?"
                enterButton="添加任务"
                size="small"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onSearch={(value, event) => addTodo(value)}
                />
            </div>}
            footer={<div>Footer</div>}
            renderItem={item => (
                <List.Item>
                    <TodoItem 
                        deleteItem={(id: number) => handleDelete(id)} 
                        changeItem={(id: number) => handleClick(id)} 
                        {...item}/>
                </List.Item>
            )}
        />
    );
};

export default TodoList
// https://juejin.im/post/6844903999351554056#heading-1
// https://juejin.im/post/6844904102355271694
// https://juejin.im/post/6844903834137919501
// https://www.jianshu.com/p/4733f8c6574e
// https://juejin.im/post/6844903834137919501