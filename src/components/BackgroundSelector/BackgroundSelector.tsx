import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Components/App/rootReducer';
import { setBackgroundFrame, BackgroundFrame, backgroundFramesMax } from 'Components/App/projectSlice';

const BackgroundSelector: React.FC = () => {
  const dispatch = useDispatch();

  const { backgroundFrame } = useSelector(
    (state: RootState) => state.project
  );

  const onSlideHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBackgroundFrame(parseInt(e.target.value) as BackgroundFrame));
  }

  return (
    <div className="slidecontainer">
      <input 
        type='range'
        min='0'
        max={backgroundFramesMax - 1} 
        step='1'
        defaultValue={backgroundFrame} 
        className='slider' 
        onChange={onSlideHandler}
        data-testid='backgroundSelectorInput'
      />
    </div>
  );
}

export default BackgroundSelector;