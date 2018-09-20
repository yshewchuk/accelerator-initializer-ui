/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Container, Button, Divider, Header, Form, Grid } from 'semantic-ui-react'
import { injectIntl, defineMessages } from 'react-intl';
import { TemplateCard } from './TemplateCard'
import { Attributions } from './Attributions';

const messages = defineMessages({
    group: {
        id: 'app.componentAddForm.group',
    },
    groupPlaceholder: {
        id: 'app.componentAddForm.group.placeholder'
    },
    download: {
        id: 'app.componentAddForm.download'
    },
    name: {
        id: 'app.componentAddForm.name'
    },
    namePlaceholder: {
        id: 'app.componentAddForm.name.placeholder'
    },
    type: {
        id: 'app.componentAddForm.type'
    },
    cancel: {
        id: 'app.componentAddForm.cancel'
    },
    header: {
        id: 'app.componentAddForm.header'
    },
    subheader: {
        id: 'app.componentAddForm.subheader'
    }
})

export class ComponentAddForm extends React.Component {
    
    render() {
        return (
            <Container>
                <Header as='h2'>
                    {this.props.intl.formatMessage(messages.header)}
                    <Header.Subheader>
                        {this.props.intl.formatMessage(messages.subheader)}
                    </Header.Subheader>
                </Header >
                <Divider />
                <Grid column={16} >
                    <Grid.Column width={6} >
                        <TemplateCard template={this.props.templateSelected} fluid intl={this.props.intl} />

                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Form>
                            <Form.Field required>
                                <label>{this.props.intl.formatMessage(messages.group)}</label>
                                <input placeholder={this.props.intl.formatMessage(messages.groupPlaceholder)}
                                    onChange={this.props.handleGroupChange}>
                                </input>
                            </Form.Field>
                            <Form.Field required>
                                <label>{this.props.intl.formatMessage(messages.name)}</label>
                                <input className="repositoryNameInput" placeholder={this.props.intl.formatMessage(messages.namePlaceholder)}
                                    onChange={this.props.handleNameChange} />
                            </Form.Field>
                            <Button as="a" className="cancelButton" content={this.props.intl.formatMessage(messages.cancel)} onClick={() => this.props.handleCancel()} />
                            <Button.Group>
                                <Button primary content={this.props.intl.formatMessage(messages.download)} onClick={() => this.props.onDownload(this.props.component, this.props.templateSelected)}  ></Button>
                            </Button.Group>
                        </Form>
                    </Grid.Column>
                </Grid>
                <Attributions/>
            </Container>
        )
    }
}

export default injectIntl(ComponentAddForm)
