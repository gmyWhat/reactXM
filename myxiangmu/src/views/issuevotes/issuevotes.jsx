import React, { Component } from 'react'
import isLogin from '@/untils/isLogin.jsx'
import Head from '@/components/head'
import { DatePicker,List } from 'antd-mobile';
import {newvote} from '@/api/api'
class Issuevotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            info: '',
            add: '',
            chooseList: [],
            isSingle: 0, //单选
            anonymity: 0, //匿名
            date: ''
        }
    }

    render() {
        let { title, info, add, isSingle, anonymity, chooseList, date } = this.state;
        return (
            <div>
                <Head back={true} title="发起投票" />
                <div >
                    <label>
                        标题
                        <input placeholder="请输入标题" value={title} name="title" onChange={this.handleChange.bind(this)} />
                    </label>
                    <label>
                        描述
                        <input placeholder="请输入标题" value={info} name="info" onChange={this.handleChange.bind(this)} />
                    </label>
                    <ul>
                        {
                            chooseList && chooseList.map((item, index) => <li key={index}>
                                <span>选项{index + 1}</span>
                                <span>{item}</span>
                                <span onClick={this.handleDel.bind(this, index)}>删除</span>
                            </li>)
                        }
                    </ul>
                    <label>
                        <input placeholder="请输入标题" value={add} name="add" onChange={this.handleChange.bind(this)} />
                        <span onClick={this.handleAdd.bind(this)}>添加</span>
                    </label>
                    <label>
                        请选择单选多选
                        <select value={isSingle} name="isSingle" onChange={this.handleChange.bind(this)}>
                            <option value="0">单选</option>
                            <option value="1">多选</option>
                        </select>
                    </label>
                    <label>
                        是否匿名
                        <select value={anonymity} name="anonymity" onChange={this.handleChange.bind(this)}>
                            <option value="0">匿名</option>
                            <option value="1">不匿名</option>
                        </select>
                    </label>


                    <DatePicker
                        mode="date"
                        value={date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal">截止日期</List.Item>
                    </DatePicker>

                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
    handleChange(e) {
        let key = e.target.name;
        let val = e.target.value;
        console.log(val, key);
        this.setState({ [key]: val })
    }
    async handleSubmit() {
        let { title, info, add, isSingle, anonymity, date, chooseList } = this.state;
        console.log(title, info, add, isSingle, anonymity);
        try {

            let res = await newvote({
                title,
                info,
                userId: window.localStorage.userId *1,
                chooseList,
                anonymity:anonymity*1,
                isSingle:isSingle*1,
                startTime: new Date(),
                endTime: date
            });
            console.log(res);
            if(res.data.code == 1){
                this.props.history.push('/vote');
            }
        } catch (e) {
            console.log(e.response);
        }
    }
    handleAdd() { //添加
        let { add, chooseList } = this.state;
        chooseList.push(add);
        this.setState({ chooseList })
    }
    handleDel(ind) { //删除
        let { chooseList } = this.state;
        chooseList.splice(ind, 1);
        this.setState({ chooseList })
    }
      
}

export default isLogin(Issuevotes)


