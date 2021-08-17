import React, { Component } from 'react';
import { getDesserts } from './fetch-utils.js';
// import { Link } from 'react-router-dom';

class DessertList extends Component {
    state = { desserts: [] };
    componentDidMount = async () => {
        const data = await getDesserts();
        this.setState({ cartoons: data });
    };
     render() { 
        return (
            <section className="dessert-list">
                {this.state.desserts.map((c) => (
                    <div className="dessert-card">
                        <h2>
                            {/* <Link to={`/cartoons/${dessert.id}`}>{dessert.name}</Link> */}
                        </h2>
                    </div>
                ))}
            </section>
        );
    }
}
 
export default DessertList;