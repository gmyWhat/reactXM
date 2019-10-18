import React from 'react'

const isLogin=(Com)=>{
    return class Logins extends React.Component{
               state={
                   isOpen:false
               }
               render(){
                
                   let {isOpen}=this.state
                   //如果想要跳转路由要在组件中传入props
                   return  isOpen?<Com {...this.props}/>:null
               }
               componentDidMount(){
                   if(window.localStorage.token){
                       //本地有token是就跳到指定的路由
                     this.setState({isOpen:true})
                   }else{
                       this.props.history.push('/login')
                   }
               }
    }

}
export default isLogin  