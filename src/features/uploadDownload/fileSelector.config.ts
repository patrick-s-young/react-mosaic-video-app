import { FileStatus } from 'app/projectSlice';
import { ButtonConfigI, ButtonCollectionConfigI } from 'components/button.config';

const fileSelectorButtonConfig: Array<ButtonConfigI> = [
  {
    stateValue: FileStatus.Uploading,
    className: 'fileSelector-button',
    imagePath: {
      on: `/images/file_selector_upload_160x160_on.png`,
      off: `/images/file_selector_upload_160x160_off.png`
    },
    altText: `Click to upload video from your photo library`
  },
  {
    stateValue: FileStatus.Downloading,
    className: 'fileSelector-button',
    imagePath: {
      on: `/images/file_selector_download_160x160_on.png`,
      off: `/images/file_selector_download_160x160_off.png`
    },
    altText: `Click to download video mosaic to your photo library`
  }
];

export const fileSelectorConfig: ButtonCollectionConfigI = {
  className: 'fileSelector-button-collection',
  buttonConfig: fileSelectorButtonConfig
}