import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class GraphComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: this.props.kpAsX,
      datasets: [
        {
          label: "ABC-ENGINE",
          fill: false,
          lineTension: 1,
          backgroundColor: "rgba(255, 179, 92, 0.80)",
          borderColor: "rgba(255, 179, 92, 0.80)",
          borderWidth: 1,
          data: this.props.xAsY,
        },
      ],
    };
  }

  render() {
    return (
      <Line
        data={this.state}
        options={{
          title: {
            display: true,
            text: "Kp vs. X",
            fontSize: 15,
          },
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "X",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Kp",
                },
              },
            ],
          },
        }}
      />
    );
  }
}

export default GraphComponent;
