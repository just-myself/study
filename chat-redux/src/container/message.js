import React from "react"
import ReactDOM from "react-dom"
import {connect} from "react-redux"
import Msg from "./msg"

import {Layout, List, Avatar} from "antd"
const {Content} = Layout

const mapStateToProps = (state) => {

    return {data: state};
}

const Msgs = connect(mapStateToProps)(Msg);

class Message extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {
        const {dispatch} = this.props;
        console.log(this.props);
        return (
            <Layout>

                <Content style={{
                    height: 800
                }}>
                    <Msgs/>

                </Content>
            </Layout>

        )
    }

}
// LinkMan=connect()(LinkMan)
export default Message