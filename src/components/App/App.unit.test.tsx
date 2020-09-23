import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Components/App/store';
import App from 'Components/App/App';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

beforeAll(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test('should display default redux state values', () => {
  expect(screen.getByTitle('Mosaic video preview')).toHaveTextContent('tileCount is 3');
  expect(screen.getByTitle('Mosaic video preview')).toHaveTextContent('fileStatus is 0');

});

afterAll(cleanup);