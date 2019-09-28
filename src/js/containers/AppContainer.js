import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import FileStore from '../stores/FileStore';
import SelectedFileStore from '../stores/SelectedFileStore';
import FileActions from '../stores/actions/FileActions';

const getStores = () => {
    return [
        FileStore,
        SelectedFileStore
    ]
};

const getState = () => {
    return {
        fileStore: FileStore.getState(),
        selectedFileStore: SelectedFileStore.getState(),

        onFetchFilesFromVault: FileActions.fetchFilesFromVault,
        onFetchFileDetailsFromVault: FileActions.fetchFileDetailsFromVault,
        onDownloadFileFromVault: FileActions.downloadFileFromVault,
        onDeleteFile: FileActions.deleteFile
    }
};


export default Container.createFunctional(AppView, getStores, getState);