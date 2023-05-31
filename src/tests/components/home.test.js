import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../views/Home/Home.page';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage', () => {
  test('renders the user information and button correctly', () => {
    render(

    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
    );

    // Assert user information
    const nameElement = screen.getByText('John Doe');
    expect(nameElement).toBeInTheDocument();

    const titleElement = screen.getByText('Programmer. Creative. Innovator');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque');
    expect(descriptionElement).toBeInTheDocument();

    // Assert button
    const buttonElement = screen.getByRole('button', { name: 'Know more' });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button-home');
  });
});
