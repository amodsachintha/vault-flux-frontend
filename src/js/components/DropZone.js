import React from 'react';
import { Segment } from 'semantic-ui-react';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

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
                        server="/api"
                        oninit={() => this.handleInit()}
                    />
            </Segment>
        );
    }
}

export default DropZone;