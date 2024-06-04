import React, { useState } from 'react';
import './todo.css';
import { Link } from 'react-router-dom';

export default function Todo() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    category: 'Experience',
    title: '',
    text: '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'image') {
      setForm(prevForm => ({
        ...prevForm,
        image: files[0]
      }));
    } else {
      setForm(prevForm => ({
        ...prevForm,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts(prevPosts => [...prevPosts, form]);
    setForm({
      category: 'Experience',
      title: '',
      text: '',
      image: null
    });
  };

  return (
    <div className='container'>
      <div className='section'>
        <h1>Welcome to Our Community</h1>
      </div>

      <div className='section'>
        <h2>Posts</h2>
        <Link to={"/post"}>There is a post</Link>
      </div>
      
      <div className='section'>
        <h2>Write a post</h2>
        <div className="post-container">
          <select
            name="category"
            id="post-category"
            className='selection'
            value={form.category}
            onChange={handleChange}
          >
            <option value="Experience">Evaluation</option>
            <option value="Question">Question</option>
            <option value="Moment">Moment</option>
          </select>

          <input
            className='inputs'
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            value={form.title}
            onChange={handleChange}
          />
          <textarea
            className='text'
            id="post-text"
            name="text"
            placeholder="Write your post here"
            value={form.text}
            onChange={handleChange}
          ></textarea>
          <input
            className='inputs'
            type="file"
            id="post-image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <button
            id="post-button"
            className="btn btn-lg btn-primary"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>

      <div className='section'>
        <h2>Community Posts</h2>
        <div className="posts-list">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              <h3>{post.title}</h3>
              <p><strong>Category:</strong> {post.category}</p>
              <p>{post.text}</p>
              {post.image && (
                <img
                  src={URL.createObjectURL(post.image)}
                  alt="Post"
                  className="post-image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
