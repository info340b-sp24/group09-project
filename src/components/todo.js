import React, { useState } from 'react'
import { Link } from 'react-router-dom';



export default function Todo({posts, setPosts}) {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handlePost = () => {

    const newPost = {id: posts.length + 1, title, text, category, image};

    setPosts([...posts, newPost]);
    setTitle('');
    setText('');
    setCategory('');
    setImage(null);
  };

  return (

      <div className='container'>

        <div className='section'>
          <h1>Welcome to Our Community</h1>
        </div>

        <div className='section'>
          <h2>Posts</h2>

          {posts.map(post => (
            <div key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
          ))}
        </div>
        
        <div className='section'>
        <br></br><br></br>
          <h2>Write a post</h2>
          <div className="post-container">
            <select name="category" id="post-category" className='selection' 
            value={category}
            onChange={(event) => setCategory(event.target.value)}>
              <option value="Experience">Evaluation</option>
              <option value="Question">Question</option>
              <option value="Moment">Moment</option>
            </select>

            <input className='inputs' type="post-title" id="title" placeholder="Enter title" 
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
      </div>


  );
}
