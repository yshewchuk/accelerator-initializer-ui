/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Label, Card, Image, Divider, List} from 'semantic-ui-react'

export const TemplateCard = (({template, handleSelectTemplate, fluid, intl}) => (
   <Card as={handleSelectTemplate ? 'a' : 'div'} 
        onClick={handleSelectTemplate? ()=>handleSelectTemplate(template) : undefined} 
        fluid={fluid}>
            <Card.Content>
                <Image floated='right' verticalAlign='top' size='mini' src={template.card.imgSrc} />
                <Card.Header content={template.card.title} />
                <Card.Meta>
                    <ProjectStack projectStack={template.card.projectStack} />
                </Card.Meta>
                <Divider />
                <Card.Description content={template.card.description ? intl.formatMessage({id: template.card.description}) : ''} />
            </Card.Content>
            <Card.Content extra>
                <List horizontal size='mini'>
                <DeployStack deployStack={template.card.deployStack} />
                </List>
            </Card.Content>
        </Card>
))

const ProjectStack = ({ projectStack }) => (
    projectStack.map((item, index) => {
        return <Label size='mini' key={index}>{item}</Label>
    })
)

const DeployStack = ({ deployStack }) => (
    
    deployStack.map((item, index) => {
            return <List.Item key={index}>
            <Image size='mini' src={item.imgSrc} />
            <List.Content>{item.content}</List.Content>
        </List.Item>
        })
)
