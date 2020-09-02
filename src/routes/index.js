import React from 'react'
import { Redirect } from 'react-router-dom'
// import BlankLayout from '@/components/BlankLayout'
import BasicLayout from '@/components/BasicLayout'
import Login from '@/pages/Login'
import NoFound from '@/pages/NoFound'

import Home from '@/pages/Home'
import CounterDemo from '@/pages/counter'
import TodoList from '@/pages/todoList/TodoList'

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: NoFound
    },
	{
        path: '/',
		component: BasicLayout,
		routes: [
			{
                path: '/',
                exact: true,
                render: () => <Redirect to={'/home'} />
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/counter',
                component: CounterDemo
            },
            {
                path: '/todolist',
                component: TodoList
            },
            // 嵌套路由
            // {
            // 	path: '/detail',
            // 	component: Detail,
            // 	routes: [
            // 		{
            // 			path: '/detail/:id',
            // 			component: Detail
            // 		}
            // 	]
            // }
            {
                path: '*',
                render: () => <Redirect to='/404' />
            }
		]
    },
    {
        path: '*',
        component: NoFound
    }
]

export default routes