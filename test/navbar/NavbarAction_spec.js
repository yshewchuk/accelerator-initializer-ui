/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { actions, selectLanguage } from '../../src/action/NavbarAction'
import sinon from 'sinon'
import * as locationApi from '../../src/helper/LocationApi'

describe('Test navbar action', () => {

    it('should create selectLanguage action', () => {
        localStorage.clear()
        const dispatch = sinon.spy()
        sinon.stub(locationApi, 'reload')
        selectLanguage('es')(dispatch)
        expect(dispatch.calledWith(sinon.match({
            type: actions.SELECT_LANGUAGE,
            language: 'es'
        }))).to.be.true
        expect(localStorage.getItem('language')).to.equal('es')
        expect(locationApi.reload.calledOnce).to.be.true
    })
})