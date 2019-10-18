import React, { PureComponent } from 'react'
import {Toast} from 'antd-mobile';
import {Regirsts} from "@/api/api"
class Regirst extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            pwd:'',
            qpwd:'',
            realName:''
        }
    }

    render() {
        let {username,pwd,realName,qpwd}=this.state
        return (
            <div>
              <p>
                 用户名： <input type="text" name='username' value={username} onChange={this.haldZ.bind(this)}/>
              </p>
              <p>
                 密码： <input type="password" name="pwd" value={pwd} onChange={this.haldZ.bind(this)}/>
              </p>
              <p>
                 确认密码： <input type="password" name="qpwd" value={qpwd} onChange={this.haldZ.bind(this)}/>
              </p>
              <p>
                 真实姓名： <input type="text" name="realName" value={realName} onChange={this.haldZ.bind(this)}/>
              </p>
              <p>
                  <button onClick={this.haldZc.bind(this)}>注册</button>
              </p>
            </div>
        )
    }
    //注册
    haldZ(e){
        let key=e.target.name;
        let value=e.target.value;
        this.setState({[key]:value})
    }
  async haldZc(){
        let {username,pwd,realName,qpwd}=this.state
        //首先判断密码昱确认密码是否一致
        if(pwd==qpwd){
           try{
               //成功
              let res=await Regirsts({userName:username,password:pwd,realName})
               if(res.data.code==1){
                Toast.info(res.data.message, 1);
                this.props.history.push('/index')
            }
           }catch(e){
               //错误处理
               console.log(e.response)
                 if(e.response.data.code==-1){
                    Toast.info(e.response.data.message, 2);
                 }
           }
        }else{
            Toast.info('两次密码不一致', 1);
        }
    }

}

export default Regirst