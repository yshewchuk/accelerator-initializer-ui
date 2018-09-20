/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Card, Container, Divider, Header } from 'semantic-ui-react'
import { TemplateCard } from './TemplateCard'
import { Attributions } from './Attributions'
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
    header: { id: 'app.home.header'},
    subheader: { id: 'app.home.subheader'}
})



export const Home = injectIntl(({ templates, handleSelectTemplate, intl }) => (
    <Container>
        <HomeHeader intl={intl} />
        <Card.Group itemsPerRow={3}>
        {
            templates.map((value, index) => (
                <TemplateCard key={index}
                             template={value} 
                             intl={intl}
                             handleSelectTemplate={handleSelectTemplate}  />
            ))
        }
        </Card.Group>
        <Attributions/>
    </Container>
))

const HomeHeader = ({intl}) => (
    <div>
        <Header as='h2'>
            {intl.formatMessage(messages.header)}
            <Header.Subheader>
            {intl.formatMessage(messages.subheader)}
            </Header.Subheader>
        </Header>
        <Divider />
    </div>
)

