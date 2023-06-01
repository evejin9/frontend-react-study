import React from 'react';

function PostListItem(props) {
  const { posts } = props;
    return (
      <>
        <h4>{posts}</h4>
        <p>2023년 1월 20일</p>
        <p>by goni.kim</p>
      </>
    )
}

export default PostListItem;