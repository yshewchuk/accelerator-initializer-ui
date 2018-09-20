/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { NavbarReducer } from '../../src/reducer/NavbarReducer'
import { actions } from '../../src/action/NavbarAction'

describe('Test navbar reducer', () => {
    before(() => {
        localStorage.setItem('language', 'en')
    })

    after(() => {
        localStorage.clear()
    })

    it('should return initial state', () => {
        expect(NavbarReducer(undefined, {}))
            .to.deep.equal({
                language: 'en'
            })
    })

    it('should return SELECT_LANGUAGE state', () => {
        expect(NavbarReducer(undefined, { type: actions.SELECT_LANGUAGE, language : 'es' }))
            .to.deep.equal({
                language: 'es'
            })
    })

})