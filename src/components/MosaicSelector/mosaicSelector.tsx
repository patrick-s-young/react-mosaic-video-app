import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Components/App/rootReducer';
import ButtonCollection from 'Components/uiShared/ButtonCollection';
import { buttonCollectionConfig } from 'Components/MosaicSelector/mosaicSelector.config';
import { setTileCount, TileCount } from 'Components/App/projectSlice';
import 'Components/MosaicSelector/mosaicSelector.css';

const MosaicSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { tileCount } = useSelector(
		( state: RootState ) => state.project
	);

  const onClickHandler = (newTileCount: TileCount) => {
    dispatch(setTileCount(newTileCount));
  }

  return (
    <div>
      <ButtonCollection
        currentStateValue={tileCount}
        buttonCollectionConfig={buttonCollectionConfig}
        onClickCallback={onClickHandler}
      />
    </div>
  );
}

export default MosaicSelector;