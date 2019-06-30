import FileActionTypes from '../action_types/FileActionTypes'
import dispatcher from '../../Dispatcher';
import axios from 'axios';
import config from '../../config';

const fetchFilesFromVault = () => {
    dispatcher.dispatch({
        type: FileActionTypes.FETCH_FILES
    });
    const url = `${config.host}:${config.port}/files`;
    console.info(url);
    axios.get(url).then(res => {
        console.debug(res.data);
        dispatcher.dispatch({
            type: FileActionTypes.RECEIVE_FILES,
            files: res.data
        })
    }).catch(e => {
        console.error(e);
        dispatcher.dispatch({
            type: FileActionTypes.FETCH_FILES_ERROR
        })
    })

}

export default {
    fetchFilesFromVault
}