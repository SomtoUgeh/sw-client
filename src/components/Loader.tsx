import * as React from 'react';
import { useLottie } from 'lottie-react';
import loader from 'assets/loading.json';
import styled from 'styled-components';

export const Loader: React.FC = () => {
  const options = {
    animationData: loader,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <LoaderContainer>{View}</LoaderContainer>;
};

const LoaderContainer = styled.div`
  height: 60vh;
  display: grid;
  place-items: center;
`;
