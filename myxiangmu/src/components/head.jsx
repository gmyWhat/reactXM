import React, { PureComponent } from 'react'
import {withRouter} from 'react-router-dom'
import head from './head.module.css'
class Head extends PureComponent {
    //添加默认的props值
   static defaultProps={
          back:false,
          title:'沐恩',
          right:'',
          url:''
   }


    render() {
        let {back,title,right,url}=this.props
        return (
            <div className={`${head['head']}`}>
           {back?<span>&lt;</span>:<span></span>}
           <h3>{title}</h3>
           <span onClick={this.gotoUrl.bind(this,url)}>{right}</span>
            </div>
        )
    }
    //跳转发布投票页
    gotoUrl(url){
        console.log(url)
        this.props.history.push(url)
    }
}

export default withRouter(Head)