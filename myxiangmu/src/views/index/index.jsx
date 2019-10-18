import React, { PureComponent } from 'react'
import RouterView from '@/router/routerView.jsx'
import Head from '@/components/head'
import Foot from '@/components/foot'
import indexcss from './index.module.css'
class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <div className={`${indexcss['main']}`}>
                <RouterView routes={this.props.routes}/>
                </div>
              
                <Foot/>
            </>
        )
    }
}

export default Index