import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import AboutUs from './components/aboutus';
import History from './components/history';
import Home from './components/home';
import Gallery from './components/gallery';
import Video from './components/video';
import Workshop from './components/workshop';
import Year1 from "./components/year1";
import Year2 from "./components/year2";
import Year3 from "./components/year3";
import Year4 from "./components/year4";
import Year5 from "./components/year5";
import Year6 from "./components/year6";
import Year7 from "./components/year7";

class App extends Component {
    render() {
        return ( 
            <BrowserRouter basename=".">
                <div>       
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/aboutus" component={AboutUs}/>
                        <Route path="/history" component={History}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/video" component={Video}/>
                        <Route path="/workshop" component={Workshop}/>
                        <Route path="/year1" component={Year1}/>
                        <Route path="/year2" component={Year2}/>
                        <Route path="/year3" component={Year3}/>
                        <Route path="/year4" component={Year4}/>
                        <Route path="/year5" component={Year5}/>
                        <Route path="/year6" component={Year6}/>
                        <Route path="/year7" component={Year7}/>
                    </Switch>
                </div> 
            </BrowserRouter>
        );
    }
}

export default App;