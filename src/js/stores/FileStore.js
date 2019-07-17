import { ReduceStore } from 'flux/utils';
import dispatcher from '../Dispatcher';
import FileActionTypes from './action_types/FileActionTypes';

class FileStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return Object.create({
            files: {},
            isLoading: false,
        });
    }

    reduce(state, action) {
        switch (action.type) {
            case FileActionTypes.FETCH_FILES:
                console.log(action.type);
                return Object.create({
                    files: {},
                    isLoading: true,
                });
            case FileActionTypes.RECEIVE_FILES:
                console.log(action.type);
                // console.log(action.files.blocks);
                return Object.create({
                    files: action.files.blocks.map(file => file),
                    isLoading: false
                });
            case FileActionTypes.FETCH_FILES_ERROR:
                console.log(action.type);
                return Object.create({
                    files: {},
                    isLoading: false,
                });
            default:
                return state;
        }
    }

}

export default new FileStore();