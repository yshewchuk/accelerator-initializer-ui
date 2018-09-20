/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { PageLoaderReducer } from '../src/reducer/PageLoaderReducer'
import { ENABLE, DISABLE } from '../src/action/PageLoaderAction'

describe('Test PageLoaderReducer', () => {
    it('should handle default state', () => {
        expect(PageLoaderReducer(undefined, {})).to.deep.equal({
            loading: false
        })
    })

    it('should handle ENABLE state', () => {
        expect(PageLoaderReducer({ loading: false }, { type: ENABLE })).to.deep.equal({
            loading: true
        })
    })

    it('should handle DISABLE state', () => {
        expect(PageLoaderReducer({ loading: true }, { type: DISABLE })).to.deep.equal({
            loading: false
        })
    })
})