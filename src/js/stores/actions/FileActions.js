import FileActionTypes from '../action_types/FileActionTypes'
import dispatcher from '../../Dispatcher';
import axios from 'axios';
import config from '../../config';
import { saveAs } from 'file-saver';

const fetchFilesFromVault = () => {
    dispatcher.dispatch({
        type: FileActionTypes.FETCH_FILES
    });
    const url = `${config.host}:${config.port}/files`;
    const token = localStorage.getItem('token') || 'none';
    axios.get(url, {headers: {'X-TOKEN': token}}).then(res => {
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

};

const fetchFileDetailsFromVault = (id) => {
    dispatcher.dispatch({
        type: FileActionTypes.FETCH_FILE_DETAILS
    });
    const url = `${config.host}:${config.port}/file/${id}`;
    const token = localStorage.getItem('token') || 'none';

    axios.get(url, {headers: {'X-TOKEN': token}}).then(res => {
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
};

const downloadFileFromVault = (index) => {
    const downloadUrl = `${config.host}:${config.port}/download/file/${index}`;
    const detailUrl = `${config.host}:${config.port}/file/${index}`;
    const token = localStorage.getItem('token') || 'none';

    axios.get(detailUrl, {headers: {'X-TOKEN': token}}).then((res) => {
        let fileName = res.data.file.fileName;
        console.log(fileName);
        saveAs(downloadUrl, fileName);
    });

};


export default {
    fetchFilesFromVault,
    fetchFileDetailsFromVault,
    downloadFileFromVault
}