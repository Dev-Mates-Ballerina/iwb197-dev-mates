import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Register.css';
import logo from '../../images/logo.png';
import Login from './Login';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use navigate for redirection

  // Fetch all registered users
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8081/register");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error);
    }
  };

  // Add a new user (register)
  const addUser = async (newUser) => {
    try {
      const response = await fetch("http://localhost:8081/register", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser),
      });
      const result = await response.json();
      console.log("User registered with ID:", result);
      fetchUsers(); // Refresh the list

      // Navigate to login after successful registration
      navigate('/login');
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    if (!formData.acceptTerms) {
      alert('Please accept the terms and conditions.');
      return;
    }
  
    addUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      cpassword: formData.confirmPassword
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='register'>
      
      <div className='register-img'>
        <img src={logo} alt="" width='400px' />
      </div>
      <div className="wrapper">
      {error && <p>{error.message}</p>}
      
      {/* Registered Users List */}
      
        <h2>Registration</h2>
        <form onSubmit={handleSubmit} >
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="policy">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            <h3>I accept all terms & conditions</h3>
          </div>
          <div className="input-box button">
            <input type="submit" value="Register Now" />
          </div>
          <div className="text">
            <h3>Already have an account? <a href="/login">Login now</a></h3>
          </div>
        </form>

      </div>

    </div>
  );
}

export default Register;
