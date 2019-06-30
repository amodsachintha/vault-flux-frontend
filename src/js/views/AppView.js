import React from 'react';
import { Container, Grid, Menu, Table, Icon } from 'semantic-ui-react';

const AppView = (props) => {
    return (
        <Container style={{ marginTop: '3em' }}>
            <Menu
                items={[
                    { key: '1', name: 'link-1', content: 'Link', onClick: props.onFetchFilesFromVault },
                    { key: '2', name: 'link-2', content: 'Link' },
                    { key: '3', name: 'link-3', content: 'Link' },
                ]}
                pointing
            />
            <Grid columns={2}>
                <Grid.Column width={3}>
                    Vault
            </Grid.Column>

                <Grid.Column width={13}>
                    <Table striped>
                        <FilesTableHeader />
                        <Table.Body>
                            {props.files.map(f => <FileRow key={f.id} {...f} />)}
                        </Table.Body>
                    </Table>

                </Grid.Column>
            </Grid>
        </Container>
    );
}

const FilesTableHeader = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan='3'>Your Vault</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
};

const FileRow = (props) => {
    console.log(props);
    return (
        <Table.Row>
            <Table.Cell><Icon name='file outline' /> {props.filename}</Table.Cell>
            <Table.Cell>{props.size}</Table.Cell>
            <Table.Cell textAlign='right'> </Table.Cell>
        </Table.Row>
    )
};

export default AppView;
