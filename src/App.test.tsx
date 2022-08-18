import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('checking whether the app is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText("Loan Prediction Form");
  expect(linkElement).toBeInTheDocument();
});
