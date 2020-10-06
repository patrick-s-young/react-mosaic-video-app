import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/rootReducer';
import CanvasVideoFrameCollection from 'features/backgroundPreview/CanvasVideoFrameCollection';

interface BackgroundPreviewProps {
  videoSrc: string
  backgroundFramesMax: number
  width: number
  height: number
  duration: number
}

const BackgroundPreview: React.FC<BackgroundPreviewProps> = ({
  videoSrc, 
  backgroundFramesMax,
  width,
  height,
  duration }) => {

	const { backgroundFrame } = useSelector(
		( state: RootState ) => state.project
	);

	const currentTimes = useMemo<Array<number>>(() => { 
    const timeIncrement: number = duration / backgroundFramesMax;
    const currentTimesArr: Array<number> = [];
    for (let i = 0; i < backgroundFramesMax; i++) {
        currentTimesArr.push(i * timeIncrement + 0.1);
    }
    return currentTimesArr; 
  }, [duration, backgroundFramesMax]);

	return(
		<>
			<div title='Background preview'>
				[ backgroundFrame is {backgroundFrame}]
			</div>
			<div>
				<CanvasVideoFrameCollection
					currentTimes={currentTimes}
					showFrameAtIndex={backgroundFrame}
					videoSrc={videoSrc}
					width={width}
					height={height}
				/>
			</div>
		</>
	);
}

export default BackgroundPreview;