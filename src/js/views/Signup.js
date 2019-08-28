import React from 'react';
import {Grid, Segment, Container, Form, Button, Image, Header, Message} from 'semantic-ui-react';
import axios from 'axios';
import {toast} from 'react-toastify';
import config from '../config';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSignupButtonClick = this.handleSignupButtonClick.bind(this);
    }

    handleSignupButtonClick() {
        let {name, username, password} = this.state;
        if (name.length >= 3 && username.length >= 4 && password.length >= 6) {
            const url = `${config.host}:${config.port}/register`;
            axios.post(url, {...this.state}).then(res => {
                console.log(res.data);
                localStorage.setItem('token',res.data.token);
                toast.success(`Logged in as ${res.data.user.username}`)
            }).catch(e => {
                if (e.response.data.msg)
                    toast.error(e.response.data.msg);
                else
                    toast.error('Undefined error!');
            });
        } else {
            toast.warn('Input validation failed!');
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    render() {
        return (
            <Container style={{marginTop: '1em'}}>
                <Grid centered columns={3}>
                    <Grid.Column>
                        <Segment basic>
                            <Image src={'/images/vault_wording.png'} centered size='small'/>
                            <Segment>
                                <Header style={{textAlign:"center"}}>Signup</Header>
                                <Form size="large">
                                    <Form.Input
                                        label="Name"
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                    />
                                    <Form.Input
                                        label="Username"
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.handleUsernameChange}
                                    />
                                    <Form.Input
                                        label="Password"
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handlePasswordChange}
                                    />
                                    <Button color="blue" fluid size="large" onClick={this.handleSignupButtonClick}>
                                        <Button.Content visible>Signup</Button.Content>
                                    </Button>
                                </Form>
                            </Segment>
                            <Message positive>
                                Already registered? <a href="/">Login</a>
                            </Message>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }


}