import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Components/App/store';
import MosaicSelector from 'Components/MosaicSelector/MosaicSelector';
import MosaicPreview from 'Components/MosaicPreview/MosaicPreview';
import { TileCount } from 'Components/App/projectSlice';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

beforeAll(() => {
  render(
    <Provider store={store}>
      <MosaicPreview />
      <MosaicSelector />
    </Provider>
  );
});

test('clicking video mosaic selector buttons should show corresponding text content', () => {
  const tileCounts: Array<TileCount> = [2, 3, 4, 6, 9];
  tileCounts.forEach((tileCount) => {
    const button: HTMLImageElement = screen.getByAltText(`Click for ${tileCount}-tile video mosaic`);
    fireEvent.click(button);
    expect(screen.getByTitle('Mosaic video preview')).toHaveTextContent(`tileCount is ${tileCount}`);
  });
});

afterAll(cleanup);