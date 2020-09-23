import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Components/App/rootReducer';
import ButtonCollection from 'Components/uiShared/ButtonCollection';
import { StateValue } from 'Components/uiShared/uiShared.config';
import { fileSelectorConfig } from 'Components/FileSelector/fileSelector.config';
import { setFileStatus, FileStatus } from 'Components/App/projectSlice';
import 'Components/FileSelector/fileSelector.css';

const FileSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { fileStatus } = useSelector(
		( state: RootState ) => state.project
	);

  const onClickHandler = (newTileCount: StateValue) => {
    dispatch(setFileStatus(newTileCount as FileStatus));
  }

  return (
    <>
      <ButtonCollection
        currentStateValue={fileStatus}
        buttonCollectionConfig={fileSelectorConfig}
        onClickCallback={onClickHandler}
      />
    </>
  );
}

export default FileSelector;