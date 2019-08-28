import React, {Component} from 'react';
import {Segment, Label , List,Icon} from "semantic-ui-react";

class DiskDetails extends Component {

    render() {
        const {data} = this.props;
        var {status} = '';

        if(data.hStat === 'Healthy' )
        {
            status = 'teal';
        }
        else
        {
            status = 'red';
        }

        return (
            <Segment >
                <Label attached='top' align="center">Disk Details</Label>
                <List divided verticalAlign='middle'>
                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{data.id}</List.Content>
                    </List.Content>
                    <Icon name='tag'/>
                    <List.Content>Device ID</List.Content>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{data.name}</List.Content>
                    </List.Content>
                    <Icon name='info circle'/>
                    <List.Content>Device Name</List.Content>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{data.sno}</List.Content>
                    </List.Content>
                    <Icon name='barcode'/>
                    <List.Content>Serial Number</List.Content>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{data.mtype}</List.Content>
                    </List.Content>
                    <Icon name='hdd'/>
                    <List.Content>Media Type</List.Content>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{data.opStat}</List.Content>
                    </List.Content>
                    <Icon name='eye'/>
                    <List.Content>Operational Status</List.Content>
                    </List.Item>

                    <List.Item >
                    <List.Content floated='right'>
                    <List.Content><Label color={status}>{data.hStat}</Label></List.Content>
                    </List.Content>
                    <Icon name='heartbeat'/>
                    <List.Content>Health Status</List.Content>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{data.usage}</List.Content>
                    </List.Content>
                    <Icon name='server'/>
                    <List.Content>Usage</List.Content>
                    </List.Item>

                    <List.Item>
                    <List.Content floated='right'>
                    <List.Content>{data.size}</List.Content>
                    </List.Content>
                    <Icon name='database'/>
                    <List.Content>Size</List.Content>
                    </List.Item>

                </List>
            </Segment>
        );
    }
}

export default DiskDetails;