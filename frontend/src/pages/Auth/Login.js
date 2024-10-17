import React, { useState, useEffect } from 'react';
import '../../css/Login.css';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection


  // Fetch all registered users from the database
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8081/register");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

  console.log('Form Data:', formData);  // Check form data
  console.log('Users:', users);  // Check the users array
  
  const user = users.find((u) => u.email === formData.email && u.password === formData.password);
  
  if (user) {
    // Authentication successful
    setIsAuthenticated(true);
    setLoginError(null);
    navigate('/');
  } else {
    // Authentication failed
    setIsAuthenticated(false);
    setLoginError("Invalid email or password. Please try again.");
  }
  };

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='login'>
      <div className='login-img'>
        <img src={logo} alt="" width='400px' />
      </div>

      <div className='wrapper'>
        <h2>Login</h2>

        {error && <p>{error.message}</p>}

        {isAuthenticated ? (
          <p>Welcome back!</p>
        ) : (
          <form onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box button">
              <input type="Submit" value="Login" />
            </div>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            <div className="text">
              <h3>Don't have an account? <a href="/register">Register now</a></h3>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
