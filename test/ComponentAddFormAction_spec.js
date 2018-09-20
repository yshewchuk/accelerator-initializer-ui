/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { actions, changeComponentName, resetForm, changeGroup, download } from '../src/action/ComponentAddFormAction'
import  * as api  from '../src/api/ComponentApi'
import sinon from 'sinon'
import { SHOW_MESSAGE } from '../src/action/MessageAction'

describe('Test component add form action', () => {

    it('should call api.download', (done) => {
        const dispatch = sinon.spy()
        window.URL.createObjectURL = sinon.stub().returns('test')
        window.URL.revokeObjectURL = sinon.stub()
        
        sinon.stub(api, 'download').resolves({ data: 'abc' })
        download({'group': 'test-group'})(dispatch).then(() => {
            expect(dispatch.getCall(0).calledWith(sinon.match({
                type: SHOW_MESSAGE,
                negative: true,
                header: sinon.match.any,
                items: []
            })))
            done()
        }).catch(err=>done(err))
    })

    it('should create change_component_name action', () => {
        expect(changeComponentName('abc')).to.deep.equal({
            type: actions.CHANGE_COMPONENT_NAME,
            name: 'abc'
        })
    })

    it('should create reset_form action', () => {
        expect(resetForm()).to.deep.equal({
            type: actions.RESET_FORM
        })
    })

    it('should create changeGroup action', () => {
        expect(changeGroup('test-group')).to.deep.equal({
            type: actions.CHANGE_GROUP,
            group: 'test-group'
        })
    })

})