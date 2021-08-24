import React, { Component } from 'react';
import { getTypes, createDessert } from './fetch-utils.js';
import classNames from 'classnames';

// const URL = 'https://aqueous-coast-92629.herokuapp.com/desserts';

class Create extends Component {
    state = {
            types: [],
            name: '',
            icing: false,
            type_id: 0,
            message: '',
            error: false,
         };
         componentDidMount = async () => {
            const types = await getTypes();
            this.setState({ types });
        };

        getDessertId = () => {
            const dessertObject = this.state.desserts.find(
                (dessert)=>dessert.name === this.state.desserts);
            return dessertObject.id;
        };

        handleClick = async (e) =>{
            e.preventDefault();
            const dessertData = {
                name: this.state.name,
                icing: this.state.icing,
                type_id: this.state.type_id
            }
            const data = await createDessert(dessertData);
            if (data.error){
                this.setState({ message: data.error, error: true });
            } else {
                this.props.history.push('/');
            }
        }
    render() { 
        return (
                <>
                {this.state.message && (
                    <div className={classNames({
                        message: true, 
                        error: this.state.error, 
                        success: !this.state.error,
                    })}
                    >
                        {this.state.message}
                        </div>
                )}
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
                            <select 
                            value={this.state.type_id}
                            onChange={(e)=>{
                                this.setState({ type: e.target.value });
                            }}
                        >    
                                {this.state.types.map((type) => {
                                    return (
                                        <option key={type.name} value={type.name}>{type.name}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <button onClick={this.handleClick}>Create Dessert</button>
                    </form>
                </>
            );
    }
}
 
export default Create;