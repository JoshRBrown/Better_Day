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
      return post.category === 'Mental Health'
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
        <div>
          <span className='text-xs-left'>
          <Link className='btn btn-warning' to='/posts/new'>
          Add a Post
          </Link>
          </span>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
          <span className='text-xs-right'>
          <Link className='btn btn-warning' to='/index'>
            Index
          </Link>
          </span>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {posts: state.posts};
};

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);