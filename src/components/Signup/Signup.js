import React, { Component, Fragment } from 'react';
import isEmpty from 'lodash/isEmpty';
import { push } from 'react-router-redirect';
import { connect } from 'react-redux';
import { signup } from '../../actions/authActions';
import './style.scss';

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    };
  }

  componentWillReceiveProps({ error, data }) {
    console.log('error', error);
    if (error) this.setState({ errorMessage: error.data.error.message });
    if (data) push('/posts');
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = () => {
    event.preventDefault();
    const {
      props: { signup: signup_ }
    } = this;
    const {
      state: { email, password, firstName, lastName }
    } = this;
    signup_({ email, firstName, lastName, password });
  };

  render() {
    const {
      state: { errorMessage }
    } = this;
    return (
      <Fragment>
        <div
          className="alert"
          style={{ display: `${!isEmpty(errorMessage) ? 'block' : 'none'}` }}>
          {errorMessage}
        </div>
        <form className="form signup-form" onSubmit={this.submit}>
          <div className="form__title">Signup</div>
          <div className="form-body">
            <input
              required
              type="email"
              name="email"
              onChange={this.onChange}
              placeholder="Email"
            />
            <input
              required
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={this.onChange}
            />
            <input
              required
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={this.onChange}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
            />
            <button type="submit">Register</button>
            <p className="message">
              Already registered ?{' '}
              <a href="/login" id="go-to-signin">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ auth: { data, error } }) => ({ data, error });

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
