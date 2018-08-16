import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';
import _ from 'lodash';


class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    let fixedArr = _.filter(this.props.posts, post => {
      return post.user_id === this.props.user.undefined
    })
    console.log(fixedArr)
    return _.map(fixedArr, post => {
      return (
        <Link to={`/posts/${post.post_id}`} key={post.id}>
          <li className='list-group-item' key={post.post_id}>
            {post.title}
          </li>
        </Link>
      )
    })
  }

  render () {
    return (
      <div>
        <div className='text-xs-left'>
          <Link className='btn btn-primary' to='/posts/new'>
          Add a Post
          </Link>
        </div>
        <h3>Entries</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
        <div className='text-xs-left'>
          <Link className='btn btn-primary' to='/index'>
            Index
          </Link>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  console.log(state)
  return {
    posts: state.posts,
    user: state.user
  };
};

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);