import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading....</div>
}

const Index=Loadable({
    loader:()=>import('../views/index'),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import('../views/login/login.jsx'),
    loading:Loading
})
const Issuevode=Loadable({
    loader:()=>import('../views/issuevotes/issuevotes.jsx'),
    loading:Loading
})
const Regirst=Loadable({
    loader:()=>import('../views/regirst/regirst.jsx'),
    loading:Loading
})
const Vote=Loadable({
    loader:()=>import('../views/vote/vote.jsx'),
    loading:Loading
})
const Home=Loadable({
    loader:()=>import('../views/index/home/home'),
    loading:Loading
})
const Dynamic=Loadable({
    loader:()=>import('../views/index/dynamic/dynamic.jsx'),
    loading:Loading
})
const Mate=Loadable({
    loader:()=>import('../views/index/mate/mate.jsx'),
    loading:Loading
})
const Board=Loadable({
    loader:()=>import('../views/index/board/board.jsx'),
    loading:Loading
})
const My=Loadable({
    loader:()=>import('../views/index/my/my.jsx'),
    loading:Loading
})

const routes=[
    {
        path:'/index',
        component:Index,
        routes:[
            {
                path:'/index/home',
                component:Home
            },
            {
                path:'/index/dynamic',
                component:Dynamic
            },
            {
                path:'/index/mate',
                component:Mate
            },
            {
                path:'/index/board',
                component:Board
            },
            {
                path:'/index/my',
                component:My
            },
            {
                from:'/index',
                to:'/index/home'
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/issuevote',
        component:Issuevode
    },
    {
        path:'/vote',
        component:Vote
    },
    {
        path:'/regirst',
        component:Regirst
    },
    {
        from:'',
        to:'/index'
    }
]
export default routes
