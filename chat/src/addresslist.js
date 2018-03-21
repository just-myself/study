import React from "react"
import ReactDom from "react-dom"
import {Link} from "react-router-dom"
import {List,Abatar,Button,Spin,Modal,Input,Form,} from "antd"
import InfiniteScroll from "react-infinite-scroller"
import "antd/dist/antd.css"
import reqwest from "reqwest"
import data from "./data"
import modal from "./demo"
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

 const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
 
 var datas=
    {
    name:"",
    numb:"",
    signature:""}
export default class Address extends React.Component {
   constructor(props){
       super(props);
  this.state = {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      visible: false,
      index:"",
        data: [
        { 
          id:1,
       name:"小小",
       numb:"131333333",
       signature :"一号",
  
    },
    {
      id:2,
      name:"小明",
    numb:"132444444444",
    signature :"二号",
    },
    {     
      id:3,
      name:"李雷",
    numb:"1335555555555",
    signature :"三号",
    },
    {     
      id:4,
      name:"韩梅梅",
    numb:"13666666666",
    signature :"四号",
    }
      ],
  
    }
} 
    change(e){
        this.setState({
            visible: true,
          });
    }
  delete(index){
        // console.log(e.target.parentNode.parentNode.removeChild(e.target.parentNode));
   
        let dataSource=[...this.state.data]
        dataSource.splice(index,1);
  
        this.setState({data: dataSource});
      }
 
 showModal = (index) => {
console.log(typeof index);
 this.setState({index:index});
      this.setState({
        visible: true,
      });
    }
    handleOk = (e) => {
      var name1=document.getElementById("name1").value;
      var numb=document.getElementById("numb").value;
      var address=document.getElementById("address").value;

console.log(typeof this.state.index);
   
      if ( typeof this.state.index =="object" ){
      this.datas={
        name:name1,
        numb:numb,
        signature:address
    }
      this.state.data.push(this.datas);
     }
    else if(typeof this.state.index =="number"){
    this.state.data[this.state.index]={
        name:name1,
        numb:numb,
        signature:address
      };
 
     
       this.setState({
     index:null
         })
  }
  document.getElementById("name1").value="",
  document.getElementById("numb").value="";
  document.getElementById("address").value="";
  this.setState({
    visible: false,
  });
}
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }
    render() {
      // console.log(this.state.data.id)
      return (
          <div>
       {/* <ul>
           {
               this.state.data.map((item,index)=>{
                 return <li key={index}>
                  <div><Link to={
                    {
                      pathname:"/message",
                      query:{id:`${item.id}`,
                         signature:`${item.signature}`
                         }
                    }
                  }   ><span>昵称:{item.signature}</span><span>姓名:{item.name}</span></Link><span>电话:{item.numb}</span></div>
                  <input type="button" value="删除" onClick={this.delete.bind(this,index)} />
                   <input type="button" value="编辑" name={index} id="change" onClick={this.showModal.bind(this,index)} /> 
                  </li>
                        })
                      }
       </ul> */}
         <InfiniteScroll
          initialLoad={false}
          pageStart={0}>
          <List style={{width:600,left:300}}
            dataSource={this.state.data}
            renderItem={(item,index) => (
              <List.Item key={item.id}actions={[<Button onClick={this.delete.bind(this,index)}>删除</Button>,<Button onClick={this.showModal.bind(this,index)}>编辑</Button>]} >
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={< Link to ={
                    {
                      pathname:"/message",
                      query:{"id":`${item.id}`,
                         "signature":`${item.signature}`,
                         "name":`${item.name}`
                         }
                    }
                  } >{item.signature}</Link>}
                  description={item.name}
                />
                <div>{item.numb}</div>
              </List.Item>
            )}
          >
          </List>
        </InfiniteScroll>    
     <div>
        <Button style={{left:300}} type="primary"  id="add" onClick={this.showModal.bind(this)}>添加</Button>
        <Modal
        title="添加"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      
      >
      <label> 姓名:</label><Input id="name1" />
      <label> 电话:</label><Input id="numb" />
      <label> 昵称:</label><Input  id="address"/>

      </Modal>
      </div>
              </div>
   
      );
    }
  }

  
