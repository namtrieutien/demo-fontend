import React from 'react';
import { connect } from 'react-redux';

import {getPostList as getPostListAction} from './action';

class App extends React.Component{ 
  render() {
    const {posts, load} = this.props.posts;

    if(load) {
      return (
        <h1>Data is loading from API...</h1>
      )
    }
  
    return (
        <div>
            <h1>App render...</h1>
            <table>
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                </tr>
                {
                  posts.map((post) => (
                    <tr>
                      <th>{post.id}</th>
                      <th>{post.title}</th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
      );
  }

  componentDidMount() {
    this.props.getListPost();
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListPost: (params) => dispatch(getPostListAction(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);