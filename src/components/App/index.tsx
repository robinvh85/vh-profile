import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from 'browserHistory';
import 'assets/styles/App.scss';

import { HomePage, SamplesPage }  from 'pages';

const App = () => {
  return (
    <Fragment>
      <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/samples" exact component={SamplesPage} />
      </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
