
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Button from './Button';

test('renders the Button component with the correct props and children', () => {
  const buttonText = 'Click Me';
  const { getByText } = render(<Button>{buttonText}</Button>);

  // Assert that the button is rendered with the correct text
  expect(getByText(buttonText)).toBeInTheDocument();

  // Assert that the button has the correct class
  const buttonElement = getByText(buttonText);
  expect(buttonElement).toHaveClass('btn btn-primary btn-lg');
});