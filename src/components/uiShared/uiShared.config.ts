import { 
  TileCount,          // <MosiacSelector>
  FileStatus,         // <FileSelector>
  BackgroundFrame     // <BackgroundSelector>
} from 'Components/App/projectSlice';



// <ContinuousSlider> project-specific config
export type SliderStateValue = BackgroundFrame



// <Button> and <ButtonCollection> project-specific config
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

