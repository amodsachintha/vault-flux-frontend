import React from 'react';
import { Segment, Divider, Progress, Loader, Placeholder } from 'semantic-ui-react';

class FileInfo extends React.Component {

    render() {
        let { selectedFile, isLoading } = this.props.selectedFileStore;

        if (!selectedFile.id && !isLoading) {
            return (
                <Segment>
                    No file selected!
                </Segment>
            );
        }

        if (isLoading) {
            return (
                <Segment>
                    <Loader size='large' content='Loading' active />
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='short' />
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Segment>
            );
        }

        return (
            <Segment>
                <h3>{selectedFile.filename}</h3>
                <small>Size: {Math.round(selectedFile.filesize / (1024 * 1024))} MB</small> <br />
                <small>Created: </small>
                <Divider clearing />
                <Progress percent={Math.round(selectedFile.health.aparts / selectedFile.health.tparts * 100)} indicating progress>Health</Progress>
            </Segment>
        );
    }
}

export default FileInfo;