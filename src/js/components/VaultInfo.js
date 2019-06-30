import React from 'react';
import { Message } from 'semantic-ui-react';

class VaultInfo extends React.Component {
    render() {
        return (
            <Message info>
                <Message.Header>Vault Alpha 0.0.5</Message.Header>
                <p>Alpha stage preview</p>
            </Message>
            // <Card fluid raised >
            //     <Card.Content>
            //         <Card.Header>Vault Alpha 0.0.5</Card.Header>
            //         <Card.Meta>
            //             <span>nodes in swarm: 4</span>
            //         </Card.Meta>
            //         <Card.Description>
            //             Alpha stage preview
            //         </Card.Description>
            //     </Card.Content>
            // </Card>
        );
    }
}

export default VaultInfo;