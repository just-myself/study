import React from "react"
import ReactDom from "react-dom"
import {Link} from "react-router-dom"
import {List,Abatar,Button,Spin,Modal,Input,Form,Avatar} from "antd"
import InfiniteScroll from "react-infinite-scroller"
import "antd/dist/antd.css"
import reqwest from "reqwest"
import data from "./data"
import modal from "./demo"
import { Card, Icon } from 'antd';
const { Meta } = Card;



export default class Getmessage extends React.Component{
constructor(props){
    super(props);
    console.log(this.props);
    this.state={
        data:[
        {
        id:"",
        signature:"",
        name:"",
      text:[]
        },
    ]
        }
}



componentWillMount(){
    // this.setState({
    //     data: [
    //         {
    //             id:this.props.message.id,
    //            name:this.props.message.name,
    //            signature:this.props.message.signature,
    //            text:this.props.message.text
    //        }
    //     ]
    // })

    
    this.state.data.push({
        id:this.props.message.id,
        name:this.props.message.name,
        signature:this.props.message.signature,
        text:this.props.message.text
    })
    this.setState(this.state)
}

// const data = [
//   {
//     title: 'Ant Design Title 1',
//   },
//   {
//     title: 'Ant Design Title 2',
//   },
//   {
//     title: 'Ant Design Title 3',
//   },
//   {
//     title: 'Ant Design Title 4',
//   },
// ];

componentDidMount(){
    this.state.data.shift();
    this.setState(this.state)
}
render(){
console.log(this.state)
    console.log(this.props.message)
    return (

   
        <List
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.signature}</a>}
              description={item.name}
            />
            <div style={{right:400}}>{item.text}</div>
          </List.Item>
        )}
      />



    )
}
 
}


















//发送时，建立一个数据库copy一份数据 给getmessage，
//getmessage通过接受的数组渲染




