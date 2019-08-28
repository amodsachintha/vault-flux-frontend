import React, {Component} from 'react';
import { Icon , List} from "semantic-ui-react";

class Disk extends Component {

    render() {
        const {data} = this.props;

        if(data.opStat === 'OK' )
            {
                return (

                    <List.Item onClick={ () => this.props.viewHandler(data)}>
                      <List.Icon name='hdd outline' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>
                            {data.name.length >= 12 ? data.name.substr(0,12)+'..' : data.filename}
                          </List.Header>
                          <List.Description as='a'>{data.size}</List.Description>
                        </List.Content>

                        <List.Content floated='right'>
                          <Icon color='green' name='heart'/>
                        </List.Content>
                        <List.Content floated='right'>
                          {data.hStat}
                        </List.Content>

                    </List.Item>
                );
            }
            else
            {
                return (

                    <List.Item onClick={ () => this.props.viewHandler(data)}>
                      <List.Icon name='hdd outline' size='large' verticalAlign='middle' />
                      <List.Content>
                        <List.Header as='a'>
                          {data.name.length >= 12 ? data.name.substr(0,30)+'..' : data.filename}
                        </List.Header>
                        <List.Description as='a'>Size : 450.23 GB</List.Description>
                      </List.Content>

                      <List.Content floated='right'>
                        <Icon color='red' name='heart'/>
                      </List.Content>
                      <List.Content floated='right'>
                        {data.hStat}
                      </List.Content>

                    </List.Item>
                );
            }
    }
}

export default Disk;