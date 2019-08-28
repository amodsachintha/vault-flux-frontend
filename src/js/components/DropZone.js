import React from 'react';
import {Segment} from 'semantic-ui-react';
import {FilePond} from "react-filepond";
import "filepond/dist/filepond.min.css";
import config from '../config';
import {toast} from 'react-toastify';

class DropZone extends React.Component {

    handleInit() {
        console.log("FilePond instance has initialised");
    }

    render() {
        return (
            <Segment basic>
                <FilePond
                    ref={ref => (this.pond = ref)}
                    allowMultiple={false}
                    server={{
                        url: `${config.host}:${config.port}/encrypt`,
                        process: {
                            headers: {
                                'X-TOKEN': localStorage.getItem('token') || 'none'
                            },
                        }
                    }}
                    oninit={() => this.handleInit()}
                    onprocessfile={(error, file) => {
                        console.log(file);
                        toast.success(`${file.file.name} processed successfully`);
                        setTimeout(() => {
                            window.location.href = '/home';
                        }, 2500);
                    }}
                />
            </Segment>
        );
    }
}

export default DropZone;