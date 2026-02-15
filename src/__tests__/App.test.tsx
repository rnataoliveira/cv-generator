import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App renders editor and preview', () => {
  render(<App />);
  expect(screen.getByText(/Preview/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  // language buttons
  expect(screen.getByText('EN')).toBeInTheDocument();
  expect(screen.getByText('PT‑BR')).toBeInTheDocument();
});
