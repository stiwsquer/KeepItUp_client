import React from 'react';
import {
  LayoutRoot,
  LayoutWrapper,
  LayoutContainer,
  LayoutContent,
} from '../Layout.style';
import AppRoute from '../../Routes/AppRoute';

export default function MainLayout() {
  return (
    <LayoutRoot>
      <LayoutWrapper isPadding>
        <LayoutContainer>
          <LayoutContent>
            <AppRoute />
          </LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
    </LayoutRoot>
  );
}
