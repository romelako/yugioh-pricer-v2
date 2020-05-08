import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      card: ""
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }

  componentWillMount() {
    let self = this
    axios.get('/cards')
      .then(function (response) {
        // handle success
        console.log(response.data);

        self.setState({ cards: response.data })
      })
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

/*
<App>
  <InputForm />
  <Pricing />
  <Table>
    <Total />
    <ActualTable>
      <Row></Row>
    </ActualTable>
  </Table>
</App>
*/