import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import cardData from '../data/card-data.json';



export default function Todo({posts, setPosts}) {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const [cardTitle, setCardTitle] = useState([]);

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [appliedCategory, setAppliedCategory] = useState('');

  const handlePost = () => {

    let newTitle = title || "Post from user";

    const newPost = {id: posts.length + 1, title: newTitle, text, category, image};


    setPosts([...posts, newPost]);
    setTitle('');
    setText('');
    setCategory('');
    setImage(null);
  };

  useEffect(
    () => {
      const titles = cardData.map(card => card.title);
      setCardTitle(titles);
      setFilteredPosts(posts);
    },
    [posts]
  );

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

        <div className='section'>
        <br></br><br></br>
          <h2 className='web_title'>Welcome to Our Community</h2>
        </div>

        <div className='section'>
          <div className='title-container'>
          <h3 >Posts</h3>
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
                cardTitle.map((title, index) => (
                  <option key={index} value={title}>{title}</option>
                ))
              }
            </select>

            <input className='inputs' type="post-title" id="title" placeholder="Enter title" 
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
      </div>


  );
}
