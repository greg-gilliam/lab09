import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DessertDetail from './DessertDetail.js';
import DessertList from './DessertList.js';
import Create from './Create.js';
import Header from './Header.js';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={DessertList} />
                        <Route path="/desserts/:id" component={DessertDetail} />
                        <Route path="/create" component={Create} />
                    </Switch>
                </BrowserRouter>
            </>
         );
    }
}
 
export default App;