import React, { PureComponent } from 'react'
import isLogin from '@/untils/isLogin.jsx'
import Head from '@/components/head'
import {allVote}from "@/api/api"
import votes from './vote.module.css'
class Vote extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            list:[],
            newlist:[],
            title:["全部","已结束","正在进行"],
            ind:0
        }
    }

    render() {
        let {list,newlist,title,ind}=this.state
        return (
            <div className={`${votes['voteC']}`}>
                <Head back={true} title={"投票"} right={'发起投票'} url={'/issuevote'}/>
              <div className={`${votes['votes']}`}>
                  <ul>
                     {
                         title&&title.map((item,index)=><li key={index} onClick={this.getdata.bind(this,index)} className={`${votes[ind==index?'active':'']}`}>{item}</li>)
                     }
                  </ul>
                  
              </div>
              <div className={`${votes['cont']}`}>
                      {
                          newlist&&newlist.map((item,index)=><dl key={index} className={`${votes['dl']}`}>
                              <dt><img src="" alt=""/></dt>
                              <dd>
                                  <p>
                                      <span className={`${votes['htitle']}`}>{item.title}</span>
                                      <span>截止时间:{item.endTime}</span>
                                  </p>
                                  <p>
                                      <span>{item.useId}</span>
                                      {item.isSingle==1?<span>多选</span>:<span>单选</span>}
                                  </p>
                              </dd>
                          </dl>)
                      }
                  </div>
            </div>
        )
    }
    //点击事件
    getdata(index){
        let {list,newlist,title,ind}=this.state
        ind=index
        this.setState({ind})
        console.log(list)
        //获取当前的时间
        let time=new Date()*1;
       newlist=ind==0?list:list.filter((item)=>{
           return ind==1?time>new Date(item.endTime)*1:time<new Date(item.endTime)
       })
      this.setState({newlist})
    }
    async componentDidMount(){
        let {list,newlist}=this.state
       try{
           //获取所有的投票信息
        let res=await allVote()
        list=res.data;
        newlist=res.data
         this.setState({list,newlist})
      
       }catch(e){
        console.log(e.response)
       }
    }
}

export default isLogin(Vote)