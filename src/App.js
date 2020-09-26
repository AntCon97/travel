import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import tours from './pages/tours/tours.jsx';
import contact from './pages/contact/contact.jsx';
import about from './pages/about/about.jsx';
import HomePage from './pages/home/homepage.jsx';
import Header from './component/header/header.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={about} />
          <Route exact path='/contact' component={contact} />
          <Route exact path='/tours' component={tours} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
