import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchData } from './redux/slice/blogReducer';
import { Link } from 'react-router-dom';
function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const loading = useSelector((state) => state.blog.loading);
  const error = useSelector((state) => state.blog.error);

  useEffect(() => {
    if(posts.length===0){
         dispatch(fetchData());
         console.log('Data received !');
    }  
  }, [dispatch,posts.length]);

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
            <span>👍 {card?.reactions?.likes}</span>
            <span>👎 {card?.reactions?.dislikes}</span>
          </div>
          <div className="card-views">
            <span>👁️ {card?.views}</span>
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
      <div className='button-box'> 
            <h2>Want to create a new Post ??✅</h2>
            <button><Link className='link' to='/createBlogPost'>Click here </Link></button>
      </div>
      
      <div className="container">
            {posts && posts.map((post) => <Card key={post.id} card={post} />)}
      </div>
    </>
  );
}

export default App;
