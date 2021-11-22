import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Conversation from '../Conversation/Conversation';
import { useUserContext } from '../../Context/UserContext';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';

export default function Conversations({
  currentChat,
  handleConversationClick,
}) {
  const [user] = useUserContext();
  const [conversations, setConversations] = useState([]);

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

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <Box sx={{ padding: '10px', height: '100%' }}>
      {/* <Input
        placeholder="Search for conversations"
        fullWidth
        sx={{ padding: '10px 0px', mb: '10px' }}
      /> */}
      {conversations.length > 0 &&
        conversations.map((conv) => (
          <Conversation
            handleConversationClick={handleConversationClick}
            conversation={conv}
            currentChat={currentChat}
            user={user}
          />
        ))}
    </Box>
  );
}
