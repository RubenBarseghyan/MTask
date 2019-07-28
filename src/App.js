import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from './navigation/Navigation';
import StoryComponent from './components/StoryComponent';
import ItemComponent from './components/ItemComponent';


function App() {
  return (
      <Router>
          <div>
              <Navigation/>
              <div className="container">
                  <Switch>
                      <Route path="/news/:page?" component={StoryComponent} />
                      <Route path="/item/:item" component={ItemComponent} />
                      <Route
                          path="*"
                          render={() => {
                              return <Redirect to="/news/1" />;
                          }}/>
                  </Switch>
              </div>

          </div>

      </Router>
  );
}

export default App;
