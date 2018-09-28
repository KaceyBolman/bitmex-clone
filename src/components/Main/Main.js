import React, {Component} from 'react';
import App from '../../App';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Player from '../Players/Player';
import QuickNavTabs from '../QuickNavTabs/QuickNavTabs';
import {Switch, Route} from 'react-router-dom';

const lma = 1;

// Faster Components
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/layout" component={Layout} />
      <Route exact path="/player" render={() => <Player name={lma} />} />
      <Route exact path="/quicknavicons" component={QuickNavTabs} />
    </Switch>
  </main>
);

export default Main;
