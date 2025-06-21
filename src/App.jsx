import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchData } from './redux/slice/blogReducer';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  const Card = ({ card }) => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.body}</p>
          <div className="card-tags">
            {card.tags.map((tag, index) => (
              <span key={index} className="card-tag">{tag}</span>
            ))}
          </div>
          <div className="card-reactions">
            <span>👍 {card.reactions.likes}</span>
            <span>👎 {card.reactions.dislikes}</span>
          </div>
          <div className="card-views">
            <span>👁️ {card.views}</span>
          </div>
          <div className="card-userId">
            <span>User ID: {card.userId}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1>Blog Posts</h1>
      <div className="container">
            {posts && posts.map((post) => <Card key={post.id} card={post} />)}
      </div>
    </>
  );
}

export default App;
