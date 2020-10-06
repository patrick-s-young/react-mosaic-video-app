import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'app/store';
import MosaicSelector from 'features/mosaicPreview/MosaicSelector';
import MosaicPreview from 'features/mosaicPreview/MosaicPreview';
import { TileCount } from 'app/projectSlice';
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