import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

describe('App', () => {
  test('renders the home page by default', () => {
    render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </PersistGate>
    </Provider>
    );

    const homePageElement = screen.getByTestId('home-page');
    expect(homePageElement).toBeInTheDocument();
  });

  test('renders the main page when the route is /main', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter initialEntries={['/main']}>
            <App />
          </MemoryRouter>
        </PersistGate>
    </Provider>
    );

    const mainPageElement = screen.getByTestId('main-page');
    expect(mainPageElement).toBeInTheDocument();
  });
});
