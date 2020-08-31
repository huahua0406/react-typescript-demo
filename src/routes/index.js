import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import BlankLayout from '@/components/BlankLayout';
import BasicLayout from '@/components/BasicLayout'
import Login from '@/pages/Login'
import NoMatch from '@/pages/NoMatch'

import Home from '@/pages/Home'
import CounterDemo from '@/pages/counter'
import TodoList from '@/pages/todoList/TodoList'

export default [{
    component: BlankLayout,
    routes: [
        {
            path: '/',
            exact: true,
            render: () => <Redirect to={"/home"} />
        },
        {
            path: '/home',
            component: BasicLayout,
            routes: [
                {
                    path: '/home',
                    exact: true,
                    render: () => <Redirect to={"/home/main"}/>,
                },
                {
                    path: '/home/main',
                    component: Home,
                }
            ],
        },
        // {
        //     path: '/detail',
        //     component: Detail,
        //     routes: [
        //         {
        //             path: "/detail/:id",
        //             component: Detail
        //         }
        //     ]
        // }
    ]
}];
