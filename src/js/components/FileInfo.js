import React from 'react';
import { Segment, Progress, Loader, Placeholder, Table, Icon } from 'semantic-ui-react';

class FileInfo extends React.Component {

    fileDetailsTable = (file) => {
        return (
            <Table basic='very' compact='very'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Type</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Size</Table.Cell>
                        <Table.Cell>{Math.round(file.filesize / (1024 * 1024))} MB</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Storage Used</Table.Cell>
                        <Table.Cell>{Math.round((file.filesize / (1024 * 1024)) + 23)} MB</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Created</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='2' ><small>{file.hash}</small></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

    render() {
        let { selectedFile, isLoading } = this.props.selectedFileStore;

        if (!selectedFile.id && !isLoading) {
            return (
                <Segment basic textAlign='center'>
                    No file selected!
                </Segment>
            );
        }

        if (isLoading) {
            return (
                <Segment basic padded>
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
            <Segment basic>
                <h3><Icon name='file alternate outline' />{selectedFile.filename}</h3>
                <this.fileDetailsTable {...selectedFile} />
                <Progress percent={Math.round(selectedFile.health.aparts / selectedFile.health.tparts * 100)} indicating progress>Health</Progress>
            </Segment>
        );
    }
}

export default FileInfo;