import React, { Component } from 'react';
import { Feed, Segment } from 'semantic-ui-react';

class UserCard extends Component {

    render() {
        return (
            <Segment>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label image='/images/elliot.jpg' />
                            <Feed.Content>
                                <Feed.Summary>
                                    vaultadmin
                                </Feed.Summary>
                                <Feed.Date content='@c6ef4dbc' />
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
            </Segment>
        );
    }
}

export default UserCard;