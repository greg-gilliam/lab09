import React, { Component } from 'react';
import { getDesserts } from './fetch-utils.js';
import { Link } from 'react-router-dom';

class DessertList extends Component {
    state = { desserts: [] };
    componentDidMount = async () => {
        const data = await getDesserts();
        this.setState({ desserts: data });
    };
     render() { 
        return (
            <section className="dessert-list">
                {this.state.desserts.map((c) => (
                    <div className="dessert-card">
                        <h2>
                            <Link key={`/desserts`} to={`/desserts/${c.id}`}>{c.name}</Link>
                        </h2>
                    </div>
                ))}
            </section>
        );
    }
}
 
export default DessertList;