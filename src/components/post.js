import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue,} from 'firebase/database';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const postRef = ref(db, `posts/${id}`);

    const offFunction = onValue(postRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPost({ id: snapshot.key, ...data });
      } else {
        setPost(null);
      }
    });

    return () => offFunction();  
  }, [id]);

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

          {post.image && <img className='post-img' src={post.image} alt="image used for posts" />}

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
      {!post && (
        <p>Loading post...</p>
      )}
    </div>
  );
};