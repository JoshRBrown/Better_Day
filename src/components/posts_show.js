import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const id = this.props.match.params.id;
    this.props.deletePost(id, () => {
      this.props.history.push('/index');
    });
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>
    }

    return (
      <div className='container'>
        <Link to='/index' className='btn btn-warning link' >Back to Index</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}  
        >
          Delete
        </button>
        <div className='centered-title'>
          <h3 className=''>{post.title}</h3>
          <h6>Category:  {post.category}</h6>
          <p>{post.content}</p>
        </div>
      </div>
    );
  };
};

function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);