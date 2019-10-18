import React, { PureComponent } from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import foots from './foot.module.css'
class Foot extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            list:[
                {
                    path:"/index/home",
                    txt:'首页'
                },
                {
                    path:"/index/dynamic",
                    txt:'动态'
                },
                {
                    path:"/index/mate",
                    txt:'资料'
                },
                {
                    path:"/index/board",
                    txt:'留言板'
                },
                {
                    path:"/index/my",
                    txt:'我的'
                },
                
            ]
        }
    }

    render() {
        let {list}=this.state
        return (
            <div className={`${foots['foot']}`}>
             {
               list&&list.map((item,index)=><p key={index}><NavLink to={item.path}>{item.txt}</NavLink></p>)  
             }
            </div>
        )
    }
}

export default withRouter(Foot)