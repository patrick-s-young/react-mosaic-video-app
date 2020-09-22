import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Components/App/store';
import MosaicPreview from 'Components/MosaicPreview/MosaicPreview';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

beforeAll(() => {
  render(
    <Provider store={store}>
      <MosaicPreview />
    </Provider>
  );
});

test('should have the right message in the dom', () => {
  const message = 'tileCount is 3';
  expect(screen.getByText(message)).toBeInTheDocument();
});

afterAll(cleanup);