import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import SignIn from './components/sign_in';
import TableOfContents from './components/table_of_contents';
import Journal from './components/my_journal';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div className='container'>
      <Switch>
        <Route path='/index' component={TableOfContents} />
        <Route path='/journal' component={Journal} />
        <Route path='/posts/new' component={PostsNew} />
        <Route path='/posts/:id' component={PostsShow} />
        <Route path='/posts' component={PostsIndex} />
        <Route path='/' component={SignIn} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
