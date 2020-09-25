import React, { useEffect, useState } from 'react';
import MosaicPreview from 'Components/MosaicPreview/MosaicPreview';
import MosaicSelector from 'Components/MosaicSelector/MosaicSelector';
import BackgroundPreview from 'Components/BackgroundPreview/BackgroundPreview';
import BackgroundSelector from 'Components/BackgroundSelector/BackgroundSelector';
import FileSelector from 'Components/FileSelector/FileSelector';
import loadVideoMetadata, { VideoMetadata } from './../../utils/loadVideoMetadata';
import { backgroundFramesMax } from 'Components/App/projectSlice';
import 'Components/App/App.css';

const App: React.FC = () => {
  const [videoData, setVideoData] = useState<VideoMetadata | null>(null); 

	const videoSrc = 'video/swing.mp4';

  useEffect(() => {
    loadVideoMetadata(videoSrc, 2000).then(data => setVideoData(data)).catch(error => console.log(error));
	}, []);
	
	return(
			<div className='app-container'>
				<MosaicPreview />
				<MosaicSelector />
				{ videoData !== null &&
          <div style={{ width: videoData.videoWidth + 'px'}}>
            <BackgroundPreview
              videoSrc={videoSrc}
              backgroundFramesMax={backgroundFramesMax}
              width={videoData.videoWidth}
              height={videoData.videoHeight}
              duration={videoData.duration}
            />
          </div>
        }
				<BackgroundSelector />
				<FileSelector />
			</div>
	);
}

export default App;