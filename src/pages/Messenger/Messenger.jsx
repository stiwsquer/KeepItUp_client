import React, { useState, useEffect, useRef } from 'react';
import { Box, Input, TextField, Button, Typography } from '@mui/material';
import Conversation from '../../components/Conversation/Conversation';
import theme from '../../theme/index';
import Message from '../../components/Message/Message';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import { useUserContext } from '../../Context/UserContext';

export default function Messenger() {
  const [user] = useUserContext();
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollRef = useRef();

  const fetchConversations = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.GET,
      ENDPOINTS.CONVERSATION,
      CREDENTIALS.INCLUDE,
    );
    console.log(res.results);
    setConversations(res.results);
  };

  const fetchMessages = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.GET,
      ENDPOINTS.MESSAGE,
      CREDENTIALS.INCLUDE,
      currentChat.id,
    );
    console.log(res.results);
    setMessages(res.results);
  };

  const saveMessage = async () => {
    if (newMessage === '') return;
    const message = {
      conversation: currentChat.id,
      content: newMessage,
      coach: currentChat.coach.id,
      client: currentChat.client.id,
    };
    let res = await fetchData(
      message,
      HTTP_METHODS.POST,
      ENDPOINTS.MESSAGE,
      CREDENTIALS.INCLUDE,
    );
    res = await res.json();
    console.log(res);
    setMessages([...messages, res]);
    setNewMessage('');
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  const handleConversationClick = (chat) => {
    setCurrentChat(chat);
  };

  useEffect(() => {
    if (currentChat) fetchMessages();
  }, [currentChat]);

  const handleSubmit = () => {
    saveMessage();
  };

  useEffect(() => {
    console.log(scrollRef.current);
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box sx={{ flex: 3 }}>
        <Box sx={{ padding: '10px', height: '100%' }}>
          <Input
            placeholder="Search for conversations"
            fullWidth
            sx={{ padding: '10px 0px', mb: '10px' }}
          />
          {conversations.length > 0 &&
            conversations.map((conv) => (
              <Conversation
                handleConversationClick={handleConversationClick}
                conversation={conv}
                user={user}
              />
            ))}
        </Box>
      </Box>
      <Box sx={{ flex: 7 }}>
        <Box
          sx={{
            padding: '10px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {currentChat ? (
            <Box sx={{ height: '100%', overflowY: 'scroll', pr: '10px' }}>
              {messages &&
                messages.map((message) => (
                  <div ref={scrollRef}>
                    <Message
                      owner={user.role === message.owner}
                      message={message}
                      user={user}
                    />
                  </div>
                ))}
            </Box>
          ) : (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'rgba(0,0,0,0.2)',
              }}
            >
              <Typography variant="h3">
                Open a conversation to start a chat
              </Typography>
            </Box>
          )}

          <Box
            sx={{ mt: '5px', display: 'flex', justifyContent: 'space-between' }}
          >
            <TextField
              label="Start typing"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              multiline
              fullWidth
            />
            <Button
              onClick={handleSubmit}
              sx={{ mx: '5px' }}
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
