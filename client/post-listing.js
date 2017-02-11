import React, { Component } from 'react';
import Post from './post';

class PostListing extends Component {

  render() {
    return (
      <div>
        <h1>instagram</h1>
        <div className="photo-grid">
          { this.props.posts.map((post, i) => <Post />) }
        </div>
      </div>
    );
  }
}

export default PostListing;