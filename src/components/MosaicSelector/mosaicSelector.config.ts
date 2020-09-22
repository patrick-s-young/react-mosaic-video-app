import { tileCounts, TileCount } from 'Components/App/projectSlice';

export interface ButtonI {
  onClickCallback: (newStateValue: TileCount) => void
  stateValue: TileCount
  isEnabled: boolean
  imagePath: { on: string, off: string }
  className: string
}

export interface ButtonConfigI {
  stateValue: TileCount
  className: string
  imagePath: { on: string, off: string }
}

export interface ButtonCollectionI {
  currentStateValue: TileCount
  buttonCollectionConfig: ButtonCollectionConfigI
  onClickCallback: (newStateValue: TileCount) => void
}

export interface ButtonCollectionConfigI {
  className: string
  buttonConfig: Array<ButtonConfigI>
}


const buttonConfig: Array<ButtonConfigI> = tileCounts.map(tileCount => {
  return {
    stateValue: tileCount,
    className: 'buttonClass',
    imagePath: {
      on: `/images/0${tileCount}_mosaic_selector_64x64_on.png`,
      off: `/images/0${tileCount}_mosaic_selector_64x64_off.png`
    }
  }
});

export const buttonCollectionConfig: ButtonCollectionConfigI = {
    className: 'buttonCollectionClass',
    buttonConfig
}

