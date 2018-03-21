import React from "react"
import {Layout, Modal, Input} from "antd";
import Lists from "../components/lists"
import Message from "./message"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {DeleteOne, SaveOne} from '../action'
const {Content} = Layout;

const mapStateToProps = (state) => {

    return {data: state};
}

const mapDispatchToProps = (dispatch) => {

    return {
        Delete: bindActionCreators(DeleteOne, dispatch)

    }

}

const TotalList = connect(mapStateToProps, mapDispatchToProps)(Lists);

// const {dispatch}=this.props;

class LinkMan extends React.Component {

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
                    <TotalList/>

                </Content>
            </Layout>

        )
    }

}
// LinkMan=connect()(LinkMan)
export default LinkMan