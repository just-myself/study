import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {Layout, List, Avatar} from "antd"
const {Header,Content} = Layout

class Msg extends React.Component {

  render() {
    console.log(this.props)
    let data = this.props.data;

    console.log(data);

    let datas = []
    for (let key in data) {
      const chat = data[key].chat;
      if (data[key].chat.length !== 0) {
        datas.push({key: data[key].key, name: data[key].name, numb: data[key].numb, signature: data[key].signature})
      }
    }
    console.log(datas);
    return (

      <Layout>
          <Header
                    style={{
                    backgroundColor: 'white'
                }}>
       WELCOME
</Header>
        <Content>
          <List
            itemLayout="horizontal"
            dataSource={datas}
            renderItem={item => (
            <div className="all">
              <List.Item >
                <List.Item.Meta
                  avatar={< Avatar src = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={< a > {
                  item.name
                } </a>}
                  description={data[item.key].chat}/>
              </List.Item>
            </div>
          )}/>
        </Content>
      </Layout>
    )
  }

}
export default connect()(Msg)