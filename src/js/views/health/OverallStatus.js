import React, {Component} from 'react';
import {Progress, Segment, Label , List,Icon} from "semantic-ui-react";

class OverallStatus extends Component {

    total = 69;
    healthy = 58;
    infected = 11;

    render() {
        return (
            <Segment>
                <Label attached='top' align="center">Overall Status</Label>
                <List divided verticalAlign='middle'>
                    <List.Item>
                        <Progress percent={ Math.round(this.healthy/this.total * 100) } indicating progress></Progress>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{this.total}</List.Content>
                    </List.Content>
                    <Icon name='hdd outline'/>
                    <List.Content>Total Disk Count</List.Content>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{this.healthy}</List.Content>
                    </List.Content>
                    <Icon  name='heart'/>
                    <List.Content>Healthy Disk Count</List.Content>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{this.infected}</List.Content>
                    </List.Content>
                    <Icon  name='heartbeat'/>
                    <List.Content>Not-Healthy Disk Count</List.Content>
                    </List.Item>

                </List>
            </Segment>

        );
    }
}

export default OverallStatus;