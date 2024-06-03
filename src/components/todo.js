import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';

import cardData from '../data/card-data.json';

export default function Todo() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appliedCategory, setAppliedCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const db = getDatabase();
  const postsRef = ref(db, 'posts');

  useEffect(() => {

    const offFunction = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      let loadedPosts = [];
      if (data) {
        loadedPosts = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
      }
      setPosts(loadedPosts);
      setFilteredPosts(loadedPosts);
      setLoading(false);
    });

    return () => offFunction();  
  }, []);

  useEffect(() => {
    let filtered;
    if (appliedCategory === '') {
      filtered = posts;
    } else {
      filtered = posts.filter(post => post.category === appliedCategory);
    }
    setFilteredPosts(filtered);
  }, [appliedCategory, posts]);

  const handlePost = () => {
    const newPostRef = push(postsRef);
    set(newPostRef, {
      title,
      text,
      category,

    }).then(() => {
      setTitle('');
      setText('');
      setCategory('');
      setImage(null);
    }).catch(error => {
      console.error("Failed to add new post: ", error);
    });
  };

  const handleCategory = (currCategory) => {
    setAppliedCategory(currCategory);
  };

  return (
    <div className='container'>
      {loading && <p>Loading posts...</p>}
      {!loading && (
        <>
          <div className='section'>
            <h2 className='web_title'>Welcome to Our Community</h2>
          </div>

          <div className='section'>
            <h3>Posts</h3>
            {filteredPosts.map((post) => (
              <div className='post-header' key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <h4>{post.title}</h4>
                </Link>
                {post.category && (
                  <small className='post-category' onClick={() => handleCategory(post.category)}>
                    {post.category}
                  </small>
                )}
              </div>
            ))}
          </div>

          <div className='section'>
            <h3>Write a post</h3>
            <div className="post-container">
              <select name="category" id="post-category" className='selection' 
              value={category}
              onChange={(event) => setCategory(event.target.value)}>
                <option value="">Select Category</option>
                {cardData.map((card, index) => (
                  <option key={index} value={card.title}>{card.title}</option>
                ))}
              </select>

              <input className='inputs' type="text" id="title" placeholder="Enter title" 
              value={title}
              onChange={(event) => setTitle(event.target.value)}/>
              <textarea className='text' id="post-text" placeholder="Write your post here"
              value={text}
              onChange={(event) => setText(event.target.value)}></textarea>
              <input className='inputs' type="file" id="post-image" accept="image/*" 
              onChange={(event) => setImage(event.target.files[0])}/>
              <button id="post-button" className="btn btn-lg btn-primary" onClick={handlePost}>Post</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
