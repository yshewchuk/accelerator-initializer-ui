/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

export class PageLoader extends React.Component {
    render() {
        return (
            <Dimmer active={this.props.loading} page>
                <Loader><FormattedMessage id="app.pageLoader.loading"/></Loader>
            </Dimmer>
        )
    }
}