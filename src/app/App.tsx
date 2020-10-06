import React, { useEffect, useState } from 'react';
import MosaicPreview from 'features/mosaicPreview/MosaicPreview';
import MosaicSelector from 'features/mosaicPreview/MosaicSelector';
import FileSelector from 'features/uploadDownload/FileSelector';
import { videoSrc } from 'app/app.config';
import Scrubber from 'features/videoScrubber/Scrubber';

import 'app/app.css';

const App: React.FC = () =>
			<div className='app-container'>
				<MosaicPreview />
				<MosaicSelector />
        <Scrubber
          videoSrc={videoSrc}
        />
				<FileSelector />
			</div>
      
export default App;