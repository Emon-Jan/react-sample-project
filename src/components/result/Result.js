import React, { Component } from "react";
import { Button, Popconfirm, Space, Table } from "antd";
import generatePDF from "../generatePDF/GeneratePDF";

const { Column } = Table;

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "1",
          pName: this.props.pName,
          pDescription: this.props.pDescription,
          client: this.props.client,
          contractor: this.props.contractor,
          maxX: this.props.minAndMax.maxX,
          minX: this.props.minAndMax.minX,
          maxY: this.props.minAndMax.maxY,
          minY: this.props.minAndMax.minY,
          maxZ: this.props.minAndMax.maxZ,
          minZ: this.props.minAndMax.minZ,
        },
      ],
    };
  }

  confirm = (e) => {
    e.preventDefault();
    this.props.onResetState();
  };

  cancel = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Space>
          <Button
            type="primary"
            onClick={() => generatePDF(this.state.data[0])}
          >
            Download Result as PDF
          </Button>
          <Popconfirm
            title="Do you want to reset all?"
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type="dashed">Reset</Button>
          </Popconfirm>
        </Space>
        <Table
          className="table-class"
          dataSource={this.state.data}
          pagination={false}
          bordered
        >
          <Column title="Project Name" dataIndex="pName" key="pName" />
          <Column
            title="Project Description"
            dataIndex="pDescription"
            key="pDescription"
          />
          <Column title="Client" dataIndex="client" key="client" />
          <Column title="Contractor" dataIndex="contractor" key="contractor" />
          <Column title="X-Max" dataIndex="maxX" key="maxX" />
          <Column title="X-Min" dataIndex="minX" key="minX" />
          <Column title="Y-Max" dataIndex="maxY" key="maxY" />
          <Column title="Y-Min" dataIndex="minY" key="minY" />
          <Column title="Z-Max" dataIndex="maxZ" key="maxZ" />
          <Column title="Z-Min" dataIndex="minZ" key="minZ" />
        </Table>
      </div>
    );
  }
}
export default Result;
