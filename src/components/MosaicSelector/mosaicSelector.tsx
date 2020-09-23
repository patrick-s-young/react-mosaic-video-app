import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Components/App/rootReducer';
import ButtonCollection from 'Components/uiShared/ButtonCollection';
import { StateValue } from 'Components/uiShared/uiShared.config';
import { mosaicSelectorConfig } from 'Components/MosaicSelector/mosaicSelector.config';
import { setTileCount, TileCount } from 'Components/App/projectSlice';
import 'Components/MosaicSelector/mosaicSelector.css';

const MosaicSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { tileCount } = useSelector(
		( state: RootState ) => state.project
	);

  const onClickHandler = (newTileCount: StateValue) => {
    dispatch(setTileCount(newTileCount as TileCount));
  }

  return (
    <>
      <ButtonCollection
        currentStateValue={tileCount}
        buttonCollectionConfig={mosaicSelectorConfig}
        onClickCallback={onClickHandler}
      />
    </>
  );
}

export default MosaicSelector;