import React from "react"
import ReactDOM from "react-dom"
import {Layout, Input, Button, List, Avatar} from "antd"

import {connect} from "react-redux"
import "../common/index.css"
import {SaveOne, createThunkAction} from "../action/index";
const {Header, Content} = Layout

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []

        }
    }
    componentWillMount() {
        let dataSoure = this.props.location.query;
        console.log(dataSoure)
        for (let key in dataSoure) {
            console.log(key);
            this.setState({
                arr: [
                    {
                        key: dataSoure["arr"]["key"],
                        name: dataSoure["arr"]["name"],
                        signature: dataSoure["arr"]["signature"],
                        numb: dataSoure["arr"]["numb"],
                        chat: []
                    }
                ]
            })
        }

        //   this.props.dispatch(SaveOne(this.state.arr[0]))
    }
    componentDidMount() {
        console.log(this.props);
        const {dispatch, SaveOne} = this.props
        //  dispatch(SaveOne(this.state.arr[0]))
    }
    /////////////////
    enter = (e) => {

        if (e.keyCode == 13 || e.target.type === "button") {
            let lange = e.target.value;
            this
                .state
                .arr[0]
                .chat
                .push(lange);

            this
                .props
                .dispatch(SaveOne(this.state.arr[0]))
            var p = document.createElement("p");
            p.innerHTML = lange;
            var all = document.getElementById("all");
            all.appendChild(p);
            e.target.value = "";

        }
    }

    ////////////
    render() {

        console.log(this.state)
        return (
            <Layout>
                <Header
                    style={{
                    backgroundColor: 'white'
                }}>

                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.arr}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={< Avatar src = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={< a > {
                                this.state.arr[0].name
                            } </a>}
                                description={this.state.arr[0].signature}/>
                        </List.Item>
                    )}/>
                </Header>
                <Content>
                    <div
                        id="all"
                        style={{
                        background: '#fff',
                        padding: 24,
                        minHeight: 700
                    }}>Chat</div>
                    <div><Input
                        onKeyDown={this
                .enter
                .bind(this)}
                        placeholder="input text"/> {/* <Button onClick={
               this.enter.bind(this)
           }>发送</Button> */}

                    </div>
                </Content>
            </Layout>
        )
    }

}

export default connect(state => state[0])(Chat)