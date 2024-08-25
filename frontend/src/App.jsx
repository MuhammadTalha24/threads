import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  };


  return (
    <>
      <div className='w-100 h-100' data-bs-theme={theme}>
        <div className="container">
          {/* Pass the toggleTheme function as a prop */}
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path='/:username' element={<UserPage />} />
            <Route path='/:username/post/:id' element={<PostPage />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
