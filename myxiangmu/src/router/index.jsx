import React from 'react'
import {BrowserRouter} from "react-router-dom"
import routes from './routerConfig'
import RouterView from './routerView' 
class BigRoute extends React.Component{
    render(){
        return <BrowserRouter>
        
                  <RouterView routes={routes}/>
          </BrowserRouter>
    }
}
export default BigRoute