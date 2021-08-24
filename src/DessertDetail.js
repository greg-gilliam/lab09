import React, { Component } from 'react';
import { getDessert, getTypes, updateDessert } from './fetch-utils.js';
import classNames from 'classnames';

class DessertDetail extends Component {
    state = { 
        types: [],
        id: 0,
        name: '',
        icing: 'false',
        type_id: 0,
        message: '',
        error: false,
     };

     componentDidMount = async () => {
         const dessertId = this.props.match.params.id;
         const dessertData = await getDessert(dessertId);
         const types = await getTypes();
         this.setState({ ...dessertData, types });
     };
    getDessertId = () => {
        const dessertObject = this.state.desserts.find(
            (dessert)=>dessert.name === this.state.network);
        return dessertObject.id;
    }
    handleClick = async (e)=>{
        e.preventDefault();
        const dessertData = {
            id: this.state.id,
            name: this.state.name,
            type_id: this.state.type_id
        }
        const data = await updateDessert(dessertData);
        if(data.error){
            this.setState({message: data.error, error: true})
        } else {
            this.setState({message: 'Dessert Updated!', error: false});
            setTimeout(() =>{
                this.setState({ message: '' })
            }, 2000);
        }
    };
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
                    value={this.state.type}
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
                <button onClick={this.handleClick}>Update Dessert</button>
            </form>
        </>
    );
}
}

export default DessertDetail;
