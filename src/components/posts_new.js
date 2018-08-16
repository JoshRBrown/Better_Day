import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';


class PostsNew extends Component {

  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  renderContent(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

    return (
      <div className={className}>
      <label>{field.label}</label>
      <textarea
        className='form-control'
        type="text"
        {...field.input}
      />
      <div className='text-help'>
        {field.meta.touched ? field.meta.error : ''}
      </div>
      </div>
    )
  }

  onSubmit(values) {
    let user = this.props.user.undefined;
    let newValues = {...values, ['user_id']: user}
    this.props.createPost(newValues, () => {
      this.props.history.push('/index');
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field 
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field 
          label='Content'
          name='content'
          component={this.renderContent}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link className='btn btn-danger' to='/'>Cancel</Link>
      </form>
    );
  };
};

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Please enter a title'
  }
  if(!values.categories) {
    errors.categories = 'Please enter a category'
  }
  if(!values.content) {
    errors.content = 'Please enter some content'
  }

  return errors;
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default reduxForm({
  validate, 
  form: 'PostsNewform'
})(
  connect(mapStateToProps, {createPost})(PostsNew)
);