import React from "react"
//import ReactDOM from "react-dom"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import LinkMan from "../container/linkMan"
import Message from "../container/message"
import Chat from "../container/chat"
import {context} from "react-redux"
// import index from "../container/index"
import {Icon, Layout} from "antd";
import 'antd/dist/antd.css'
import "../common/index.css"
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
// const Option = Select.Option;
const {Header, Content, Footer} = Layout;

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(this.context, "23423432423", this.props);
        this.state = {
            tabPosition: 'bottom'
        }

    }
    jump1 = () => { < LinkMan id = "link" />
        // document.getElementById("main").appendChild("#link");

    }
    jump2 = () => { < Message id = "mes" />
}
render() {
    return (
        <Router>
            <Layout>
            <Switch>
                        {/* <Route path="/" component={LinkMan}/> */}
                        <Route path="/linkMan" component={LinkMan}/>
                        <Route path="/message" component={Message}/>
                        <Route path="/chat" component={Chat}/>
                    </Switch>
                <Footer style={{
                    textAlign: 'center'
                }}>
                    <Tabs tabPosition={this.state.tabPosition}>

                        <TabPane
                            tab={< Link to = "/message" > <Icon type="message"/>消息 </Link>}
                            key="2"></TabPane>

                        <TabPane tab={< Link to = "/linkMan" > <Icon type="team"/>联系人 </Link>} key="1"></TabPane>

                    </Tabs>

                
                </Footer>
            </Layout>

        </Router>

    )
}
}
