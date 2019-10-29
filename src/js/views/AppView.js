import React from 'react';
import {Container, Grid, Segment, Input, Label} from 'semantic-ui-react';
import FileBrowser from '../components/FileBrowser';
import VaultInfo from '../components/VaultInfo';
import DropZone from '../components/DropZone';
import FileInfo from '../components/FileInfo';
import MenuBar from "../components/MenuBar";
// import UserCard from '../components/UserCard';


const getAvatar = (username) => {
    let img = {
        'amodsachintha': '/images/joe.jpg',
        'niran': '/images/nan.jpg',
        'asviganegoda': '/images/veronika.jpg',
        'ukmihiran': '/images/elliot.jpg'
    };
    switch (username) {
        case 'amodsachintha':
            return img.amodsachintha;
        case 'niran':
            return img.niran;
        case 'asviganegoda':
            return img.asviganegoda;
        case 'ukmihiran':
            return img.ukmihiran;
        default:
            return '/img/default.png'
    }
};


const AppView = (props) => {
    return (
        <Container style={{marginTop: '1em'}}>
            <MenuBar/>
            <Grid columns={2} stackable style={{marginTop: '1em'}}>
                <Grid.Column width={12}>
                    <VaultInfo {...props} />
                    <FileBrowser {...props} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment vertical className={'center aligned'}>
                        <Label image size='huge'>
                            <img src={getAvatar(localStorage.getItem('username'))}/>
                            {localStorage.getItem('username')}
                        </Label>
                    </Segment>
                    <Segment vertical>
                        <DropZone/>
                    </Segment>
                    <Segment vertical>
                        <FileInfo {...props} />
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default AppView;
