/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { expect } from 'chai'
import { HomeReducer } from '../src/reducer/HomeReducer'
import { actions } from '../src/action/HomeAction'
import { templates } from '../src/helper/templates'

describe('Test HomeReducer', () => {
    it('should return initial state', () => {
        expect(HomeReducer(undefined, {}))
            .to.deep.equal({ 
                templateSelected: {card: {projectStack: [], deployStack: [] }},
                templates: templates
            })
    })

    it('should return SELECT_TEMPLATE state', () => {
        expect(HomeReducer(undefined, { type: actions.SELECT_TEMPLATE, template: 'abc' }))
            .to.deep.equal({
                templateSelected: 'abc',
                templates: templates
            })
    })

    
})