import React, { PureComponent } from 'react'
import isLogin from '@/untils/isLogin'
import Head from '@/components/head'
import RouteView from '@/router/routerView'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import home from './home.module.css'
class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                 <Head title={'沐恩muen'}/>
                 <span onClick={this.gotoVote.bind(this)}>投票</span>
                 <div className={`swiper-container ${home["swiper-container"]}`}>
                     <div className='swiper-wrapper'>
                         <div className='swiper-slide'>1</div>
                         <div className='swiper-slide'>2</div>
                         <div className='swiper-slide'>3</div>
                     </div>
                 </div>
              
            </div>
        )
    }
    gotoVote(){
        console.log(this)
       this.props.history.push('/vote')
    }
    componentDidMount(){
        new Swiper('.swiper-container')
    }
}

export default isLogin(Home)