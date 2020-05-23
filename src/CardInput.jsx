import React, { Component } from "react";
import Autocomplete from "react-autocomplete";

class CardInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            set: "",
            rarity: ""
        }
    }

    handleClick() {
        let card = {
            name: this.state.name,
            set: this.state.set,
            rarity: this.state.rarity
        }

        let cards = this.props.cards;
        cards.push(card);

        this.props.setCards(cards);
    }

    render() {
        return (
            <div>
                <label>Card Name</label>
                <Autocomplete
                    getItemValue={(item) => item}
                    items={this.props.cardNames}
                    shouldItemRender={(card, value) => card.indexOf(value) !== -1}
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item}>
                            {item}
                        </div>
                    }
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    onSelect={(val) => this.setState({ name: val })}
                />

                <label>Set Name</label>
                <input type="text" className="form-control" value={this.state.set} onChange={(e) => this.setState({ set: e.target.value })} />

                <label>Rarity</label>
                <input type="text" className="form-control" value={this.state.rarity} onChange={(e) => this.setState({ rarity: e.target.value })} />

                <button className="btn btn-success float-right" id="add-button" onClick={this.handleClick.bind(this)}>Add to List</button>
            </div>            
        )
    }
}

export default CardInput;