import React, { lazy } from 'react'
import { Crud } from '../components/crud/list'

const CrudDetail = lazy(() => import('../components/crud/detail'))

const NotFound   = ()=>(
    <h1>Ops, ocorreu um erro!</h1>
)

const routes = [
    {
        path: '/',
        component: Crud,
        exact: true,
        // routes:[
        //     {
        //         path: '/posts/:id',
        //         component: CrudDetail,
        //         exact: true,
        //     },
        //     {
        //         path: '*',
        //         component: NotFound,
        //     }        
        // ]
    },
    {
        path: '/posts/:id',
        component: CrudDetail,
        exact: true,
    },
    {
        path: '*',
        component: NotFound,
    }
]

export default routes