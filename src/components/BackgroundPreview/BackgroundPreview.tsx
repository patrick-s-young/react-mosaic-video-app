import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Components/App/rootReducer';
import 'Components/BackgroundPreview/backgroundPreview.css';

const BackgroundPreview: React.FC = () => {
	const { backgroundFrame } = useSelector(
		( state: RootState ) => state.project
	);

	return(
			<div className='backgroundPreview-container' title='Background preview'>
				[ backgroundFrame is {backgroundFrame}]
			</div>
	);
}

export default BackgroundPreview;