import React from 'react';
import { Container, Grid, Menu } from 'semantic-ui-react';
import FileBrowser from '../components/FileBrowser';
import VaultInfo from '../components/VaultInfo';
import DropZone from '../components/DropZone';
import FileInfo from '../components/FileInfo';
import UserCard from '../components/UserCard';
import MenuBar from '../components/MenuBar';

const AppView = (props) => {
    return (
        <Container style={{ marginTop: '3em' }}>
            <MenuBar />
            <Grid columns={2} stackable>
                <Grid.Column width={4}>
                    <UserCard />
                    <FileInfo {...props} />
                    <DropZone />
                </Grid.Column>

                <Grid.Column width={12}>
                    <FileBrowser {...props} />
                    <VaultInfo {...props} />
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default AppView;
