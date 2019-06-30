import React, { Component } from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';

class UserCard extends Component {

    render() {
        return (
            <Segment basic raised>
                <Header as='h3'>
                    <Image circular src='/images/elliot.jpg' /> VaultAdmin
                </Header>
            </Segment>
        );
    }
}

export default UserCard;