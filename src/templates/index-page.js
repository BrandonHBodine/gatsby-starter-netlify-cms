import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/leadville-painting.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: '#00da8ce0',
              border: '5px solid #6d04f9',
              borderRadius: '0.5rem',
              color: 'black',
              padding: '1rem',
            }}
          >
            Posts and stuff
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
