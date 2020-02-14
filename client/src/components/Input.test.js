import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('Input properly renders', () => {
  const { getByLabelText } = render(<Input/>);
});

test('input field is functioning normally', () => {
  const { getByTestId } = render(<Input/>);

  const dataInput = getByTestId('input');

  fireEvent.change(dataInput, { target: { value: 'test data input' } });

  expect(dataInput.value).toBe('test data input');
});
