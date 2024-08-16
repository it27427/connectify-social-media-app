import React from 'react';
import { ButtonProps } from './ui/button';

interface LoadingButtonProps extends ButtonProps {}

const LoadingButton = () => {
  return <button type='button'>LoadingButton</button>;
};

export default LoadingButton;
