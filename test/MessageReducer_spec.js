/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { MessageReducer } from '../src/reducer/MessageReducer'
import * as action from '../src/action/MessageAction'

describe('Test MessageReducer', () => {
    it('should return initial state', () => {
        expect(MessageReducer(undefined, {})).to.deep.equal({
            visible: false,
            negative: false,
            message: {
                header: '',
                items: []
            },
            skipTranslation: false
        })
    })

    it('should return SHOW_MESSAGE state', () => {
        expect(MessageReducer(undefined, {
            type: action.SHOW_MESSAGE,
            negative: false,
            message: {
                header: 'Success',
                items: [ 'message' ]
            }
        })).to.deep.equal({
            visible: true,
            negative: false,
            message: {
                header: 'Success',
                items: [ 'message' ]
            },
            skipTranslation: undefined
        })
    })

    it('should return HIDE_MESSAGE state', () => {
        expect(MessageReducer({
            visible: true,
            negative: true,
            message: {
                header: 'Failure',
                items: [ 'failure message' ]
            }
        }, {
            type: action.HIDE_MESSAGE
        })).to.deep.equal({
            visible: false,
            negative: true,
            message: {
                header: 'Failure',
                items: [ 'failure message' ]
            }
        })
    })
})