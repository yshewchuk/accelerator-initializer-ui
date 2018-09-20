/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { ComponentAddFormReducer } from '../src/reducer/ComponentAddFormReducer'
import { actions } from '../src/action/ComponentAddFormAction'

describe('Test ComponentAddFormReducer', () => {
    it('should return initial state', () => {
        expect(ComponentAddFormReducer(undefined, {}))
            .to.deep.equal({ 
                name: '',
                group: ''
            })
    })

    it('should return CHANGE_COMPONENT_NAME state', () => {
        expect(ComponentAddFormReducer(undefined, { type: actions.CHANGE_COMPONENT_NAME, name : 'test-name' }))
            .to.deep.equal({
                name: 'test-name', 
                group: ''
            })
    })


    it('should return ADD_COMPONENT_REJECTED state', () => {
        expect(ComponentAddFormReducer(undefined, { type: actions.ADD_COMPONENT_REJECTED }))
            .to.deep.equal({
                name: '',
                group: ''
            })
    })

    it('should return RESET_FORM state', () => {
        expect(ComponentAddFormReducer(undefined, { type: actions.RESET_FORM }))
            .to.deep.equal({
                name: '',
                group: ''
            })
    })

    it('should return CHANGE_GROUP state', () => {
        expect(ComponentAddFormReducer(undefined, { type: actions.CHANGE_GROUP, group: 'test-group' }))
            .to.deep.equal({
                name: '',
                group: 'test-group'
            })
    })

})