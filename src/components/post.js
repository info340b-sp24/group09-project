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
          <section className="section-spacing">
            <h2 className='h2'>{post.title}</h2>
            <p className='para'>{post.text}</p>
          </section>

          <section className="section-spacing">
            <textarea placeholder='Reply to this post' value={reply} 
              onChange={(event) => setReply(event.target.value)} />
            <button id="reply-buttom" className="btn btn-lg btn-primary" 
              onClick={handleReply}>Reply</button>
          </section>

          <section>
            <h3>Replies</h3>
            {replies.map(reply => (
              <div key={reply.id}>{reply.text}</div>
            ))}
          </section>
        </>
      )}

      {!post && (
        <p>Loading post...</p>
      )}
    </div>
  );
}
