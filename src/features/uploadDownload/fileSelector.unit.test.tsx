import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'app/store';
import FileSelector from 'features/uploadDownload/FileSelector';
import MosaicPreview from 'features/mosaicPreview/MosaicPreview';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

beforeAll(() => {
  render(
    <Provider store={store}>
      <MosaicPreview />
      <FileSelector />
    </Provider>
  );
});

test('clicking upload file selector button should show corresponding text content', () => {
    const button: HTMLImageElement = screen.getByAltText(`Click to upload video from your photo library`);
    fireEvent.click(button);
    expect(screen.getByTitle('Mosaic video preview')).toHaveTextContent(`fileStatus is 1`);
});


afterAll(cleanup);