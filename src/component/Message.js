/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Message as MessageUI, Transition } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

export class Message extends React.Component {
    render() {
        return (
            <Transition visible={this.props.visible} animation='slide down'>
                <MessageUI positive={!this.props.negative} negative={this.props.negative} onDismiss={this.props.hideMessage}>
                    <MessageUI.Header>
                        {
                            this.props.skipTranslation ?
                                this.props.message.header :
                                <FormattedMessage id={this.props.message.header}/>
                        }
                    </MessageUI.Header>
                    { this.props.message.items && this.props.message.items.length > 0 &&
                        <MessageUI.List>
                            {
                                this.props.message.items.map((item, index) => (
                                    <MessageUI.Item key={index}>
                                        {this.props.skipTranslation ? item : <FormattedMessage id={item}/>}
                                    </MessageUI.Item>
                                ))
                            }
                        </MessageUI.List>
                    }
                </MessageUI>
            </Transition>
        )
    }
}