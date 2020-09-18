import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Components/App/rootReducer';
import 'Components/App/App.css';

const App: React.FC = () => {
	const { tileCount } = useSelector(
		( state: RootState ) => state.project
	);

	return(
			<div className='hello-flex'>
				tileCount is {tileCount}
			</div>
	);
}

export default App;