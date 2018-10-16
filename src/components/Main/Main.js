import React, { Component } from 'react';
import App from '../../App';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import LocalStorage from '../LocalStorage/LocalStorage';
import Player from '../Players/Player';
import QuickNavTabs from '../QuickNavTabs/QuickNavTabs';
import SymbolsTextFields from '../SymbolsTextFields/SymbolsTextFields';
import { Switch, Route } from 'react-router-dom';

const lma = 1;

// Faster Components
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/layout" component={Layout} />
      <Route exact path="/localstorage" component={LocalStorage} />
      <Route exact path="/player" render={() => <Player name={lma} />} />
      <Route exact path="/quicknavicons" component={QuickNavTabs} />
      <Route exact path="/symbols" component={SymbolsTextFields} />
    </Switch>
  </main>
);

export default Main;
