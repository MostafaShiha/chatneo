import React from 'react';
import './styles/index.css';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <AuthForm />
      <Profile />
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default App;
