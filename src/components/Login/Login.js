import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { push } from 'react-router-redirect';
import { login } from '../../actions/authActions';
import './style.scss';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
      email: '',
      password: ''
    };
  }

  componentWillReceiveProps({ error, data }) {
    if (error) this.setState({ errorMessage: error.data.error.message });
    if (data) push('/posts');
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = () => {
    event.preventDefault();
    const {
      props: { login: login_ }
    } = this;
    const {
      state: { email, password }
    } = this;
    login_({ email, password });
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
        <form className="form login-form" onSubmit={this.submit}>
          <div className="form__title">Login</div>
          <div className="form-body">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onChange}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
            />
            <button type="submit">Login</button>
            <p className="message">
              Not registered ?{' '}
              <a href="/" id="go-to-Signup">
                Signup
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
  { login }
)(Login);
