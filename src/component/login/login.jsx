import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../../firebase';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("User logged in:", userCredential.user);
      navigate('/');
    } catch (error) {
      console.error("Error logging in:", error);
      switch (error.code) {
        case 'auth/invalid-email':
          alert('Invalid email format.');
          break;
        case 'auth/user-disabled':
          alert('User account is disabled.');
          break;
        case 'auth/user-not-found':
          alert('User not found.');
          break;
        case 'auth/wrong-password':
          alert('Incorrect password.');
          break;
        default:
          alert('Error logging in. Please try again.');
      }
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input style={{ marginBottom: '18px'}} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <h6>Click here to Sign Up</h6>
        <Link to="/registration">Sign Up</Link>
        <button style={{width: '9rem', height: '3rem', borderRadius: '8px'}} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
