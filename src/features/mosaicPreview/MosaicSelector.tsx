import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/rootReducer';
import ButtonCollection from 'components/ButtonCollection';
import { StateValue } from 'components/button.config';
import { mosaicSelectorConfig } from 'features/mosaicPreview/mosaicSelector.config';
import { setTileCount, TileCount } from 'app/projectSlice';
import 'features/mosaicPreview/mosaicSelector.css';

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