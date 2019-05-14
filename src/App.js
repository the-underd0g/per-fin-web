import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import { Layout} from './components/common/Layout';
import {NavigationBar} from "./components/common/NavigationBar";

class App extends Component {
    render(){
        return (
            <React.Fragment>
                <NavigationBar/>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/*// <Route exact path="/reports" component={Income} />*/}
                            {/*// <Route exact path="/about" component={Home} />*/}
                            {/*// <Route exact path="/contact" component={contact} />*/}
                            {/*// <Route component={NoMatch} />*/}
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
