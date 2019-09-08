import './style.scss';
import React, { Fragment } from 'react';
import Posts from './Posts';
import Form from './PostForm';

export default function index() {
  return (
    <Fragment>
      <Form />
      <Posts />
    </Fragment>
  );
}
