import React, { useEffect, useState } from 'react';
import MosaicPreview from 'features/mosaicPreview/MosaicPreview';
import MosaicSelector from 'features/mosaicPreview/MosaicSelector';
import BackgroundPreview from 'features/backgroundPreview/BackgroundPreview';
import BackgroundSelector from 'features/backgroundPreview/BackgroundSelector';
import FileSelector from 'features/uploadDownload/FileSelector';
import loadVideoMetadata, { VideoMetadata } from 'utils/loadVideoMetadata';
import { backgroundFramesMax } from 'app/projectSlice';
import 'app/app.css';

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