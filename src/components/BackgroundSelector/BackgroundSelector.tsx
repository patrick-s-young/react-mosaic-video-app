import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Components/App/rootReducer';
import { setBackgroundFrame, BackgroundFrame, backgroundFramesMax } from 'Components/App/projectSlice';
import Slider from 'Components/uiShared/Slider/Slider';

const BackgroundSelector: React.FC = () => {
  const dispatch = useDispatch();

  const { backgroundFrame } = useSelector(
    (state: RootState) => state.project
  );

  const onSlideHandler = (scalerValue: number) => {
    const newBackgroundFrame: BackgroundFrame = Math.floor( scalerValue * backgroundFramesMax);
    dispatch(setBackgroundFrame(newBackgroundFrame));
  }

  return (
    <>
      <Slider
        sliderCallback={onSlideHandler}
      />
    </>
  );
}

export default BackgroundSelector;