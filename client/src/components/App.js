import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DocsPage from './pages/DocsPage';
import LinksPage from './pages/LinksPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={MainPage} />
          <Route path={process.env.PUBLIC_URL + "/docs"} exact component={DocsPage} />
          <Route path={process.env.PUBLIC_URL + "/links"} exact component={LinksPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;