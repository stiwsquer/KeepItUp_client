import React, { useEffect, useState } from 'react';
import { Avatar, Card, CardHeader } from '@mui/material';
import theme from '../../theme/index';
import { ROLES } from '../../services/apiCalls';

export default function Conversation({
  conversation,
  handleConversationClick,
  user,
  currentChat,
}) {
  const [convUser, setConvUser] = useState(conversation.client);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const currentUser =
      user.role === ROLES.COACH ? conversation.client : conversation.coach;
    setConvUser(currentUser);
  }, []);

  useEffect(() => {
    if (currentChat && currentChat.id === conversation.id) setSelected(true);
    else setSelected(false);
  }, [currentChat]);

  return (
    <Card
      sx={{
        border: 'none',
        boxShadow: 'none',
        cursor: 'pointer',
        bgcolor: selected
          ? theme.palette.background.default
          : theme.palette.background.paper,
        ':hover': {
          bgcolor: 'lightgray',
        },
      }}
      onClick={() => handleConversationClick(conversation)}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgba(86, 100, 210,1)' }}>
            {convUser.firstName[0]}
          </Avatar>
        }
        sx={{ flex: 1 }}
        title={`${convUser.firstName} ${convUser.lastName}`}
      />
    </Card>
  );
}
