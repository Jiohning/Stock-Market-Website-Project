import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <Router>
      <div className="app">
      <Container>
        <Switch>
          <Route path="/list">
            <ListPage />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Container>
      </div>
    </Router>
  );
}

export default App;
