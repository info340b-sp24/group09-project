import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Post({posts}) {

  const {id} = useParams();
  const [post, setPost] = useState(null);

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
      {post && (
        <>
        <br></br><br></br>
        <section>
          <h2 className='post-title'>{post.title}</h2>
          <br></br>
          <p className='para'>{post.text}</p>

          {post.image && <img className='post-img' src={URL.createObjectURL(post.image)} alt= "image used for posts"/>}
          
        </section>
        </>
        )
      }
      
      

      <section>
        <textarea className='text' placeholder='Reply to this post' value={reply} 
        onChange={(event) => setReply(event.target.value)}/>

        <button id="reply-buttom" className="btn btn-lg btn-primary" 
        onClick={handleReply}>Reply</button>
      </section>

      <section className='reply-section'>
        <h3 className='replies-header'>Replies</h3>
        {replies.map(reply => (
          <div className='reply' key={reply.id}>{reply.text}</div>
        )
      )}
      </section>
    </div>
  )
}
