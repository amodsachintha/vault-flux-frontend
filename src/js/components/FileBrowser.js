import React, {Component} from 'react';
import {Table, Icon, List, Segment, Dimmer, Loader, Image} from 'semantic-ui-react';

class FileBrowser extends Component {

    componentWillMount() {
        this.props.onFetchFilesFromVault();
    }

    render() {
        const {onFetchFileDetailsFromVault, onDownloadFileFromVault} = this.props;
        let {files, isLoading} = this.props.fileStore;
        let {selectedFile} = this.props.selectedFileStore;
        console.log(files);
        if (files.length && !isLoading) {
            return (
                <Table basic style={{'width': '100%'}}>
                    <FilesTableHeader />
                    <Table.Body>
                        {files.map(file => <FileRow key={file.index} {...file}
                                                    clickHandler={onFetchFileDetailsFromVault}
                                                    downloadHandler={onDownloadFileFromVault} sf={selectedFile}/>)}
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>{files.length} files</Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            );
        } else if (isLoading) {
            return (
                <Segment>
                    <Dimmer active inverted>
                        <Loader inverted content='Loading'/>
                    </Dimmer>

                    <Image src='/images/loader_background.png'/>
                </Segment>
            );
        } else {
            return (
                <Table striped compact='very'>
                    <FilesTableHeader/>
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
                <Table.HeaderCell >
                    Name
                </Table.HeaderCell>
                {/*<Table.HeaderCell textAlign='center'>*/}
                {/*    Owner*/}
                {/*</Table.HeaderCell>*/}
                <Table.HeaderCell textAlign='center'>
                    Size
                </Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>
                    Actions
                </Table.HeaderCell>
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
        <Table.Row>
            <Table.Cell textAlign='left'>
                <List link>
                    <List.Item as='a' onClick={() => props.clickHandler(props.index)}
                               style={{'color': color, 'fontWeight': fontWeight}}>
                        {getIcon(props.file.mimeType)} {props.file.fileName}
                    </List.Item>
                </List>
            </Table.Cell>
            {/*<Table.Cell textAlign='center'>*/}
            {/*    {props.owner}*/}
            {/*</Table.Cell>*/}
            <Table.Cell textAlign='center'>{Math.round(props.file.fileSize / (1024 * 1024))} MB</Table.Cell>
            <Table.Cell textAlign='center'>
                <Icon onClick={() => props.downloadHandler(props.index)} name='download' color={'blue'} link disabled={!positive}/>
                <Icon onClick={() => {}} name='share alternate' color={'green'} link />
                <Icon onClick={() => { console.log(`Delete ${props.file.fileName}`) }} name='trash alternate outline' color={'red'} link />
            </Table.Cell>
        </Table.Row>
    )
};

const getIcon = (mime) => {
    switch (mime) {
        case 'audio/mpeg':
            return <Icon name='file audio'/>;
        case 'text/html':
            return <Icon name='file text'/>;
        case 'image/png':
            return <Icon name='file image'/>;
        case 'video/mp4':
        case 'video/x-matroska':
            return <Icon name='file video'/>;
        case 'application/pdf':
            return <Icon name='file pdf'/>;
        default:
            return <Icon name='file'/>;
    }
};

export default FileBrowser;