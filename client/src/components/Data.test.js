import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Data from './Data';

test('Data is rendering to browser properly', () => {
  const { getByText } = render(<Data/>);
  getByText(/top 100 searched for/i);
})
