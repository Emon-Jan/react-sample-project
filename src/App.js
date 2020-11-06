import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";

import { Layout } from "antd";
import Projectinfo from "./components/project-Info-form/ProjectInfoForm";
import Result from "./components/result/Result";
import Graph from "./components/graph-component/GraphComponent";

const { Header, Content } = Layout;

const initialState = {
  pName: "",
  pDescription: "",
  client: "",
  contractor: "",
  minAndMax: {
    minX: null,
    maxX: null,
    minY: null,
    maxY: null,
    minZ: null,
    maxZ: null,
  },
  errors: {
    pName: "",
    client: "",
    contractor: "",
    minX: "",
    maxX: "",
    minY: "",
    maxY: "",
    minZ: "",
    maxZ: "",
  },
  current: 0,
  isResult: false,
  showGraph: false,
  kpAsX: [],
  xAsY: [],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onResetState = () => {
    this.setState(initialState);
  };

  setValueForGraph = (x, y) => {
    this.setState({ kpAsX: x, xAsY: y });
  };

  setCurrent = () => {
    this.setState({ current: this.state.current + 1 });
  };

  setMinAndMax = (val) => {
    this.setState({ minAndMax: val });
  };

  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({
      pName: e.target.value,
    });
    if (e.target.value.trim().length < 1) {
      this.setState({
        errors: { ...this.state.errors, pName: "project name field is empty" },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, pName: "" },
      });
    }
  };

  handleDescriptionChange = (e) => {
    e.preventDefault();
    this.setState({ pDescription: e.target.value });
  };

  handleClientChange = (e) => {
    e.preventDefault();
    this.setState({ client: e.target.value });
    if (e.target.value.trim().length < 1) {
      this.setState({
        errors: { ...this.state.errors, client: "client field is empty" },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, client: "" },
      });
    }
  };

  handleContractorChange = (e) => {
    e.preventDefault();
    this.setState({ contractor: e.target.value });
    if (e.target.value.trim().length < 1) {
      this.setState({
        errors: {
          ...this.state.errors,
          contractor: "contractor field is empty",
        },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, contractor: "" },
      });
    }
  };

  handleIsResult = () => {
    this.setState({ isResult: true });
  };

  handleMaxXChange = (e) => {
    this.setState({
      minAndMax: { ...this.state.minAndMax, maxX: e.target.value },
    });
    if (e.target.value === "") {
      this.setState({
        errors: {
          ...this.state.errors,
          maxX: "maxX field is empty",
        },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, maxX: "" },
      });
    }
  };

  handleMinXChange = (e) => {
    this.setState({
      minAndMax: { ...this.state.minAndMax, minX: e.target.value },
    });
    if (e.target.value === "") {
      this.setState({
        errors: {
          ...this.state.errors,
          minX: "minX field is empty",
        },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, minX: "" },
      });
    }
  };

  handleMaxYChange = (e) => {
    this.setState({
      minAndMax: { ...this.state.minAndMax, maxY: e.target.value },
    });
    if (e.target.value === "") {
      this.setState({
        errors: {
          ...this.state.errors,
          maxY: "maxY field is empty",
        },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, maxY: "" },
      });
    }
  };

  handleMinYChange = (e) => {
    this.setState({
      minAndMax: { ...this.state.minAndMax, minY: e.target.value },
    });
    if (e.target.value === "") {
      this.setState({
        errors: {
          ...this.state.errors,
          minY: "minY field is empty",
        },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, minY: "" },
      });
    }
  };

  handleMaxZChange = (e) => {
    this.setState({
      minAndMax: { ...this.state.minAndMax, maxZ: e.target.value },
    });

    if (e.target.value === "") {
      this.setState({
        errors: {
          ...this.state.errors,
          maxZ: "maxZ field is empty",
        },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, maxZ: "" },
      });
    }
  };

  handleMinZChange = (e) => {
    this.setState({
      minAndMax: { ...this.state.minAndMax, minZ: e.target.value },
    });
    if (e.target.value === "") {
      this.setState({
        errors: {
          ...this.state.errors,
          minZ: "minZ field is empty",
        },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, minZ: "" },
      });
    }
  };

  setShowGraph = () => {
    this.setState({ showGraph: true });
  };

  setHideGraph = () => {
    this.setState({ showGraph: false });
  };

  setPreviousCurrent = () => {
    this.setState({ current: this.state.current - 1 });
  };

  render() {
    const projectInfoProps = {
      setShowGraph: this.setShowGraph,
      setHideGraph: this.setHideGraph,
      setValueForGraph: this.setValueForGraph,
      setCurrent: this.setCurrent,
      setMinAndMax: this.setMinAndMax,
      handleNameChange: this.handleNameChange,
      handleDescriptionChange: this.handleDescriptionChange,
      handleClientChange: this.handleClientChange,
      handleContractorChange: this.handleContractorChange,
      handleMaxXChange: this.handleMaxXChange,
      handleMinXChange: this.handleMinXChange,
      handleMaxYChange: this.handleMaxYChange,
      handleMinYChange: this.handleMinYChange,
      handleMaxZChange: this.handleMaxZChange,
      handleMinZChange: this.handleMinZChange,
      handleIsResult: this.handleIsResult,
      setPreviousCurrent: this.setPreviousCurrent,
    };

    return (
      <Layout className="layout-wrapper">
        <Layout>
          <Header className="site-layout-sub-header-background">
            ABC Engine
          </Header>
          <Content className="site-layout-content">
            <div className="site-layout-background">
              {!this.state.isResult && (
                <Projectinfo {...this.state} {...projectInfoProps} />
              )}
              {!this.state.isResult &&
                this.state.showGraph &&
                this.state.current === 1 && (
                  <div className="graph-container">
                    <Graph kpAsX={this.state.kpAsX} xAsY={this.state.xAsY} />
                  </div>
                )}
              {this.state.isResult && (
                <Result {...this.state} onResetState={this.onResetState} />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
