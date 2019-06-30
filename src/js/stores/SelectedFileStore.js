import { ReduceStore } from 'flux/utils';
import dispatcher from '../Dispatcher';
import FileActionTypes from './action_types/FileActionTypes';

class SelectedFileStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return Object.create({
            selectedFile: {},
            isLoading: false
        });
    }

    reduce(state, action) {
        switch (action.type) {
            case FileActionTypes.FETCH_FILE_DETAILS:
                console.log(action.type);
                return Object.create({ selectedFile: {}, isLoading: true });
            case FileActionTypes.RECEIVE_FILE_DETAILS:
                console.log(action.type);
                return Object.create({ selectedFile: action.file, isLoading: false });
            case FileActionTypes.FETCH_FILE_DETAILS_ERROR:
                console.log(action.type);
                return Object.create({ selectedFile: {}, isLoading: false });
            default:
                return state;
        }
    }

}

export default new SelectedFileStore();