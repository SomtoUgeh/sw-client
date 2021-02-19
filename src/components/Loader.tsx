import * as React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

export const Loader: React.FC = () => (
  <LoaderContainer data-testid="loader">
    <Spinner color="info" />
  </LoaderContainer>
);

const LoaderContainer = styled.div`
  height: 60vh;
  display: grid;
  place-items: center;
`;
