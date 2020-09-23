import { TileCount, FileStatus } from 'Components/App/projectSlice';

export type StateValue =  TileCount | FileStatus

export interface ButtonConfigI {
  stateValue: StateValue
  className: string
  imagePath: { on: string, off: string }
  altText: string
}

export interface ButtonCollectionConfigI {
  className: string
  buttonConfig: Array<ButtonConfigI>
}

export interface ButtonProps {
  onClickCallback: (newStateValue: StateValue) => void
  stateValue: StateValue
  isEnabled: boolean
  imagePath: { on: string, off: string }
  className: string
  altText: string
}

export interface ButtonCollectionProps {
  currentStateValue: StateValue
  buttonCollectionConfig: ButtonCollectionConfigI
  onClickCallback: (newStateValue: StateValue) => void
}

