import React from 'react';
import { format } from 'timeago.js';
import { Box, Typography } from '@mui/material';
import theme from '../../theme';
// import { ROLES } from '../../services/apiCalls';

export default function Message({ message, owner }) {
  // const [messageUser, setMessageUser] = useState(message.client);

  // useEffect(() => {
  //   const currentUser =
  //     message.owner !== ROLES.COACH ? message.client : message.coach;
  //   setMessageUser(currentUser);
  // }, []);

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: '20px' }}>
        <Box sx={{ alignSelf: owner ? 'flex-end' : 'flex-start' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {/* <Avatar
              sx={{
                width: '32px',
                height: '32px',
                mr: -1,
                mt: -1,
                zIndex: 0,
                bgcolor: owner && theme.palette.primary.main,
              }}
            >
              {messageUser.firstName ? messageUser.firstName[0] : null}
            </Avatar> */}
            <Typography
              variant="body1"
              // color={owner ? 'textPrimary' : 'textSecondary'}
              sx={{
                zIndex: 0,
                maxWidth: '50vw',
                p: '10px',
                borderRadius: '20px',
                color: owner ? 'black' : theme.palette.primary.contrastText,
                backgroundColor: owner
                  ? theme.palette.background.default
                  : theme.palette.primary.main,
                display: 'flex',
              }}
            >
              {message.content}
            </Typography>
          </Box>
          <Typography
            sx={{ display: 'inline-block', mt: 1 }}
            variant="caption"
            color="initial"
          >
            {format(message.createdAt)}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
