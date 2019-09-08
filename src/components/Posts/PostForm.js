import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <p className="posts-text">
          On this app, we learn how the redux flow works. Submit a post and you
          will see how it will be added on the list
        </p>
        <form onSubmit={this.onSubmit} className="posts-form">
          <input
            onChange={this.onChange}
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Title"
          />
          <br />
          <div>
            <textarea
              onChange={this.onChange}
              name="body"
              value={this.state.body}
              placeholder="Body"
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
