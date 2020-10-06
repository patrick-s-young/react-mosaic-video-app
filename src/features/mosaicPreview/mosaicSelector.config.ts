
import { tileCounts } from 'app/projectSlice';
import { ButtonConfigI, ButtonCollectionConfigI } from 'components/button.config';

const mosaicSelectorButtonConfig: Array<ButtonConfigI> = tileCounts.map(tileCount => {
  return {
    stateValue: tileCount,
    className: 'mosaic-selector-button',
    imagePath: {
      on: `/images/0${tileCount}_mosaic_selector_64x64_on.png`,
      off: `/images/0${tileCount}_mosaic_selector_64x64_off.png`
    },
    altText: `Click for ${tileCount}-tile video mosaic`
  }
});

export const mosaicSelectorConfig: ButtonCollectionConfigI = {
  className: 'mosaic-selector-button-collection',
  buttonConfig: mosaicSelectorButtonConfig
}