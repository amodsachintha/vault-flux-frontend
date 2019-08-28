import React from 'react';
import {Container, Grid, Segment, Input} from 'semantic-ui-react';
import FileBrowser from '../components/FileBrowser';
import VaultInfo from '../components/VaultInfo';
import DropZone from '../components/DropZone';
import FileInfo from '../components/FileInfo';
import MenuBar from "../components/MenuBar";
// import UserCard from '../components/UserCard';


const AppView = (props) => {
    return (
        <Container style={{ marginTop: '1em' }}>
            <MenuBar />
            <Grid columns={2} stackable style={{ marginTop: '1em' }}>
                <Grid.Column width={12}>
                    <VaultInfo {...props} />
                    <FileBrowser {...props} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment vertical>
                        <Input fluid loading={false} icon='search' placeholder='Search...' />
                    </Segment>
                    <Segment vertical>
                        <DropZone />
                    </Segment>
                    <Segment vertical>
                        <FileInfo {...props} />
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container >
    );
};

export default AppView;
