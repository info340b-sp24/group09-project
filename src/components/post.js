import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Post({posts}) {

  const {id} = useParams();
  const [post, setPost] = useState();

  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);

  useEffect(
    () => {
      const findPost = posts && posts.find(post => post.id === parseInt(id));
      setPost(findPost);
    }, 
    [id, posts]
  );

  const handleReply = () => {
    const newReply = {
      id: replies.length,
      text: reply
    };

    setReplies([...replies, newReply]);
    setReply('');
  
  };


  return (
    <div className='container'>
      <br></br>
      
        <section className="section-spacing">
          <h2 className='h2'>{post.title}</h2>
          <p className='para'>{post.text}</p>
        </section>
      
      
      

      <section className="section-spacing">
        <textarea placeholder='Reply to this post' value={reply} 
        onChange={(event) => setReply(event.target.value)}/>

        <button id="reply-buttom" className="btn btn-lg btn-primary" 
        onClick={handleReply}>Reply</button>
      </section>

      <section>
        <h3>Replies</h3>
        {replies.map(reply => (
          <div key={reply.id}>{reply.text}</div>
        )
      )}
      </section>
    </div>
  )
}
