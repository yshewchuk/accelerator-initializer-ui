/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { actions, selectTemplate } from '../src/action/HomeAction'


describe('Test home action', () => {


    it('should create select_template action', () => {
        expect(selectTemplate('abc')).to.deep.equal({
            type: actions.SELECT_TEMPLATE,
            template: 'abc'
        })
    })
})