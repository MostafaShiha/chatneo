import React from 'react';

function MessageItem({ message }) {
  return (
    <div className="message-item">
      <span>{message}</span>
    </div>
  );
}

export default MessageItem;
