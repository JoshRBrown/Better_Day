import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signIn} from '../actions';

class SignIn extends Component {

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


  onSubmit(values) {
    this.props.signIn(values, () => {
      this.props.history.push('/index');
    })
  }

  render() {
    return (
    <div className='container'>
      <div className='title-holder'>
        <h1 className='title'>BETTER DAY</h1>
      </div>
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field name='userName' component={this.renderField} label='Username' />
        </div>
        <div>
          <Field name='password' component={this.renderField} label='Password' />
        </div>
        <button type='submit' className='btn btn-warning'>Log In</button>
        {/* <Link className='btn' to='/posts'>Log In</Link> */}
      </form>
    </div>
    )
  }
}

function validate(values) {
  const errors = {};
  if(!values.userName || values.userName.length > 20) {
    errors.userName = 'Please enter a username shorter than 20 characters'
  }
  if(!values.password || values.password.length < 6 || values.password.length > 15) {
    errors.password = 'Please enter a password between 6 and 15 characters'
  }

  return errors;
}


SignIn = reduxForm({
  validate,
  form: 'user'
})(
  connect(null, {signIn})(SignIn)
);

export default SignIn