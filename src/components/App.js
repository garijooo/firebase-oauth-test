import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import history from '../history';
import OAuth from './OAuth';
import Authorized from './Authorized';
class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={OAuth} />
                        <Route exact path="/authorized" component={Authorized} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;