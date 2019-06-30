import FileActionTypes from '../action_types/FileActionTypes'
import dispatcher from '../../Dispatcher';
import axios from 'axios';
import config from '../../config';

const fetchFilesFromVault = () => {
    dispatcher.dispatch({
        type: FileActionTypes.FETCH_FILES
    });
    const url = `${config.host}:${config.port}/files`;
    axios.get(url).then(res => {
        setTimeout(() => {
            dispatcher.dispatch({
                type: FileActionTypes.RECEIVE_FILES,
                files: res.data
            });
        }, 300);

    }).catch(e => {
        console.error(e);
        dispatcher.dispatch({
            type: FileActionTypes.FETCH_FILES_ERROR
        })
    })

}

const fetchFileDetailsFromVault = (id) => {
    dispatcher.dispatch({
        type: FileActionTypes.FETCH_FILE_DETAILS
    });
    const url = `${config.host}:${config.port}/files/${id}`;
    axios.get(url).then(res => {
        setTimeout(() => {
            dispatcher.dispatch({
                type: FileActionTypes.RECEIVE_FILE_DETAILS,
                file: res.data
            })
        }, 300)
    }).catch(e => {
        console.error(e);
        dispatcher.dispatch({
            type: FileActionTypes.FETCH_FILE_DETAILS_ERROR
        })
    })
}

export default {
    fetchFilesFromVault,
    fetchFileDetailsFromVault
}