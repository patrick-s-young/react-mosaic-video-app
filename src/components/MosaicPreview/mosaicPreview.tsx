import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Components/App/rootReducer';
import 'Components/MosaicPreview/mosaicPreview.css';

const MosaicPreview: React.FC = () => {
	const { tileCount, fileStatus } = useSelector(
		( state: RootState ) => state.project
	);

	return(
			<div className='mosaicPreview-container' title='Mosaic video preview'>
				[ tileCount is {tileCount} ] [ fileStatus is {fileStatus} ]
			</div>
	);
}

export default MosaicPreview;