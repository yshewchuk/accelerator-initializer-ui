/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { ENABLE, DISABLE, enable, disable } from '../src/action/PageLoaderAction'

describe('Test PageLoaderAction', () => {
    it('should create enable action', () => {
        expect(enable()).to.deep.equal({
            type: ENABLE
        })
    })

    it('should create disable action', () => {
        expect(disable()).to.deep.equal({
           type: DISABLE
        })
    })
})