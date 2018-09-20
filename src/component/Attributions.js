/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Container } from 'semantic-ui-react'
import { FormattedHTMLMessage } from 'react-intl'

export class Attributions extends React.Component {
    render() {
        return (
            <Container style={{ position: 'fixed', bottom: 0 }} textAlign="right" >
                <FormattedHTMLMessage id="app.attributions.message"/>
            </Container>
        )
    }
}

export default Attributions