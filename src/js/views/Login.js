import React, {Component} from 'react';
import {
    Button,
    Form,
    Grid,
    Message,
    Segment,
    Icon,
    Container,
    Image, Header
} from 'semantic-ui-react';
import {toast} from 'react-toastify';
import axios from 'axios';
import config from "../config";


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            token: "",
            username: "",
            password: ""
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handleSubmit() {
        let {username, password} = this.state;
        if (username === '' || password === '') {
            toast.error('Please fill in your login information!');
        } else {
            const url = `${config.host}:${config.port}/login`;
            axios.post(url, {username, password}).then(res => {
                const {uuid, username, token, expiresIn} = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('uuid', uuid);
                localStorage.setItem('username', username);
                localStorage.setItem('expiresIn', expiresIn);
                toast.success(`Logged in as ${username}`);
                setTimeout(() => {
                    window.location.href = '/home'
                }, 2000);
            }).catch(e => {
                toast.error(e.response.data.msg);
            });
        }
    }

    render() {
        return (
            <Container style={{marginTop: '2em'}}>
                <Grid centered columns={3}>
                    <Grid.Column>
                        <Segment basic>
                            <Image src={'/images/vault_wording.png'} centered size='medium'/>
                            <Segment>
                                <Header style={{textAlign: "center"}}>Login</Header>
                                <Form size="large">
                                    <Form.Input
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="username"
                                        value={this.state.username}
                                        onChange={this.handleUsernameChange}
                                    />
                                    <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handlePasswordChange}
                                    />
                                    <Button animated color="green" fluid size="large" onClick={this.handleSubmit}>
                                        <Button.Content visible>Login</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right'/>
                                        </Button.Content>
                                    </Button>
                                </Form>
                            </Segment>
                            <Message info>
                                Not registered yet? <a href="/signup">Sign Up</a>
                            </Message>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Login;