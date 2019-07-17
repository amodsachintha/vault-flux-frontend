import React, { Component } from 'react';
import { Table, Icon, List, Segment, Dimmer, Loader, Image } from 'semantic-ui-react';

class FileBrowser extends Component {

    componentWillMount() {
        this.props.onFetchFilesFromVault();
    }

    render() {
        const { onFetchFileDetailsFromVault, onDownloadFileFromVault } = this.props;
        let { files, isLoading } = this.props.fileStore;
        let { selectedFile } = this.props.selectedFileStore;
        console.log(files);
        if (files.length && !isLoading) {
            return (
                <Table striped style={{ 'width': '100%' }} >
                    <FilesTableHeader />
                    <Table.Body>
                        {files.map(file => <FileRow key={file.index} {...file} clickHandler={onFetchFileDetailsFromVault} downloadHandler={onDownloadFileFromVault} sf={selectedFile} />)}
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>{files.length} files</Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            );
        }
        else if (isLoading) {
            return (
                <Segment>
                    <Dimmer active inverted>
                        <Loader inverted content='Loading' />
                    </Dimmer>

                    <Image src='/images/loader_background.png' />
                </Segment>
            );
        }
        else {
            return (
                <Table striped compact='very'>
                    <FilesTableHeader />
                    <Table.Body>
                        <Table.Row positive>
                            <Table.Cell colSpan='3' textAlign='center'>
                                Empty vault!
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            );
        }

    }
}

const FilesTableHeader = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan='3'>Your Vault <Icon name='smile outline' /></Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
};

const FileRow = (props) => {
    // let positive = ((props.health.aparts / props.health.tparts) > 0.6);
    let positive = true;
    let selectedFileId = props.sf.index;
    let color = '#808B96';
    let fontWeight = 'normal';
    if (selectedFileId) {
        color = selectedFileId === props.index ? '#2C3E50' : '#808B96';
        fontWeight = selectedFileId === props.index ? 'bold' : 'normal';
    }
    return (
        <Table.Row positive={positive} negative={!positive}>
            <Table.Cell>
                <List link>
                    <List.Item as='a' onClick={() => props.clickHandler(props.index)} style={{ 'color': color, 'fontWeight': fontWeight }} >
                        <Icon name='file outline' /> {props.file.fileName}
                    </List.Item>
                </List>
            </Table.Cell>
            <Table.Cell>{Math.round(props.file.fileSize / (1024 * 1024))} MB</Table.Cell>
            <Table.Cell textAlign='right'>
                <Icon onClick={() => props.downloadHandler(props.index)} name='download' link disabled={!positive} />
                {/*<Icon onClick={() => { console.log(`Delete ${props.file.fileName}`) }} name='trash alternate outline' link />*/}
            </Table.Cell>
        </Table.Row>
    )
};

export default FileBrowser;