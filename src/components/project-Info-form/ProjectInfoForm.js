import React, { Component } from "react";
import { Button, Divider, Input, message, Space, Steps } from "antd";

import { CSVReader } from "react-papaparse";
import "./ProjectInfoForm.css";

const { Step } = Steps;
const { TextArea } = Input;

class ProjectinfoForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleOnDrop = (data) => {
    data.splice(0, 1);
    const minMaxObj = findMinAndMax(data);
    const kpAsX = data.map((item) => +item.data[0]);
    const xAsY = data.map((item) => +item.data[1]);
    this.props.setValueForGraph(kpAsX, xAsY);
    this.props.setMinAndMax(minMaxObj);
    this.props.setShowGraph();
  };

  handleOnRemoveFile = () => {
    this.props.setHideGraph();
    this.props.setMinAndMax({
      minAndMax: {
        minX: null,
        maxX: null,
        minY: null,
        maxY: null,
        minZ: null,
        maxZ: null,
      },
    });
  };

  errorMsg = () => {
    message.error("Input fields are empty");
  };

  onFirstFinish = (e) => {
    e.preventDefault();
    const { pName, client, contractor } = this.props;
    const checkEmpty = !!pName && !!client && !!contractor;
    if (checkEmpty) {
      this.props.setCurrent();
    } else {
      this.errorMsg();
    }
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const { maxX, maxY, maxZ, minX, minY, minZ } = this.props.minAndMax;
    const checkEmpty = !!maxX && !!maxY && !!maxZ && !!minX && !!minY && !!minZ;
    if (checkEmpty) {
      this.props.handleIsResult();
    } else {
      this.errorMsg();
    }
  };

  firstStepForm = () => (
    <form className="form-container" onSubmit={this.onFirstFinish}>
      <div className="form-input-label">
        <label htmlFor="projectName">
          Project Name
          <Input
            type="text"
            id="projectName"
            name="projectName"
            value={this.props.pName}
            onChange={this.props.handleNameChange}
          />
          {this.props.errors.pName.length > 0 && (
            <span className="error">{this.props.errors.pName}</span>
          )}
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="pDescription">
          Project Description
          <TextArea
            rows={2}
            id="pDescription"
            name="pDescription"
            value={this.props.pDescription}
            onChange={this.props.handleDescriptionChange}
          />
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="client">
          Client
          <Input
            type="text"
            id="client"
            name="client"
            value={this.props.client}
            onChange={this.props.handleClientChange}
          />
          {this.props.errors.client.length > 0 && (
            <span className="error">{this.props.errors.client}</span>
          )}
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="contractor">
          Contractor
          <Input
            type="textarea"
            id="contractor"
            name="contractor"
            value={this.props.contractor}
            onChange={this.props.handleContractorChange}
          />
          {this.props.errors.contractor.length > 0 && (
            <span className="error">{this.props.errors.contractor}</span>
          )}
        </label>
      </div>
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </form>
  );

  secondStepForm = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      <CSVReader
        onDrop={this.handleOnDrop}
        onError={this.handleOnError}
        addRemoveButton
        onRemoveFile={this.handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
      <Divider />
      <div className="form-input-label">
        <label htmlFor="projectName">
          Project Name
          <Input
            type="text"
            id="projectName"
            name="projectName"
            value={this.props.pName}
            disabled={true}
          />
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="pDescription">
          Project Description
          <TextArea
            rows={2}
            id="pDescription"
            name="pDescription"
            value={this.props.pDescription}
            disabled={true}
          />
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="client">
          Client
          <Input
            type="text"
            id="client"
            name="client"
            value={this.props.client}
            disabled={true}
          />
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="contractor">
          Contractor
          <Input
            type="textarea"
            id="contractor"
            name="contractor"
            value={this.props.contractor}
            disabled={true}
          />
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="maxX">
          X-Max
          <Input
            type="number"
            id="maxX"
            name="maxX"
            value={this.props.minAndMax.maxX}
            onChange={this.props.handleMaxXChange}
          />
          {this.props.errors.maxX.length > 0 && (
            <span className="error">{this.props.errors.maxX}</span>
          )}
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="minX">
          X-Min
          <Input
            type="number"
            id="minX"
            name="minX"
            value={this.props.minAndMax.minX}
            onChange={this.props.handleMinXChange}
          />
          {this.props.errors.minX.length > 0 && (
            <span className="error">{this.props.errors.minX}</span>
          )}
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="maxY">
          Y-Max
          <Input
            type="number"
            id="maxY"
            name="maxY"
            value={this.props.minAndMax.maxY}
            onChange={this.props.handleMaxYChange}
          />
          {this.props.errors.maxY.length > 0 && (
            <span className="error">{this.props.errors.maxY}</span>
          )}
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="minY">
          Y-Min
          <Input
            type="number"
            id="minY"
            name="minY"
            value={this.props.minAndMax.minY}
            onChange={this.props.handleMinYChange}
          />
          {this.props.errors.minY.length > 0 && (
            <span className="error">{this.props.errors.minY}</span>
          )}
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="maxZ">
          Z-Max
          <Input
            type="number"
            id="maxZ"
            name="maxZ"
            value={this.props.minAndMax.maxZ}
            onChange={this.props.handleMaxZChange}
          />
          {this.props.errors.maxZ.length > 0 && (
            <span className="error">{this.props.errors.maxZ}</span>
          )}
        </label>
      </div>
      <div className="form-input-label">
        <label htmlFor="minZ">
          Z-Min
          <Input
            type="number"
            id="minZ"
            name="minZ"
            value={this.props.minAndMax.minZ}
            onChange={this.props.handleMinZChange}
          />
          {this.props.errors.minZ.length > 0 && (
            <span className="error">{this.props.errors.minZ}</span>
          )}
        </label>
      </div>
      <Space>
        <Button type="ghost" onClick={this.props.setPreviousCurrent}>
          Previous
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Space>
    </form>
  );

  formContent = () => {
    if (this.props.current === 0) {
      return this.firstStepForm();
    } else if (this.props.current === 1) {
      return this.secondStepForm();
    }
  };

  render() {
    return (
      <div className="setp-div">
        <Steps current={this.props.current}>
          <Step title="First" />
          <Step title="Second" />
        </Steps>
        <div className="steps-content">{this.formContent()}</div>
      </div>
    );
  }
}

/**
 * find minimum and maximum value
 * and return as object
 *
 * @param {array} arr
 */
const findMinAndMax = (arr) => {
  let min_x = +arr[0].data[1];
  let max_x = +arr[0].data[1];
  let min_y = +arr[0].data[2];
  let max_y = +arr[0].data[2];
  let min_z = +arr[0].data[3];
  let max_z = +arr[0].data[3];
  for (let index = 1; index < arr.length; index++) {
    const data = arr[index].data;
    let val_x = +data[1];
    let val_y = +data[2];
    let val_z = +data[3];
    min_x = val_x < min_x ? val_x : min_x;
    max_x = val_x > max_x ? val_x : max_x;
    min_y = val_y < min_y ? val_y : min_y;
    max_y = val_y > max_y ? val_y : max_y;
    min_z = val_z < min_z ? val_z : min_z;
    max_z = val_z > max_z ? val_z : max_z;
  }
  return {
    minX: min_x,
    maxX: max_x,
    minY: min_y,
    maxY: max_y,
    minZ: min_z,
    maxZ: max_z,
  };
};

export default ProjectinfoForm;
