import React from 'react';
import {Grid, Segment, Container, Divider} from 'semantic-ui-react';
import OverallStatus from './health/OverallStatus';
import DiskBrowser from './health/DiskBrowser';
import DiskDetails from './health/DiskDetails';
import MenuBar from '../components/MenuBar';
import VaultInfo from '../components/VaultInfo';

class DiskHealth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            diskIsSelected: false,
            health: null
        };
        this.handleDiskClick = this.handleDiskClick.bind(this);
    }

    handleDiskClick(data) {
        this.setState({
            diskIsSelected: true,
            health: data,
        })
    }

    render() {

        return (
            <Container style={{ marginTop: '1em' }}>
                <MenuBar />
                <Divider hidden />
                <Divider hidden />
                <VaultInfo />
                <Grid>
                    <Grid.Row columns='equal'>
                        <Grid.Column width={10}>
                            <Grid.Column><DiskBrowser diskClickHandler={this.handleDiskClick}/></Grid.Column>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Grid.Row>
                                <Grid.Column>
                                    <OverallStatus />
                                </Grid.Column>
                            </Grid.Row>

                            <Divider hidden />

                            <Grid.Row>
                                <Grid.Column>
                                    {this.state.diskIsSelected ? <DiskDetails data={this.state.health}/> :
                                        <Segment raised color='red'>No disk selected!</Segment>}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>

                    {/*<Grid.Row>*/}
                    {/*    <Grid.Column width={16} align='center'>*/}
                    {/*        <small>copyright Vault 2019</small>*/}
                    {/*    </Grid.Column>*/}
                    {/*</Grid.Row>*/}

                </Grid>
            </Container>
        );
    }
}

export default DiskHealth;
