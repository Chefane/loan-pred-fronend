import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Render from './components/render';
import mockData from './components/mockData';
import '@testing-library/jest-dom';


test('checking whether the app is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText("Loan Prediction Form");
  expect(linkElement).toBeInTheDocument();
});

test ('checking whether the mock data is rendered', () => {
  render(<Render list={mockData}/>);
  mockData.forEach(render => {
    const loanIdElement = screen.getByText(render.Loan_ID);
    expect(loanIdElement).toBeInTheDocument();
  })
  
})

test ('checking whether the right accuracy is rendered', () =>{
  throw new Error();
})
