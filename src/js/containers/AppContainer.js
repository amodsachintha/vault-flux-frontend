import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import FileStore from '../stores/FileStore';
import FileActions from '../stores/actions/FileActions';

const getStores = () => {
    return [
        FileStore
    ]
};

const getState = () => {
    return {
        files: FileStore.getState(),
        onFetchFilesFromVault: FileActions.fetchFilesFromVault
    }
}

export default Container.createFunctional(AppView, getStores, getState);