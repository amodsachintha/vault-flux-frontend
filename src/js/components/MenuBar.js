import React, {Component} from 'react'
import {Button, Menu, Image} from 'semantic-ui-react'

class MenuBar extends Component {

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        localStorage.clear();
        window.location.href='/'
    }

    render() {
        return (

            <Menu size='small' secondary stackable>
                <Menu.Item>
                    <Image size='mini' src='/images/logo_w.png' centered/>
                </Menu.Item>
                <Menu.Item name='home' as='a' color='blue' href={'/home'}/>
                <Menu.Item name='diskhealth' as='a' href={'/health'}/>

                <Menu.Menu position='right'>
                    <Menu.Item><Button negative name='Logout' onClick={this.handleLogout} >Logout</Button></Menu.Item>
                </Menu.Menu>
            </Menu>

        )
    }
}

export default MenuBar;