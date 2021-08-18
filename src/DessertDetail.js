import React, { Component } from 'react';
import { getDessert, getTypes } from './fetch-utils.js';

class DessertDetail extends Component {
    state = { 
        id: 0,
        name: '',
        icing: '',
        type_id: 0,
     };

     componentDidMount = async () => {
         const dessertId = this.props.match.params.id;
         const dessertData = await getDessert(dessertId);
         const types = await getTypes();
         this.setState({ ...dessertData, types });
     };
    render() { 
        return (
        <>
            <h1>{this.state.name}</h1>
            <form id="update-dessert">
                <div className="form-group">
                    <label>Dessert: </label>
                    <input 
                        onChange={(e) => {
                            this.setState({ name: e.target.value });
                        }}
                        type="text"
                        value={this.state.name}></input>
                </div>
                <div className="form-group">
                    <label>Type: </label>
                    <select>
                        {this.state.types.map((type) => {
                            return (
                                <option value={type.name}>{type.name}</option>
                            );
                        })}
                    </select>
                </div>
            </form>
        </>
    );
}
}

export default DessertDetail;
