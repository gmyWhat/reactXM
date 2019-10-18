import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

class RouterView extends React.Component{
    render(){
        let {routes}=this.props
        let routeArr=routes.filter(item=>!item.to)
        let redirectArr=routes.filter((item,index)=>item.to).map((item,index)=><Redirect key={index} from={item.from} to={item.to}></Redirect>)
        return <Switch>
                    {
                        routeArr&&routeArr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                            return <item.component {...props} routes={item.routes}></item.component>
                        }}></Route>).concat(redirectArr)
                    }
              </Switch>
    }
}
export default RouterView