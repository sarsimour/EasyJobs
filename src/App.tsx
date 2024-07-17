import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import AccountPage from './pages/AccountPage';
import ResourcesPage from './pages/ResourcesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/resources" component={ResourcesPage} />
      </Switch>
    </Router>
  );
};

export default App;
