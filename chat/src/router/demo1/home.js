import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router , Route,Link} from "react-router-dom"


export default class Home extends React.Component{

 render(){
   return (
      <div>
               <ul>
            <li> <Link to="/">home</Link></li> 
            <li> <Link to="/about"> About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
      </ul> 
    
      </div>



   )



 }



}