import { styled } from '@material-ui/core/styles';

export const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  // backgroundColor: theme.palette.background.paper,

  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

export const LayoutWrapper = styled('div')(({ theme, isPadding }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  zIndex: '0',
  [isPadding && theme.breakpoints.up('md')]: {
    paddingLeft: 256,
  },
}));

export const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

export const LayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});
