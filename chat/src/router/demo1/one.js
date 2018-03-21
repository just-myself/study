import React from "react";
import ReactDOM from "react-dom"

import {BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom"
import App from "./../../App"
import Home from "./home"
import About from "./about"
import Topics from "./topics"
import Aticle from "./aticle"

 export default class RouteMap extends React.Component{
    
  render(){
      return (

     
    <Router  >


      <div>
      <ul>
            <li> <Link to="/home">home</Link></li> 
            <li> <Link to="/about"> About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
      </ul>

    {/* <Route exact path="/" component={App}/>  */}
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    <Route path="/topics/aticle" component={Aticle}  />

</div>
    </Router>
  
      
    
   
        
  
  
      )

  }
 



}

 


//    const Home=()=>{
//      <div>
//        <h2>
//          Home
//        </h2>
//      </div>
//    }   ;
//    const About=()=>{
//      <div><h2>About</h2></div>
//    };
// const Topics=({match})=>(
//    <div>
//           <h2>Topics</h2>
//    <ul>
//      <li><Link to={`${match.url}/rendering`}>Readering with React</Link></li>
//      <li><Link to={`${match.url}/components`}>Components</Link></li>
//      <li><Link to={`${match.url}/props-v-state`}>Props v.State</Link></li>
     
//    </ul>

//    <Route path={`${match.url}/:topicId`} component={Topics} />>
//      <Route exact path={match.url} render={()=>{
//        <h3>Please select a topic</h3>
//      }}/>

//    </div>
  


//     );
//     const Topic =({match})=>(
//       <div>
//         <h3>{match.params.topicId}</h3>
//       </div>
//     )

