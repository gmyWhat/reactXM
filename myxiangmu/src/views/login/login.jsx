import React, { PureComponent } from 'react'
import {Logins} from '../../api/api'
import {Toast} from 'antd-mobile';

class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            pwd:'',
            isshow:false
        }
    }

    render() {
        let {username,pwd,isshow}=this.state
        return (
            <div>
             <p>
                用户名： <input type="text" name='username' value={username} onChange={this.haldLogin.bind(this)}/>
             </p>
             <p>
                 密码： <input type="password" name='pwd' value={pwd} onChange={this.haldLogin.bind(this)}/>
             </p>
             <p>
                 <button onClick={this.haldgoLight.bind(this)}>登录</button> {isshow?<button onClick={this.haldgoToReg.bind(this)}>注册</button>:null}
             </p>
            </div>
        )
    }
    //受控组件
    haldLogin(e){
        let key=e.target.name
        let value=e.target.value
        this.setState({[key]:value})
    }
    //登录事件
    async haldgoLight(){
        let {username,pwd,isshow}=this.state
        try{
           let res=await Logins({userName:username,password:pwd})
           //如果登录就跳转的点击登录前的页面 否则跳转到注册或者按照提示输入
           console.log(res)
           if(res.data.code==1){
              //本地存token
              window.localStorage.token=res.data.token
              //本地存入userId
              window.localStorage.userId=res.data.userId
               this.props.history.go(-1)
           }else if(res.data.code==-1){
            Toast.info(res.data.message, 1);
            if(res.data.message!='密码不正确')
            this.setState({isshow:true})
            //this.props.history.push('/regirst')
           }
        }catch(e){
            
        }
    }
    //注册
    haldgoToReg(){
          this.props.history.push('/regirst')
    }
    
}

export default Login