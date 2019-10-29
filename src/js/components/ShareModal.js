import React, {Component} from 'react';
import {Modal, Label, Divider, Button} from 'semantic-ui-react';
import axios from 'axios';
import config from '../config';
import {toast} from "react-toastify";

export default class ShareModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selectedUser: null
        };
    }

    componentWillMount() {
        let data = this.getUsers();
        data.then(d => {
            let data = [];
            Object.keys(d).forEach(key => {
                let uuid = localStorage.getItem('uuid');
                if (uuid) {
                    if (d[key].uuid !== uuid)
                        data.push(d[key]);
                }
            });
            this.setState({
                users: data
            });
        });
    }

    getUsers = async () => {
        const url = `${config.host}:${config.port}/users`;
        const call = await fetch(url);
        return await call.json();
    };

    shareFile = (fileID, uuid) => {
        if (window.confirm('Are you sure?')) {
            const url = `${config.host}:${config.port}/share`;
            axios.post(url, {
                uuid,
                fileID
            }).then(resp => {
                toast.success(resp.data.msg);
            }).catch(e => {
                console.log(e);
            });
        }
    };

    getAvatar = (username) => {
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
                return '/images/default.png'
        }
    };

    render() {
        let {btn, fileID} = this.props;
        let {users} = this.state;
        return (
            <Modal trigger={btn} size='small' dimmer='blurring'>
                <Modal.Header>Select Users</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Label.Group size='large'>
                            {users.map(u =>
                                <div>
                                    <Label as='a' image onClick={() => this.shareFile(fileID, u.uuid)}>
                                        <img src={this.getAvatar(u.username)}/>
                                        {u.username}
                                    </Label>
                                    <Divider hidden/>
                                </div>
                            )}
                        </Label.Group>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.close} negative>
                        Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}