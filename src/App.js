import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import withContext from './Context';

// Import Components
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Navigation';
import Gallery from './Components/Gallery';
import Page404 from './Components/Page404';
import Pagination from './Components/Pagination';

// Link to context
const SearchFormWithContext = withContext(SearchForm);
const NavigationWithContext = withContext(Navigation);
const GalleryWithContext = withContext(Gallery);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <SearchFormWithContext />
          <NavigationWithContext />

          <Switch>
            <Route exact path='(/|/gallery)' render={() => <Redirect to='/gallery/nature' />} />
            <Route exact path='/gallery/:input' component={GalleryWithContext} />
            <Route component={Page404} />
          </Switch>

          <Pagination />
        </div>
      </BrowserRouter>
    );
  }
}
