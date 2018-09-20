/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import { Message } from '../Message'
import { hideMessage } from '../../action/MessageAction'

const mapStateToProps = (state) => {
    return {
        visible: state.message.visible,
        negative: state.message.negative,
        message: state.message.message,
        skipTranslation: state.message.skipTranslation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideMessage: () => {
            dispatch(hideMessage())
        }
    }
}

export const messagify = (BaseComponent) => {
    class Messagified extends React.Component {
        render() {
            return (
                <Segment basic>
                    <Message {...this.props} />
                    <BaseComponent {...this.props} />
                </Segment>
            )

        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Messagified)
}