import React from 'react';
import MosaicPreview from 'Components/MosaicPreview/MosaicPreview';
import MosaicSelector from 'Components/MosaicSelector/MosaicSelector';
import FileSelector from 'Components/FileSelector/FileSelector';
import 'Components/App/App.css';

const App: React.FC = () => {

	return(
			<div className='app-container'>
				<MosaicPreview />
				<MosaicSelector />
				<FileSelector />
			</div>
	);
}

export default App;