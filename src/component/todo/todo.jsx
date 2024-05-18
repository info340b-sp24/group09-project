import React from 'react'
import './todo.css';
import { Link } from 'react-router-dom';
export default function Todo() {
  return (
    <div>
      <br></br><br></br>
      <h1>Welcome to Our Community</h1>
  <div>
    <h2>Posts</h2>
    <Link to={"/post"}>There is a post</Link>
  </div>
  <div>
    <h2>Write a post</h2>
    <div class="post-container">
      <select name="category" id="post-category" className='selection'>
        <option value="Experience">Evaluation</option>
        <option value="Question">Question</option>
        <option value="Moment">Moment</option>
      </select>
      <input className='inputs' type="post-title" id="title" placeholder="Enter title" />
      <textarea className='text' id="post-text" placeholder="Write your post here"></textarea>
      <input className='inputs' type="file" id="post-image" accept="image/*" />
      <button id="post-buttom" class="btn btn-lg btn-primary">Post</button>
      </div>
  </div>



    </div>
  );
}
