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
import Recovery from './components/recovery';
import Fitness from './components/fitness';
import Mindfull from './components/mindfull';
import Sleep from './components/sleep';
import Reading from './components/reading';
import Writing from './components/writing';
import MentalHealth from './components/mental_health';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div className='container'>
      <Switch>
        <Route path='/index' component={TableOfContents} />
        <Route path='/journal' component={Journal} />
        <Route path='/posts/new' component={PostsNew} />
        <Route path='/posts/recovery' component={Recovery} />
        <Route path='/posts/fitness' component={Fitness} />
        <Route path='/posts/mindfulness' component={Mindfull} />
        <Route path='/posts/sleep' component={Sleep} />
        <Route path='/posts/reading' component={Reading} />
        <Route path='/posts/writing' component={Writing} />
        <Route path='/posts/mentalhealth' component={MentalHealth} />
        <Route path='/posts/:id' component={PostsShow} />
        <Route path='/posts' component={PostsIndex} />
        <Route path='/' component={SignIn} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
