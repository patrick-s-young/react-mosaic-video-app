import React from 'react';
import MosaicPreview from 'Components/MosaicPreview/MosaicPreview';
import MosaicSelector from 'Components/MosaicSelector/MosaicSelector';
import 'Components/App/App.css';

const App: React.FC = () => {

	return(
			<div className='app'>
				<MosaicPreview />
				<MosaicSelector />
			</div>
	);
}

export default App;