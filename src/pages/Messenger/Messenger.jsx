import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { io } from 'socket.io-client';
import theme from '../../theme/index';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
  ROLES,
} from '../../services/apiCalls';
import { useUserContext } from '../../Context/UserContext';
import Conversations from '../../components/Conversations/Conversations';
import MessengerForm from '../../components/MessengerForm/MessengerForm';
import OpenConversationMessage from '../../components/OpenConversationMessage/OpenConversationMessage';
import Messages from '../../components/Messages/Messages';

export default function Messenger() {
  const [user] = useUserContext();
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();

  const fetchMessages = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.GET,
      ENDPOINTS.MESSAGE,
      CREDENTIALS.INCLUDE,
      currentChat.id,
    );
    setMessages(res.results);
  };

  const emitNewMessage = () => {
    const receiverId =
      currentChat.coach.id === user.id
        ? currentChat.client.id
        : currentChat.coach.id;
    socket.current.emit('sendMessage', {
      senderId: user.id,
      receiverId,
      text: newMessage,
    });
  };

  const saveMessage = async () => {
    if (newMessage === '') return;
    const message = {
      conversation: currentChat.id,
      content: newMessage,
      coach: currentChat.coach.id,
      client: currentChat.client.id,
    };

    emitNewMessage();

    let res = await fetchData(
      message,
      HTTP_METHODS.POST,
      ENDPOINTS.MESSAGE,
      CREDENTIALS.INCLUDE,
    );
    res = await res.json();
    setMessages((prev) => [...prev, res]);
    setNewMessage('');
  };

  useEffect(() => {
    if (arrivalMessage) setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    try {
      if (currentChat) fetchMessages();
    } catch (e) {
      console.log(e);
    }
  }, [currentChat]);

  useEffect(() => {
    socket.current = io('ws://localhost:3002');
    socket.current.emit('addUser', user.id);
    socket.current.on('getMessage', (data) => {
      let owner;
      if (user.role === ROLES.COACH) {
        owner = ROLES.CLIENT;
      } else {
        owner = ROLES.COACH;
      }

      setArrivalMessage({
        content: data.text,
        owner,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit('addUser', user.id);
  }, [user]);

  const handleConversationClick = (chat) => {
    setCurrentChat(chat);
  };

  const handleSubmit = () => {
    saveMessage();
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        bgcolor: theme.palette.background.paper,
        justifyContent: 'center',
      }}
    >
      <Box sx={{ flex: 3, maxWidth: '300px' }}>
        <Conversations
          currentChat={currentChat}
          handleConversationClick={handleConversationClick}
        />
      </Box>
      <Box
        sx={{
          flex: 7,
          boxShadow: '-1px 0px 10px rgba(0,0,0,0.2)',
          maxWidth: '1000px',
        }}
      >
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
            <Messages messages={messages} user={user} />
          ) : (
            <OpenConversationMessage />
          )}

          <MessengerForm
            handleSubmit={handleSubmit}
            setNewMessage={setNewMessage}
            newMessage={newMessage}
          />
        </Box>
      </Box>
    </Box>
  );
}
