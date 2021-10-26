import { styled } from '@material-ui/core/styles';

export const MainRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

export const MainWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
});

export const MainContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

export const MainContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});
