import React from "react"
import ReactDOM from "react-dom"
import { Card, Icon, Avatar,Input } from 'antd';

const { Meta } = Card;
export default class Meassge extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:[],
            id:[],
            name:'',
            signature:'',
            look:""
        }
    }

// all(){
//     console.logthis.state
// }

    componentWillMount(){
      let dataSoure=this.props.location.query;
    for ( let key in dataSoure ){
        this.setState({
           id:dataSoure["id"],
            name:dataSoure["name"],
            signature:dataSoure["signature"]
        })
    }

    }
    componentDidMount(){
   
    }
    componentDidUpdate(){
        this.props.handleEmail;
    }
    all=()=>{
        return this.state;
    }
    handleChange=()=>{
        let a=this.refs.a.value;
        console.log(a);
    }
    enter = (e) => {
        if (e.keyCode == 13) {
            let lange = e.target.value;
            this.state.text.push(lange);
            const dataLength = [...this.state.text];
            const lang = dataLength.pop();
            this.setState({
                look: lang
            })
            //  this.setState({
            //      look:this.state.text.length
            //  })
            var p = document.createElement("p");
            p.innerHTML = lange;
            var all = document.getElementById("all");
            all.appendChild(p);
            e.target.value = "";
            this.props.getMessageState(this.state)
        }
    }
    render(){

        return (
    <div>     
        <Meta
           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={this.state.signature}
          description={this.state.name}
         />
           <div id="all" style={{height:200,width:200,borderSize:1, }}>
           {/* <p>
            { 
            
                this.state.text.map((item) =>{
                    console.log(item)
                     return {item}
                     
                }  ) 
            }
           </p> */}
           </div>



            <Input  style={{width:200}} ref="a"  onKeyDown={this.enter.bind(this) }/>
       </div>
        )
    }
}