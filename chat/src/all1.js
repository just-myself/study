import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import Message from "./message"
import Address from "./addresslist"
import Getmessage from "./getmessage"

export default class Alls extends React.Component{
    constructor(props){
        super(props);
        this.state={
            messageState:[]
            // me:{}
        }
        console.log(1);
        console.log(this.props.json);
    }
    getMessageState = (state) => {
            console.log(state.message);

           
        this.setState({
            messageState: state
        })
       
    }

render(){
    console.log(this.state.messageState.id)
    return(
        <Router>
        <div>
       <h1>chat</h1>
        <ul>
               <li><Link to="/">消息</Link></li>
               <li><Link to="/addresslist" >通讯录</Link></li>
          </ul>
          {/* {this.props.children} */}
    
         <Route  exact path="/" render={(props) => {
             return <Getmessage message={this.state.messageState} {...props} />
         }}>
        {/* <Message handleData={this.handleData.bind(this)} /> */}

          <Route path="/message" comonent={Message}/>
              
         </Route>

         <Route path="/addresslist" component={Address}>

         </Route>
         <Route json={this.state} path="/message" render={(props) => {
             return <Message getMessageState={this.getMessageState}  {...props} />
         }}/>
        
        </div>
        </Router>
    )
}




}