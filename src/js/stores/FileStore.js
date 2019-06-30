import { ReduceStore} from 'flux/utils';
import dispatcher from '../Dispatcher';
import FileActionTypes from './action_types/FileActionTypes';

class FileStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }


    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case FileActionTypes.FETCH_FILES:
                console.debug(action.type);
                return state;
            case FileActionTypes.RECEIVE_FILES:
                console.debug(action.type);
                return state = action.files.map(f => f);
            case FileActionTypes.FETCH_FILES_ERROR:
                console.debug(action.type);
                return state;
            default:
                return state;
        }
    }

}

export default new FileStore();