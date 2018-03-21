import React from "react"
//import ReactDOM from "react-dom"

import {withRouter, Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect, context} from "react-redux"
import {AddOne} from '../action'
import {Table, Input, Popconfirm, Button, Modal} from 'antd';
//import index from "../reducer/index"

const EditableCell = ({editable, value, onChange}) => (

  <div>
    {editable
      ? <Input
          style={{
          margin: '-5px 0'
        }}
          defaultValue={value}
          onChange={e => onChange(e.target.value)}/>
      : value
}
  </div>
);
const EditableCells = ({editable, value, onChange, record}) => (

  <div>
    {editable
      ? <Input
          style={{
          margin: '-5px 0'
        }}
          defaultValue={value}
          onChange={e => onChange(e.target.value)}/>
      : <Link
        to={{
        pathname: "/chat",
        query: {
          arr: record
        }
      }}>{value}</Link>
}
  </div>
);

class Lists extends React.Component {
  constructor(props, context) {
    super(props, context);
    // console.log(this.state, "1111111111111", this.context.getState());
    this.state = {
      visible: false,
      temporary: {},
      datas: []
    }
    this.columns = [
      {
        key: 'name',
        title: '姓名',
        dataIndex: 'name',
        width: '20%',
        render: (text, record) => this.renderColumn(text, record, 'name')
      }, {
        key: 'signature',
        title: '昵称',
        dataIndex: 'signature',
        width: '30%',
        render: (text, record) => this.renderColumns(text, record, 'signature')
      }, {
        key: 'numb',
        title: '电话',
        dataIndex: 'numb',
        width: '20%',
        render: (text, record) => this.renderColumns(text, record, 'numb')
      }, {
        key: "opeartion",
        title: '操作',
        dataIndex: 'operation',
        width: '30%',
        render: (text, record, index) => {
          let editable;
          if (this.state.key === record.key && this.state.bool === true) {
            editable = this.state.bool;
          } else if (this.state.key !== record.key) {
            editable = false;
          }
          return (
            <div className="editable-row-operations">

              {editable

                ? <span>
                    <a onClick={() => this.save(record.key)}>Save</a>
                    <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                      <a>Cancel</a>
                    </Popconfirm>
                  </span>
                : <a onClick={() => this.edit(record.key)}>Edit</a>
}

              {this.props.data.length > 0
                ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                    <a >Delete</a>
                  </Popconfirm>

                )
                : null
}
            </div>
          );

        }
      }
    ];
  }

  ///////////////////


  edit(key) {

    const target = this
      .props
      .data
      .filter(item => key === item.key)[0];
    if (target) {
      let id = target.key;
      let No = target.editable = true;

      this.setState({key: id, bool: No});

    }
    console.log(this.state);
  }

  renderColumns(text, record, column, index) {
    let bool
    // console.log(this.state.key==record.key,this.state.bool==false)
    // if(this.state.bool==true){
    if (this.state.key === record.key && this.state.bool === true) {
      bool = this.state.bool;

    }
    return (<EditableCell
      editable={bool}
      value={text}
      onChange={value => this.handleChange(value, record.key, column)}/>);
  }
  renderColumn(text, record, column, index) {
    let bool
    // console.log(this.state.key==record.key,this.state.bool==false)
    // if(this.state.bool==true){
    if (this.state.key === record.key && this.state.bool === true) {
      bool = this.state.bool;

    }
    return (<EditableCells
      record={record}
      editable={bool}
      value={text}
      onChange={value => this.handleChange(value, record.key, column)}/>);
  }
  heads = (text, record, column) => {
    console.log(column)
  }
  handleChange(value, key, column) {
    console.log("二", key, "三", column, "一", value)
    const target = this
      .props
      .data
      .filter(item => key === item.key)[0];
    if (target) {
      console.log(target)
      target[column] = value;
      console.log(target[column]);

      //     if(column==='name'){     }     if(column==='signature'){ console.log(2) }
      // if(column=='numb'){     console.log(3) } this.setState({ data: newData });
    }
  }

  save(key) {

    const target = this
      .props
      .data
      .filter(item => key === item.key)[0];
    const {dispatch} = this.props;

    if (target) {
      let id = target.key;
      target.editable = null;
      this.setState({key: id, bool: false})

    }

    // console.log(target) state.splice(3,1,{ewrewr})

  }
  cancel(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {

      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
      this.setState({key: key, bool: false})
      this.setState({data: newData});
    }
  }

  onDelete = (key) => {

    console.log(this.props)
    const {dispatch} = this.props

    this
      .props
      .Delete(key);

    // dispatch(this.props.Delete(key));
  }
  ///////////////////////

  showModal = (dispatch) => {
    this.setState({visible: true});
  }
  handleOk = () => {
    var name = document
      .getElementById("name1")
      .value;
    var numb = document
      .getElementById("numb")
      .value;
    var signature = document
      .getElementById("address")
      .value;

    this
      .props
      .dispatch(AddOne(name, numb, signature))
    this.setState({visible: false});
  }

  handleCancel = (e) => {
    this.setState({visible: false});
  }
  //////////////////////

  render() {

    const columns = this.columns;
    let data = this.props.data;
   
    console.log(data);
    let datas = []
    for (let key in data) {
      datas.push({key: data[key].key, name: data[key].name, numb: data[key].numb, signature: data[key].signature})
    }

    return (
      <div>
        <Button
          style={{
          left: '85%'
        }}
          type="primary"
          id="add"
          onClick={this.showModal}>添加</Button>
        <Table bordered dataSource={datas} columns={columns}/>
        <Modal
          title="添加"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <label>
            姓名:</label><Input id="name1"/>
          <label>
            电话:</label><Input id="numb"/>
          <label>
            昵称:</label><Input id="address"/>

        </Modal>

        <div></div>
      </div>
    );
  }

}
Lists.PropTypes = {
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  dataSource: PropTypes.object.isRequired

}

export default connect()(Lists);