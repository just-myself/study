import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router , Route,Link} from "react-router-dom"


export default class Topics extends React.Component{

 render(){
   return (
      <div><h3>topics</h3>
       <Link to ="/topics/aticle">aticle</Link>

      </div>



   )



 }



}