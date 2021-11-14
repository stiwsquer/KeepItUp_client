import React, { useState, useEffect } from 'react';
import { CardContent, Typography, Avatar, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import { useClientContext } from '../../Context/ClientContext';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import SearchWorkouts from '../SearchWorkouts/SearchWorkouts';
import { useCalendarContext } from '../../Context/CalendarContext';
import { useAlertContext } from '../../Context/AlertContext';
import ExpandCard from '../ExpandCard/ExpandCard';
import ClientCalendars from '../ClientCalendars/ClientCalendars';
import MyCardActions from '../MyCardActions/MyCardActions';

export default function ClientCard({ id, firstName, lastName, email }) {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [deleteClient, setDeleteClient] = useState(false);
  const [, toggleClient] = useClientContext();
  const [expanded, setExpanded] = useState(false);
  const [calendarData, handleCalendarData] = useCalendarContext();
  const [, handleAlertData] = useAlertContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const toggleConfirmModalOpen = () => setOpenConfirmModal(!openConfirmModal);

  const handleFetchDelete = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.PATCH,
      ENDPOINTS.CLIENT,
      CREDENTIALS.INCLUDE,
      email,
      null,
      null,
      true,
    );
    console.log(res);

    if (res.status === 200) {
      handleAlertData({
        severity: 'success',
        displayAlert: true,
        message: 'Successfully deleted client',
        timeout: 2000,
      });
      toggleClient();
    } else {
      handleAlertData({
        severity: 'error',
        displayAlert: true,
        message: 'Something went wrong',
        timeout: 2000,
      });
    }
  };

  const [data, setData] = useState([]);
  const handleFetchCalendarData = async () => {
    try {
      const res = await fetchData(
        null,
        HTTP_METHODS.GET,
        ENDPOINTS.CALENDAR,
        CREDENTIALS.INCLUDE,
        id,
      );
      setData(res.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (id !== calendarData.client) setExpanded(false);
    handleFetchCalendarData();
  }, [calendarData]);

  useEffect(() => {
    if (deleteClient) handleFetchDelete();
  }, [openConfirmModal, deleteClient]);

  const handleDeleteClick = () => {
    toggleConfirmModalOpen();
    console.log(deleteClient);
  };

  return (
    <Card
      key={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 100rem',
        margin: '1rem',
        border: `0.1rem solid rgba(86, 100, 210,1)`,
      }}
      onClick={() => {
        handleCalendarData({ client: id });
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'rgba(86, 100, 210,1)' }}>
              {firstName[0]}
            </Avatar>
          }
          sx={{ flex: 1 }}
          title={`${firstName} ${lastName}`}
        />
        <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
        <MyCardActions
          expanded={expanded}
          handleExpandClick={handleExpandClick}
          handleDeleteClick={handleDeleteClick}
          cardType={ENDPOINTS.CLIENT}
        />
        <ConfirmModal
          setDelete={setDeleteClient}
          open={openConfirmModal}
          toggleOpen={toggleConfirmModalOpen}
          message="Are you sure you want to delete the client?"
        />
      </Box>
      {expanded && (
        <ExpandCard expanded={expanded}>
          <ClientCalendars data={data} clientId={id} />
          <SearchWorkouts />
        </ExpandCard>
      )}
    </Card>
  );
}
