/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import * as action from '../src/action/MessageAction'

describe('Test MessageAction', () => {
    it('should create showMessage action', () => {
        expect(action.showMessage({
            header: 'header',
            items: [
                'item1',
                'item2'
            ]
        }, true)).to.deep.equal({
            type: action.SHOW_MESSAGE,
            negative: false,
            message: {
                header: 'header',
                items: [
                    'item1',
                    'item2'
                ]
            },
            skipTranslation: undefined
        })
    })

    it('should create hideMessage action', () => {
        expect(action.hideMessage()).to.deep.equal({
            type: action.HIDE_MESSAGE
        })
    })
})