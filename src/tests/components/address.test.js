import React from 'react';
import { render, screen } from '@testing-library/react';
import AddressComponent from '../../components/Address/Address';

describe('AddressComponent', () => {
  test('renders the title and contact information correctly', () => {
    const data = {
      phone: '123-456-7890',
      email: 'test@example.com',
      twitter: {
        title: 'Twitter',
        link: 'https://twitter.com/example'
      },
      facebook: {
        title: 'Facebook',
        link: 'https://facebook.com/example'
      },
      skype: {
        title: 'Skype',
        link: 'example_skype_id'
      }
    };

    const title = 'Contact Information';

    render(<AddressComponent data={data} title={title} />);

    // Assert that the title and contact information are rendered correctly
    const titleElement = screen.getByText(title);
    const phoneElement = screen.getByText(data.phone);
    const emailElement = screen.getByText(data.email);
    const twitterElement = screen.getByText(data.twitter.title);
    const facebookElement = screen.getByText(data.facebook.title);
    const skypeElement = screen.getByText(data.skype.title);

    expect(titleElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(twitterElement).toBeInTheDocument();
    expect(facebookElement).toBeInTheDocument();
    expect(skypeElement).toBeInTheDocument();
  });
});
