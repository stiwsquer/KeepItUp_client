import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Message from '../Message/Message';

export default function Messages({ messages, user }) {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  return (
    <Box
      sx={{
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        pr: '10px',
      }}
    >
      {messages &&
        messages.map((message) => (
          <div ref={scrollRef}>
            <Message owner={user.role === message.owner} message={message} />
          </div>
        ))}
    </Box>
  );
}
