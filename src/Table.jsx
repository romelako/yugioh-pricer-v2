import React, { Component } from "react";

class Table extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Card Name</th>
                            <th>Card Set</th>
                            <th>Rarity</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.cards.map( card => (
                            <tr>
                                <td>{card.name}</td>
                                <td>{card.set}</td>
                                <td>{card.rarity}</td>
                                <td>1</td>
                                <td>$1.00</td>
                                <td>$1.00</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;