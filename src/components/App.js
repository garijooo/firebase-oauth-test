import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import history from '../history'

import InitUser from './InitUser'
import Callback from './Callback'

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={InitUser} />
                        <Route exact path="/callback/" component={Callback} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;