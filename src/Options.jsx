import React, { Component } from "react";

class Options extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <input type="radio" name="price-scheme" /> <label>Low</label>
                    </div>
                    <div className="col-md-4">
                        <input type="radio" name="price-scheme" /> <label>Medium</label>
                    </div>
                    <div className="col-md-4">
                        <input type="radio" name="price-scheme" /> <label>High</label>
                    </div>
                </div>          
            </div>
        )
    }
}

export default Options;