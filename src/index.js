import React, { Component } from "react";
import ReactDOM from "react-dom";
import CardInput from "./CardInput.jsx";
import Options from "./Options.jsx";
import Table from "./Table.jsx";
import axios from "axios";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
            cards: [],
            cardNames: []
        }
	}

	setCards(cards) {
		this.setState({ cards: cards});
    }
    
    componentDidMount() {
        axios.get('/cards')
            .then((response) => {
                this.setState({ cardNames: response.data })
            });
    }

	render() {
		return (
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<div className="app">
						<div className="row section">
							<div className="col-md-6">
								<CardInput setCards={this.setCards.bind(this)} cards={this.state.cards} cardNames={this.state.cardNames} />
							</div>
							<div className="col-md-6">
								<Options />
							</div>
						</div>
						
						<Table cards={this.state.cards} />
					</div>
				</div>
			</div>
		)
	}
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;