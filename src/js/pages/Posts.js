import React, { useEffect, useState } from 'react';
import CardPost from '../components/CardPost';
import Loading from '../components/Misc/Loading';

const Posts = () => {
  const [state, setState] = useState({
    posts: [],
    loading: true,
  });
  useEffect(() => {
    (async () => {
      const posts = await (
        await fetch('https://jsonplaceholder.typicode.com/posts')
      ).json();
      setState({ posts, loading: false });
    })();
  }, []);
  if (state.loading) return <Loading />;
  return (
    <div className='container'>
      <h1>Posts</h1>
      <div className='posts'>
        {state.posts.map((post) => (
          <CardPost post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
