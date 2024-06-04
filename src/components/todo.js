import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import cardData from '../data/card-data.json';

export default function Todo() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appliedCategory, setAppliedCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

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
    let uploadPromise;

    if (image) {
        const storage = getStorage();
        const imageRef = storageRef(storage, `images/${image.name}`);
        uploadPromise = uploadBytes(imageRef, image).then(snapshot => {
            return getDownloadURL(snapshot.ref);
        });
    } else {
        uploadPromise = Promise.resolve(null);
    }

    uploadPromise.then(imageUrl => {
        set(newPostRef, {
            title: title || "Post from user",
            text,
            category,
            image: imageUrl 
        }).then(() => {
            setTitle('');
            setText('');
            setCategory('');
            setImage(null);
        }).catch(error => {
            console.error("Failed to add new post: ", error);
        });
    });
  };

  const handleCategory = (currCategory) => {
    if (currCategory === appliedCategory) {

      setFilteredPosts(posts);

      setAppliedCategory('');
      return;
    }


    const filteredPosts = posts.filter(post => post.category === currCategory);

  setFilteredPosts(filteredPosts);
  setAppliedCategory(currCategory);
  };

  return (
    <div className='container'>
      {loading && <p>Loading posts...</p>}
      {!loading && (
        <>
          <div className='section'>
            <br></br><br></br>
            <h2 className='web_title'>Welcome to Our Community</h2>
          </div>

          <div className='section'>
            <div className='title-container'>
              <h3>Posts</h3>
              <p className='filter-message'>Click the category to filter the posts!</p>
            </div>
            {filteredPosts.map((post) => (
              <div className='post-header' key={post.id}>
                <Link to={`/post/${post.id}`}><h5>{post.title}</h5></Link>
                {post.category && (
                <small className='post-category' onClick={() => handleCategory(post.category)}>{post.category}</small>
                )}
              </div>
            ))}
          </div>
          
          <div className='section'>
            <br></br><br></br>
            <h3>Write a post</h3>
            <div className="post-container">
              <select name="category" id="post-category" className='selection' 
              value={category}
              onChange={(event) => setCategory(event.target.value)}>
                <option value="" disabled>Evaluation</option>
                {
                  cardData.map((card, index) => (
                    <option key={index} value={card.title}>{card.title}</option>
                  ))
                }
              </select>

              <input className='inputs' type="text" id="title" placeholder="Enter title" 
              value={title}
              onChange={(event) => setTitle(event.target.value)}/>
              <textarea className='text' id="post-text" placeholder="Write your post here"
              value={text}
              onChange={(event) => setText(event.target.value)}></textarea>
              <p className='message'>Option: One picture is allowed per post</p>
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
