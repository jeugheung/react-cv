import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../../components/Title/Title';

describe('Title', () => {
  test('renders the title correctly', () => {
    const titleText = 'Hello, World!';
    render(<Title title={titleText} />);

    const titleElement = screen.getByText(titleText);

    expect(titleElement).toBeInTheDocument();
  });
});
