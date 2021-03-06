import React from 'react';
import Head from 'next/head';
import { LinkWithIpc } from '../helpers';

export default class extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render () {
    const title = `My ${this.props.id} blog post`;

    return (
      <React.Fragment>
        <Head>
          <title>{title} - Nextron (parameterized-routing)</title>
        </Head>
        <div>
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <hr/>
          <p>Back to <LinkWithIpc href="home"><a>home</a></LinkWithIpc></p>
        </div>
      </React.Fragment>
    );
  }
};
