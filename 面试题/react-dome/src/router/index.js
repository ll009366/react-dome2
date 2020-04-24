import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../pages/Home/index';
import Layout from '../Layout/Layout'
export default [
    {
        path: '/',
        component: Layout,
        routes: [
            {
                path: "/",
                exact: true,
                render: () => (
                    <Redirect to={"/home"} />
                )
            },
            {
                path: "/home",
                component: Home
            },
        ]
    }
]