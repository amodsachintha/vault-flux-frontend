import React, { Component } from 'react'
import { Button, Menu, Image } from 'semantic-ui-react'

class MenuBar extends Component {

    render() {
        return (
            <Menu size='small' secondary stackable>
                <Menu.Item >
                    <Image size='mini' src='/images/logo_w.png' centered/>
                </Menu.Item>
                <Menu.Item name='home' active as='a' color='blue' />
                <Menu.Item name='diskhealth' as='a' />

                <Menu.Menu position='right'>
                    <Menu.Item name='about' as='a' />
                    <Menu.Item><Button negative as='a' name='Logout'>Logout</Button></Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default MenuBar;