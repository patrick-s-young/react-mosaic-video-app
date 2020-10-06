import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/rootReducer';
import ButtonCollection from 'components/ButtonCollection';
import { StateValue } from 'components/button.config';
import { fileSelectorConfig } from 'features/uploadDownload/fileSelector.config';
import { setFileStatus, FileStatus } from 'app/projectSlice';
import 'features/uploadDownload/fileSelector.css';

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