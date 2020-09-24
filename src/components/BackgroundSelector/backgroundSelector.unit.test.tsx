import React from 'react';
import { Provider } from 'react-redux';
import store from 'Components/App/store';
import BackgroundPreview from 'Components/BackgroundPreview/BackgroundPreview';
import BackgroundSelector from 'Components/BackgroundSelector/BackgroundSelector';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

describe('move slider changes value', () => {
  let slider: HTMLInputElement;
  let backgroundPreview: HTMLDivElement;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BackgroundPreview />
        <BackgroundSelector />
      </Provider>
    );
    slider = screen.getByTestId('backgroundSelectorInput') as HTMLInputElement;
    backgroundPreview = screen.getByTitle('Background preview') as HTMLDivElement;
  });

  test('should display default redux state value for: backgroundFrame', () => {
    expect(backgroundPreview).toHaveTextContent('backgroundFrame is 10');
  });
  
  test('when slider value is 5', () => {
    fireEvent.change(slider, {
      target: { value: 5}
    });
    expect(backgroundPreview).toHaveTextContent('backgroundFrame is 5');
  });
});